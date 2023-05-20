from django.db import models

# Create your models here.

# Modelos de las Motos
class Motos(models.Model):
    tipo = models.CharField(max_length = 256, unique=True)
    habitad = models.CharField(max_length = 256)

    def __str__(self):
        return self.tipo + self.habitad

    class Meta:
        verbose_name = 'Motos'
        verbose_name_plural = 'Motos'