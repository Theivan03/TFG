from django.db import migrations
from motos.models import Motos

def usuarios_migrations(apps, schema_editor):
    Motos.objects.create(tipo="Deportiva", habitad='asfalto')
    Motos.objects.create(tipo="Trail", habitad='asfalto')
    Motos.objects.create(tipo="Naked", habitad='asfalto')
    Motos.objects.create(tipo="Clásica", habitad='asfalto')
    Motos.objects.create(tipo="Scooter", habitad='asfalto')
    Motos.objects.create(tipo="Custom", habitad='asfalto')
    Motos.objects.create(tipo="Cafe Racer", habitad='asfalto')
    Motos.objects.create(tipo="Scrambler", habitad='asfalto')
    Motos.objects.create(tipo="Touring", habitad='asfalto')
    Motos.objects.create(tipo="Enduro", habitad='tierra')
    Motos.objects.create(tipo="Motocross", habitad='tierra')
    Motos.objects.create(tipo="Trial", habitad='tierra')
    Motos.objects.create(tipo="Rally", habitad='tierra')
    Motos.objects.create(tipo="Supermotard", habitad='asfalto')
    Motos.objects.create(tipo="Dirt Track - Flat Track", habitad='asfalto')
    Motos.objects.create(tipo="Speedway", habitad='asfalto')

    

class Migration(migrations.Migration):
    
    dependencies = [
        ('motos', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(usuarios_migrations),
    ]