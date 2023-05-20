from rest_framework import (mixins, status)
from rest_framework.response import Response

# Mixin para el borrado por si existen dependencias
class destroy(mixins.DestroyModelMixin):

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        try:
            self.perform_destroy(instance)
        except Exception as e:
            return Response("No se puede realizar la operación de borrado porque existen dependencias.", status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)