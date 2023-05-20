from django.contrib import admin
from .models import Ruta

# Admin de las Rutas
class RutaAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'fecha_creacion', 'descripcion', 'tipomoto', 'comunidad']

admin.site.register(Ruta, RutaAdmin)