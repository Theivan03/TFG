from rest_framework import serializers
from comunidadesAutonomas.models import Comunidades

# Serializadores para mostrar los datos necesarios en la API.
class ComunidadesListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comunidades
        fields = (
            'id',
            'nombre',
        )