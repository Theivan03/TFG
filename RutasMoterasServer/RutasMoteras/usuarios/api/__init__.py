from rest_framework import serializers
from rutas.models import Ruta

#UD11.2.a

class RutaListSerializer(serializers.ModelSerializer):


    class Meta:
        model = Ruta
        fields = (
            'usuario',
            'titulo',
            'descripcion',
            'comunidad', 
            'tipomoto',
        )


class RutaDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ruta
        fields = (
            'usuario',
            'titulo',
            'descripcion',
            'fecha_creacion',
            'tipomoto',
            # 'imagenes',
            'comunidad',
        )