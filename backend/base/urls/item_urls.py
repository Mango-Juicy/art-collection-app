
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

    path('setItem/', 
        views.setItem, 
        name='setItem'
        ),

    path('category/', 
        views.getCategoryByFilters, 
        name='categoryByFilters'
        ),
    
    path('config/', 
        views.getConfiguration, 
        name='config'
        ),
    
    path('setConfig/', 
        views.setConfiguration, 
        name='setConfig'
        ),
    ]
