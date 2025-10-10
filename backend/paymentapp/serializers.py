from rest_framework import serializers
from .models import *

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = WalletModel
        fields = '__all__'