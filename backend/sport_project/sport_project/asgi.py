"""
ASGI config for sport_project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import chat.routing
from django.urls import path
from chat import consumers


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sport_project.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
     "websocket": URLRouter(
        chat.routing.websocket_urlpatterns
    ),

})