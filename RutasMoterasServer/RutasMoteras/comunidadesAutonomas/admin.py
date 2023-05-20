from django.contrib import admin
from .models import Comunidades

# Register your models here.

# Admin de las Comunidades Autonomas
class ComunidadesAdmin(admin.ModelAdmin):
    list_display = ['nombre']

admin.site.register(Comunidades, ComunidadesAdmin)