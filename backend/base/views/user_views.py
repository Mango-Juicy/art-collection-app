from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from django.contrib.auth.models import User
from base.serializers import UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import status
from django.contrib.auth.hashers import make_password

import pprint as pp


#Returns UserToken: {id, token, access, refresh}
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data

       
        for k, v in serializer.items():
            data[k] = v 
        
        return data        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    idUser = request.GET.get('id')
    user = User.objects.get(id=int(idUser))

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)

    data = request.data
    user.username = data['username']
    user.first_name = data['first_name']    
    user.last_name = data['last_name']    
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = User.objects.create(
        username=data['username'],
        password=make_password(data['password']),
        first_name=data['first_name'],
        last_name=data['last_name'],        
        email=data['email']        
        )

    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)



# USERS MANAGER
@api_view(['POST'])
@permission_classes([IsAdminUser])
def setUser(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.username = data['username']
    user.first_name = data['first_name']    
    user.last_name = data['last_name']    
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()
    return Response(serializer.data)

# USERS MANAGER
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUser(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)




