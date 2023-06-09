from rest_framework import serializers
from rutas.models import Ruta

# Serializadores para mostrar los datos necesarios en la API.
class RutaListSerializer(serializers.ModelSerializer):

    # Estas variables sirven para las funciones hechas un poco más abajo
    # que sirven para sacar los datos concretos que se necesitan para cada ruta.
    nombreusuario = serializers.SerializerMethodField()
    emailusuario = serializers.SerializerMethodField()
    comunidad = serializers.SerializerMethodField()
    tipomoto = serializers.SerializerMethodField()

    class Meta:
        model = Ruta
        fields = (
            'id',
            'nombreusuario',
            'emailusuario',
            'titulo',
            'descripcion',
            'comunidad', 
            'tipomoto',
        )

    def get_nombreusuario(self, obj):
        return obj.usuario.username
    
    def get_emailusuario(self, obj):
        return obj.usuario.email
    
    def get_comunidad(self, obj):
        return obj.comunidad.nombre
    
    def get_tipomoto(self, obj):
        return obj.tipomoto.tipo
    


class RutaDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ruta
        fields = (
            'id',
            'usuario',
            'titulo',
            'descripcion',
            'tipomoto',
            'comunidad',
        )