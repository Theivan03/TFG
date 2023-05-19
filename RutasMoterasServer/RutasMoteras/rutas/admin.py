from django.contrib import admin
from .models import Ruta


class RutaAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'fecha_creacion', 'descripcion', 'tipomoto', 'comunidad']

admin.site.register(Ruta, RutaAdmin)