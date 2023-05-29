from django.db import models
from django.utils import timezone
from motos.models import Motos
from comunidadesAutonomas.models import Comunidades
from usuarios.models import MyUser
from likes.models import likes

# Modelos de las Rutas
class Ruta(models.Model):
    titulo = models.CharField(max_length = 256, unique=False)
    fecha_creacion = models.DateTimeField(default=timezone.now, null=True)
    descripcion = models.CharField(max_length = 1024, unique=False)
    tipomoto = models.ForeignKey(Motos, on_delete=models.PROTECT, blank=False, null=False)
    usuario = models.ForeignKey(MyUser, on_delete=models.PROTECT, blank=False, null=False)
    comunidad = models.ForeignKey(Comunidades, on_delete=models.PROTECT, blank=False, null=False)

    def __str__(self):
        return str(self.titulo) + str(self.descripcion)
    
    class Meta:
        verbose_name = 'Ruta'
        verbose_name_plural = 'Rutas'