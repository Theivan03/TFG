from django.db import models

# Create your models here.

class likes(models.Model):
    contador = models.IntegerField(default=0)

    def __str__(self):
        return str(self.contador)

    class Meta:
        verbose_name = 'Like'
        verbose_name_plural = 'Likes'