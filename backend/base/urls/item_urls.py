
from django.urls import path
from base.views import item_views as views

urlpatterns = [
    path('item/', views.getItemsByFilters , name='itemByFilters'),

    path('category/', views.getCategoryByFilters, name='categoryByFilters'),
    ]
