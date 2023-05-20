from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from rutas.models import Ruta
from rutas.api.serializers import ( RutaListSerializer, 
                                    RutaDetailSerializer,
                                            )
from rest_framework.decorators import api_view

# Vistas para la API
class RutaListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Descripción: Muestra los datos significativos del las rutas, 
    adicionalmente, puedes ordenar por diferentes campos y buscar por diferentes campos
    """

    serializer_class = RutaListSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering = 'usuario' , 'titulo', 'comunidad'
    ordering_fields = ['tipomoto', 'comunidad']
    search_fields = ['tipomoto', 'comunidad']

    def get_queryset(self):
        return Ruta.objects.all()
    


class RutaDetailViewSet(    mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de las rutas.
    """
    serializer_class = RutaDetailSerializer
    model = Ruta

    def get_queryset(self):
        return Ruta.objects.all()
