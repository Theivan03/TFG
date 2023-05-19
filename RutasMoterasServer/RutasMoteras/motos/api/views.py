from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from motos.models import Motos
from motos.api.serializers import ( MotosListSerializer, 
                                    MotosDetailSerializer,
                                            )
from motos.api.pagination import (  LargeResultsSetPagination, 
                                    ShortResultsSetPagination, 
                                    StandardResultsSetPagination)
from .mixins import destroy
# from rest_framework.permissions import IsAuthenticated

# Vistas para la API
class MotosListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Descripción: Muestra los datos significativos del las motos, 
    adicionalmente, puedes ordenar por diferentes campos y buscar por diferentes campos
    """

    serializer_class = MotosListSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering = 'tipo' , 'habitad'
    ordering_fields = ['tipo', 'habitad']
    search_fields = ['tipo', 'habitad']
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Motos.objects.all()
    


class MotosDetailViewSet(   destroy, 
                            mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de las motos.
    """
    serializer_class = MotosDetailSerializer
    model = Motos
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Motos.objects.all()
