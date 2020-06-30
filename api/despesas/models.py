from django.db import models

# Create your models here.
class Categoria(models.Model):
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome


class Despesa(models.Model):
    valor = models.FloatField()
    data  = models.DateField() 
    descricao = models.CharField(max_length=50)
    categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE)

    def __str__(self):
        return self.descricao
