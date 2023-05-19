from rest_framework import (mixins, 
                            permissions, 
                            viewsets, 
                            filters, 
                            views, 
                            response, 
                            status, 
                            )
from rutas.models import Ruta
from rutas.api.serializers import ( RutaListSerializer, 
                                    RutaDetailSerializer,
                                            )
from rutas.api.pagination import (  LargeResultsSetPagination, 
                                    ShortResultsSetPagination, 
                                    StandardResultsSetPagination)
from rest_framework.decorators import api_view
from .mixins import destroy
# from rest_framework.permissions import IsAuthenticated

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
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Ruta.objects.all()
    


class RutaDetailViewSet(    destroy, 
                            mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de las rutas.
    """
    serializer_class = RutaDetailSerializer
    model = Ruta
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Ruta.objects.all()
