from django.urls import path
from .views import RegisterView, LoginView, MedicalDataView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('medical-data/', MedicalDataView.as_view(), name='medical_data'),
]