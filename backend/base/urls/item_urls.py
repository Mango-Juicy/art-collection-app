
from django.urls import path
from base.views import item_views as views

urlpatterns = [
    path('', views.getItems , name='products'),
    path('<str:pk>/', views.getItem , name='product'),
    path('category/<str:pk>/', views.getCategory , name='category'),
    ]
