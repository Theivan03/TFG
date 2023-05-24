from django.contrib import admin
from .models import MyUser

# Admin de los Usuarios
class MyUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'create_date', 'update_date']

admin.site.register(MyUser, MyUserAdmin)