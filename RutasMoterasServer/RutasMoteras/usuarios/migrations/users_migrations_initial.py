from django.db import migrations
from usuarios.models import MyUser

def usuarios_migrations(apps, schema_editor):
    MyUser.objects.create_superuser(email="ivan.cabrera@gmail.com", password='romera44', username="ivan")
    MyUser.objects.create_superuser(email="ivanca2003@gmail.com", password='theivan03', username="ivan")

class Migration(migrations.Migration):
    
    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(usuarios_migrations),
    ]