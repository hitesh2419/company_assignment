from django.urls import path
from backend.views import promocode_views as views

urlpatterns=[
     path('', views.GetPromocode.as_view()),
]