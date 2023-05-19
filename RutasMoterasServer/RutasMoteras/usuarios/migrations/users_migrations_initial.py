from django.db import migrations
from usuarios.models import MyUser

def usuarios_migrations(apps, schema_editor):
    MyUser.objects.create_superuser(email="ivan.cabrera@gmail.com", password='romera44')

class Migration(migrations.Migration):
    
    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(usuarios_migrations),
    ]