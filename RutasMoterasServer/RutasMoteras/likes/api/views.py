from rest_framework import (mixins, 
                            viewsets, 
                            filters, 
                            )
from likes.models import likes
from likes.api.serializers import ( RutaListSerializer, 
                                    RutaDetailSerializer,
                                            )
from likes.api.pagination import (  LargeResultsSetPagination, 
                                    ShortResultsSetPagination, 
                                    StandardResultsSetPagination)
from .mixins import destroy
# from rest_framework.permissions import IsAuthenticated

# Vistas para la API
class LikesListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Descripción: Muestra los datos significativos del los likes de cada ruta, 
    adicionalmente, puedes ordenar y buscar por diferentes campos
    """

    serializer_class = RutaListSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering = 'contador'
    ordering_fields = ['contador']
    search_fields = ['contador']
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return likes.objects.all()
    


class LikesDetailViewSet(    destroy, 
                            mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin, 
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):
    """
    Descripción: Saca todos los campos de los likes de cada ruta.
    """
    serializer_class = RutaDetailSerializer
    model = likes
    #permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return likes.objects.all()
