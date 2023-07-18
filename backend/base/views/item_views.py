from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from base.models import *
from base.serializers import *
import json

#Logical Expressions
def getQueryResponse(idCategory, yearFrom, yearTo, query):
    serializer=''

    items = Item.objects.filter(
            Q(name__icontains=query) | Q(description__icontains=query),
            idCategory__in=idCategory,
            year__gte=int(yearFrom),
            year__lte=int(yearTo)
    )
    serializer = ItemSerializer(items, many=True)
    
    if serializer:
        response = Response(serializer.data)
    else:
        response = Response({"error": "Bad Request"}, status=400)

    return response

#ITEM
""" By Filters # !Avoid number=''
    Implement all int query here
    item/?id=${id}&idCategory=${idCategory}
    item/ with any combination
    !Avoid number=''
"""
@api_view(['GET'])
def getItemsByFilters(request):
    
    #Get filters from request
    params = {
        "id": lambda value: { "id": value },
        "idCategory": lambda value: { "idCategory": value }
    }
    filters = {}

    for param, value in request.GET.items():
        if params[param]:
            filters.update(params[param](value))            

    #Get Response
    try:
        items = Item.objects.filter(**filters)
        items = items.order_by('year')
        serializer = ItemSerializer(items, many=True)
        response = Response(serializer.data)       
    except (Item.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response

# By Query # !Avoid number=''
# query/?idCategory=&yearFrom=&yearTo=&query= 
# query/ with any combination
@api_view(['GET'])
def getItemsByQuery(request):
    
    #Get params from request
    allCategory = Category.objects.values_list('id', flat = True)
    idCategory = request.GET.get('idCategory', list(allCategory))
    yearFrom = request.GET.get('yearFrom',0)
    yearTo = request.GET.get('yearTo',9999)
    query = request.GET.get('query','')    

    #Get Response
    try:
        response = getQueryResponse(idCategory, yearFrom, yearTo, query)        
    except (Item.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response

#SAVE new item
@api_view(['POST'])
@permission_classes([IsAdminUser])
def setItem(request):  
    print(request)

    #Get filters from request
    params = {
        "id": lambda value: { "id": value },
        "name": lambda value: { "name": value },
        "description": lambda value: { "description": value },
        "image": lambda value: { "image" : value },
        "year": lambda value: { "year" : value },
        "idCategory": lambda value: { "idCategory" : value },
        "brand": lambda value: { "brand" : value },
        "tag": lambda value: { "tag" : value },
        "price": lambda value: { "price" : value },
        "available": lambda value: { "available" : True }        
    }
    fields = {}
    data = request.POST
    image = request.FILES.get('image')

    for param, value in data.items():
        if params[param]:
            fields.update(params[param](value)) 
            
    idItem = fields.pop("id", None)
    idCategory = fields.pop("idCategory", None)

    try:
        category = Category.objects.get(id=int(idCategory)) 

        if idItem == "":
            item = Item(**fields)      
        else:
            item = Item.objects.get(id=int(idItem))    
            for key, value in fields.items():
                setattr(item, key, value)
        
        item.idCategory = category   
        item.image = image
        item.save()
        response = Response({'success': 'true'})
    except (Item.DoesNotExist):
        response = Response({"success": "false"})

    return response

#CATEGORY 
# By Filters: category/?id=${id} or category/ 
@api_view(['GET'])
def getCategoryByFilters(request):    
    id = request.GET.get('id',0)
    
    try:
        if id:
            category = Category.objects.get(id=int(id))
            serializer = CategorySerializer(category, many=False)
        else:
            category = Category.objects.all()
            serializer = CategorySerializer(category, many=True)
        
        if serializer:
            response = Response(serializer.data)
        else:
            response = Response({"error": "Bad Request"}, status=400)

    except (Category.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response


#CONFIGURATION 
# All: config/
@api_view(['GET'])
def getConfiguration(request):    
    try:
        config = Configuration.objects.all()
        serializer = ConfigurationSerializer(config, many=True)
        response = Response(serializer.data)
    except (Category.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response

@api_view(['POST'])
@permission_classes([IsAdminUser])
def setConfiguration(request):  

    #Get filters from request
    params = {
        "id": lambda value: { "id": value },
        "setting": lambda value: { "setting": value },
        "settingField": lambda value: { "settingField": value },
        "value": lambda value: { "value" : value }
    }
    fields = {}
    data = json.loads(request.body)

    for param, value in data.items():
        if params[param]:
            fields.update(params[param](value)) 
    idConfig = fields.pop("id", None)

    try:
        config = Configuration.objects.get(id=int(idConfig[0]))
        for key, value in fields.items():
            setattr(config, key, value)
        config.save()

        response = Response({'success': 'true'})
    except (Configuration.DoesNotExist):
        response = Response({"success": "false"})

    return response
