from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    
    name = models.CharField(max_length=200, null=True, blank=True)

    modifiedAt = models.DateTimeField(auto_now=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    modifiedBy =models.ForeignKey(settings.AUTH_USER_MODEL, related_name="categoryModifiedBy", null=True, blank=True, on_delete=models.SET_NULL)
    createdBy = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="categoryCreatedBy", null=True, blank=True, on_delete=models.SET_NULL)
    active = models.BooleanField(null=True, blank=True, default=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Item(models.Model):
    
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    year = models.IntegerField(null=True, blank=True, default=0)
    image = models.ImageField(null=True, blank=True, default='/placeholder.png')
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    tag = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    available = models.BooleanField(null=True, blank=True, default=True)

    modifiedAt = models.DateTimeField(auto_now=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    modifiedBy =models.ForeignKey(settings.AUTH_USER_MODEL, related_name="modifiedBy", null=True, blank=True, on_delete=models.SET_NULL)
    createdBy = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="createdBy", null=True, blank=True, on_delete=models.SET_NULL)
    active = models.BooleanField(null=True, blank=True, default=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
