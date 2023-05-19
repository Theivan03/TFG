from rest_framework import serializers
from likes.models import likes

# Serializadores para mostrar los datos necesarios en la API.
class RutaListSerializer(serializers.ModelSerializer):


    class Meta:
        model = likes
        fields = (
            'contador',
        )


class RutaDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = likes
        fields = (
            'contador',
        )