from django.db import models

# Create your models here.

class Comunidades(models.Model):
    nombre = models.CharField(max_length = 256, unique=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Comunidad'
        verbose_name_plural = 'Comunidades'