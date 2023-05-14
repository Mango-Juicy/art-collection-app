from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from base.models import *
from base.serializers import *


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
# By Filters # !Avoid number='' # Implement all int query here
# item/?id=${id}&idCategory=${idCategory}
# item/ with any combination
# !Avoid number=''
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
