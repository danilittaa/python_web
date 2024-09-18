from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from .models import MedicalData

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role')

    def validate_email(self, value):
        if len(value) <= 2:
            raise ValidationError("Email must be longer than 2 characters.")
        return value

    def validate_password(self, value):
        if len(value) <= 2:
            raise ValidationError("Password must be longer than 2 characters.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class MedicalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalData
        fields = ('id', 'user', 'measurement_type', 'value', 'measurement_date')

    def validate_value(self, value):
        if value <= 0:
            raise ValidationError("Value must be positive.")
        return value
