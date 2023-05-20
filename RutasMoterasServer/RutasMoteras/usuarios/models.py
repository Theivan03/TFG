from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

# Modelos de los Usuarios
class MyUserManager(BaseUserManager):
    
    def create_user(self, email, first_name=None, last_name=None, password=None, type=None):
        if not email:
            raise ValueError("Ha de proporcionar un e-mail válido")

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            type=type,
        )

        user.is_active = False
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):

        if not email:   
            raise ValueError("Ha de proporcionar un e-mail válido")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    

class MyUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length = 256, unique = True, null = True)
    email = models.EmailField(max_length = 256, unique = True)
    activo = models.BooleanField(default=False)
    create_date = models.DateTimeField(auto_now_add = True)
    update_date = models.DateTimeField(auto_now = True)
    is_staff = models.BooleanField(default=False)

    # Estos dos campos los he añadido para que no diera un error por confusión de nombres.
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='myuser_set',
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='myuser_set',
        related_query_name='user',
    )

    USERNAME_FIELD = 'email'

    objects = MyUserManager()

    def __str__(self):
        return str(self.email)