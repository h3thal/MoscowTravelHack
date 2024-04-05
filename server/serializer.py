from rest_framework import serializers
from .models import tour
from rest_framework.renderers import JSONRenderer



class tourSerializer(serializers.ModelSerializer):
    class Meta:
        model = tour
        fields = "__all__"
