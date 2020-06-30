from rest_framework import serializers

from despesas.models import Despesa, Categoria


class DespesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despesa
        fields = ('valor','data','descricao','categoria')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id','nome')


class TestSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nome = serializers.CharField(max_length=50)
    
    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Categoria.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.nome = validated_data.get('nome', instance.nome)
        
        instance.save()
        
        return instance