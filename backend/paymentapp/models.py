from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class WalletModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    balance = models.PositiveIntegerField()