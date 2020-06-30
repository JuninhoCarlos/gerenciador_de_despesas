from django.urls import path, include
from rest_framework import routers

from .views import DespesaViewSet,CategoriaViewSet, CategoriaAPIView

router = routers.DefaultRouter()
router.register(r'categoria',CategoriaViewSet)
router.register(r'despesa',DespesaViewSet)

urlpatterns = [
    path('', include(router.urls))
    #path('categoria/', CategoriaAPIView.as_view())
]

