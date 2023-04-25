from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Item, Category
from base.serializers import ItemSerializer, CategorySerializer

#ITEM
#ItemsByCategory cv                                                                                                                                                                                                                                                                                                                                                                                                                                
@api_view(['GET'])
def getItems(request):
    idCategory = int(request.GET.get('category'))
    products = Item.objects.filter(category=idCategory)
    serializer = ItemSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getItem(request, pk):
    product = Item.objects.get(_id=pk)
    serializer = ItemSerializer(product, many=False)
    return Response(serializer.data)

#CATEGORY
@api_view(['GET'])
def getCategory(request, pk):
    product = Category.objects.get(_id=pk)
    serializer = CategorySerializer(product, many=False)
    return Response(serializer.data)


