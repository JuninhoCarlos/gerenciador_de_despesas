from django.urls import path

from .views import DespesaAPIView

urlpatterns = [
    path('',DespesaAPIView.as_view())
]

