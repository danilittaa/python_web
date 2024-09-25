from djongo import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('athlete', 'Athlete'),
        ('coach', 'Coach'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username
    
User = get_user_model()

class MedicalData(models.Model):
    MEASUREMENT_TYPES = (
        ('heart_rate', 'Heart Beats Per Minute'),
        ('hours_slept', 'Hours Sleeping'),
        ('water_intake', 'Water Liters'),
        ('calories', 'Kilo Calories'),
        ('weight', 'Weight (kg)'),
        ('temperature', 'Temperature (Celsius)'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='medical_data')
    measurement_type = models.CharField(max_length=20, choices=MEASUREMENT_TYPES)
    value = models.FloatField() 
    measurement_date = models.DateTimeField()

    def __str__(self):
        return f"{self.user.username} - {self.measurement_type} - {self.value} on {self.measurement_date}"
