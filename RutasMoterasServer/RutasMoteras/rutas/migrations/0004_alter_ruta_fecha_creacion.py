# Generated by Django 3.2 on 2023-05-17 11:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('rutas', '0003_ruta_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ruta',
            name='fecha_creacion',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
    ]