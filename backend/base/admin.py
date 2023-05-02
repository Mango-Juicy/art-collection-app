from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'idCategory')
    exclude = ['createdBy','modifiedBy']

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only set createdBy during the first save.
            obj.createdBy = request.user
        obj.modifiedBy = request.user
        super().save_model(request, obj, form, change)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('label', 'url', 'menu')
    exclude = ['createdBy','modifiedBy']

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only set createdBy during the first save.
            obj.createdBy = request.user
        obj.modifiedBy = request.user
        super().save_model(request, obj, form, change)

