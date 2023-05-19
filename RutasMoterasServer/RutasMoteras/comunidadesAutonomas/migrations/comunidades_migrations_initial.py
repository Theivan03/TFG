from django.db import migrations
from comunidadesAutonomas.models import Comunidades

def usuarios_migrations(apps, schema_editor):
    Comunidades.objects.create(nombre="Comunidad Autónoma de Melilla")
    Comunidades.objects.create(nombre="Ciudad Autónoma de Ceuta")
    Comunidades.objects.create(nombre="La Rioja")
    Comunidades.objects.create(nombre="País Vasco")
    Comunidades.objects.create(nombre="Comunidad Foral de Navarra")
    Comunidades.objects.create(nombre="Comunidad de Madrid")
    Comunidades.objects.create(nombre="Galicia")
    Comunidades.objects.create(nombre="Extremadura")
    Comunidades.objects.create(nombre="Cataluña")
    Comunidades.objects.create(nombre="Castilla-La Mancha")
    Comunidades.objects.create(nombre="Canarias")
    Comunidades.objects.create(nombre="Illes Balears")
    Comunidades.objects.create(nombre="Principado de Asturias")
    Comunidades.objects.create(nombre="Aragón")
    Comunidades.objects.create(nombre="Andalucía")
    Comunidades.objects.create(nombre="Castilla y León")
    Comunidades.objects.create(nombre="Murcia")
    Comunidades.objects.create(nombre="Comunidad Valenciana")
    

class Migration(migrations.Migration):
    
    dependencies = [
        ('comunidadesAutonomas', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(usuarios_migrations),
    ]