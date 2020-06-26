from rest_framework import generics

from despesas.models import Despesa
from .serializers import DespesaSerializer

class DespesaAPIView(generics.ListAPIView):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer
