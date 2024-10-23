from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'instituciones']

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'instituciones',
        'USER': 'brian',
        'PASSWORD': 'parada2023',
        'HOST': 'db_institucion',
        'PORT': '5432',
    }
}

CORS_ALLOWED_ORIGINS = ['http://localhost','http://127.0.0.1','http://0.0.0.0',' http://localhost:5173']

CORS_ALLOW_CREDENTIALS = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

