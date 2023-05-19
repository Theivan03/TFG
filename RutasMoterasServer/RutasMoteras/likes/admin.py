from django.contrib import admin
from .models import likes

# Register your models here.

class likesAdmin(admin.ModelAdmin):
    list_display = ['contador']

admin.site.register(likes, likesAdmin)