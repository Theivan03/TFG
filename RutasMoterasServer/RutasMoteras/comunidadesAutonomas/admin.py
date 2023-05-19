from django.contrib import admin
from .models import Comunidades

# Register your models here.

class ComunidadesAdmin(admin.ModelAdmin):
    list_display = ['nombre']

admin.site.register(Comunidades, ComunidadesAdmin)