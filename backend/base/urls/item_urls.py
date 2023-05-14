
from django.urls import path
from base.views import item_views as views

urlpatterns = [
    path('item/', 
        views.getItemsByFilters, 
        name='itemByFilters'
    ),

    path('query/', 
        views.getItemsByQuery, 
        name='itemByQuery'
    ),

    path('category/', 
        views.getCategoryByFilters, 
        name='categoryByFilters'
        ),
    
    path('config/', 
        views.getConfiguration, 
        name='config'
        ),
    ]
