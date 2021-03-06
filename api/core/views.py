
from rest_framework import viewsets,generics,status

from rest_framework.views import APIView
from rest_framework.response import Response

from despesas.models import Despesa,Categoria
from .serializers import DespesaSerializer, CategoriaSerializer,TestSerializer


class DespesaViewSet(viewsets.ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaAPIView(APIView):

    def get(self,request,format=None):
        print("Recebendo um get")
        print(request.data)
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias,many=True)
        return Response(serializer.data)
    
    def post(self,request,format=None):
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
