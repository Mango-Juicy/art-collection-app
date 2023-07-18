from rest_framework import serializers 

from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Item, Category, Configuration

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

# CONFIGURATION
class ConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Configuration
        fields = '__all__'


# USER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active']

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'token']

    def get_token(self, obj):      
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

