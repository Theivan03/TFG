from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from comunidadesAutonomas.models import Comunidades
from comunidadesAutonomas.api.serializers import (  ComunidadesListSerializer, 
                                                    ComunidadesDetailSerializer,
                                                    )
from comunidadesAutonomas.api.pagination import (   LargeResultsSetPagination, 
                                                    ShortResultsSetPagination, 
                                                    StandardResultsSetPagination)
from .mixins import destroy
# from rest_framework.permissions import IsAuthenticated

# Vistas para la API
class ComunidadesListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Descripción: Muestra los datos significativos del los likes de cada Comunidad Autónoma, 
    adicionalmente, puedes ordenar y buscar por diferentes campos
    """

    serializer_class = ComunidadesListSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering = 'nombre'
    ordering_fields = ['nombre']
    search_fields = ['nombre']
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Comunidades.objects.all()
    


class ComunidadesDetailViewSet(    destroy, 
                            mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de las Comunidades Autónomas.
    """
    serializer_class = ComunidadesDetailSerializer
    model = Comunidades
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Comunidades.objects.all()
