from django.urls import path
from . import views

urlpatterns = [

    path('', views.home, name='home'),
    path('beers/', views.beer, name='beer'),
    path('index/', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.PostDetailView.as_view(), name='detail'),
    path('edit/<int:pk>/', views.edit, name='edit'),
    path('post/', views.postview, name='post'),
    path('delete/<int:pk>/', views.delete, name='delete'),
]