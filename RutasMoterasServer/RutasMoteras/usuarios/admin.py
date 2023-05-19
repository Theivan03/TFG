from django.contrib import admin
from .models import MyUser

class MyUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'activo', 'create_date', 'update_date']

admin.site.register(MyUser, MyUserAdmin)