from rest_framework import serializers 

from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Item, Category

# ITEM
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

# CATEGORY
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# USER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff']


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'token']

    def get_token(self, obj):      
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

