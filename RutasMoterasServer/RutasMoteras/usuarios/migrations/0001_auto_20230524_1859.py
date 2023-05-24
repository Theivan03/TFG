# Generated by Django 3.2 on 2023-05-24 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', 'users_migrations_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='activo',
        ),
        migrations.AddField(
            model_name='myuser',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='myuser',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
    ]
