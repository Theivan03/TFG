from django.contrib import admin
from .models import Motos

# Register your models here.

class MotosAdmin(admin.ModelAdmin):
    list_display = ['tipo', 'habitad']

admin.site.register(Motos, MotosAdmin)