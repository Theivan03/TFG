from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from usuarios.models import MyUser
from usuarios.api.serializers import (  MyUserListSerializer, 
                                        MyUserDetailSerializer,
                                        )
from .mixins import destroy

# Vistas para la API
class MyUserListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Descripción: Muestra los datos significativos del los usuarios, 
    adicionalmente, puedes ordenar y buscar por diferentes campos
    """

    serializer_class = MyUserListSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering = 'username'
    ordering_fields = ['username']
    search_fields = ['username']

    def get_queryset(self):
        return MyUser.objects.all()
    


class MyUserDetailViewSet(  destroy, 
                            mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de los usuarios.
    """
    serializer_class = MyUserDetailSerializer
    model = MyUser

    def get_queryset(self):
        return MyUser.objects.all()
