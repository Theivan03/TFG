"""RutasMoteras URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from motos.api import views as motos_api_views
from rutas.api import views as rutas_api_views
from usuarios.api import views as usuarios_api_views
from comunidadesAutonomas.api import views as comunidades_api_views

router = routers.DefaultRouter()
router.register(r'motos_list', motos_api_views.MotosListViewSet, basename='motos_list')

router.register(r'rutas_list', rutas_api_views.RutaListViewSet, basename='rutas_list')
router.register(r'rutas_detail', rutas_api_views.RutaDetailViewSet, basename='rutas_detail')

router.register(r'usuarios_list', usuarios_api_views.MyUserListViewSet, basename='usuarios_list')
router.register(r'usuarios_detail', usuarios_api_views.MyUserDetailViewSet, basename='usuarios_detail')

router.register(r'comunidades_list', comunidades_api_views.ComunidadesListViewSet, basename='comunidades_list')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
]

if settings.DEBUG:
 urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)