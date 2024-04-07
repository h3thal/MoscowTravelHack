from rest_framework import serializers
from .models import tour,hotel

from rest_framework.renderers import JSONRenderer



class tourSerializer(serializers.ModelSerializer):
    class Meta:
        model = tour
        fields = "__all__"

class hotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = hotel
        fields = "__all__"
