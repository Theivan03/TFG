from rest_framework import serializers
from motos.models import Motos

# Serializadores para mostrar los datos necesarios en la API.
class MotosListSerializer(serializers.ModelSerializer):

    tipo = serializers.SerializerMethodField()

    class Meta:
        model = Motos
        fields = (
            'id',
            'tipo',
            'habitad'
        )

    def get_tipo(self, instance):
        return str(instance.tipo)