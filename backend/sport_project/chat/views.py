from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ChatMessage
from .serializers import ChatMessageSerializer
from django.db import models

class ChatHistoryView(APIView):
    def get(self, request):
        user_id = request.query_params.get('user_id')
        other_user_id = request.query_params.get('other_user_id')
           
        if not user_id or not other_user_id:
            return Response({"error": "Both user_id and other_user_id are required"}, status=status.HTTP_400_BAD_REQUEST)
           
        messages = ChatMessage.objects.filter(
            (models.Q(sender_id=user_id) & models.Q(receiver_id=other_user_id)) |
            (models.Q(sender_id=other_user_id) & models.Q(receiver_id=user_id))
        ).order_by('timestamp')
           
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)