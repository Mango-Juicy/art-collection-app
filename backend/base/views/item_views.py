from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from base.models import Item, Category
from base.serializers import ItemSerializer, CategorySerializer

def getResponse(id,idCategory,query):
    serializer=''
   
    if id:
        items = Item.objects.get(id=int(id))
        serializer = ItemSerializer(items, many=False)
    if idCategory:
        items = Item.objects.filter(idCategory=int(idCategory))
        serializer = ItemSerializer(items, many=True)
    if query:
        items = Item.objects.filter(
            Q(name__icontains=query) | 
            Q(description__icontains=query)
        )
        serializer = ItemSerializer(items, many=True)
    
    if serializer:
        response = Response(serializer.data)
    else:
        response = Response({"error": "Bad Request"}, status=400)
    
    return response
        

#ITEM
# By Filters: implement all query here as item/?keyword=${keyword}
@api_view(['GET'])
def getItemsByFilters(request):
    
    id = request.GET.get('id',0)
    idCategory = request.GET.get('idCategory',0)
    query = request.GET.get('query','')

    try:
        response = getResponse(id,idCategory,query)       
    except (Item.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response

@api_view(['GET'])
def getItemsByQuery(request):
    
    idCategory = request.GET.get('idCategory',0)
    query = request.GET.get('query','')

    serializer=''

    try:
        items = Item.objects.filter(
            Q(name__icontains=query) | 
            Q(description__icontains=query),
            idCategory=int(idCategory)
        )
        serializer = ItemSerializer(items, many=True)
        
        if serializer:
            response = Response(serializer.data)
        else:
            response = Response({"error": "Bad Request"}, status=400)
            
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
            category = Category.objects
            serializer = CategorySerializer(category, many=True)
        
        if serializer:
            response = Response(serializer.data)
        else:
            response = Response({"error": "Bad Request"}, status=400)

    except (Category.DoesNotExist):
        response = Response({"error": "Item does not exist"}, status=404)

    return response
