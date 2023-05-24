from rest_framework import serializers
from usuarios.models import MyUser
from django.contrib.auth.hashers import make_password

# Serializadores para mostrar los datos necesarios en la API.
class MyUserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = (
            'id',
            'username',
            'email',
        )

    def validate_password(self, value: str) -> str:
        return make_password(value)


class MyUserDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = (
            'id',
            'username',
            'email',
        )

    def validate_password(self, value: str) -> str:
        return make_password(value)