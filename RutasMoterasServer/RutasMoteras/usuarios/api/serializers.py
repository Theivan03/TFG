from rest_framework import serializers
from usuarios.models import MyUser

# Serializadores para mostrar los datos necesarios en la API.
class MyUserListSerializer(serializers.ModelSerializer):


    class Meta:
        model = MyUser
        fields = (
            'username',
            'email',
        )


class MyUserDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = (
            'email',
            'password',
        )