from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from comunidadesAutonomas.models import Comunidades
from comunidadesAutonomas.api.serializers import ( ComunidadesListSerializer )
from .mixins import destroy

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

    def get_queryset(self):
        return Comunidades.objects.all()
