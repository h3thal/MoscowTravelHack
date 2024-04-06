from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms import model_to_dict
from rest_framework import filters
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from .models import tour
from .serializer import tourSerializer
from .function import filing


# Create your views here.
class tourAPIList(generics.ListAPIView):
    serializer_class= tourSerializer
    queryset = tour.objects.all()   
   # filter_backends = [DjangoFilterBackend]=
   # filterset_fields=['id' , 'country','accomodation','transportation']


import os

# This function can be used as a replacement for `open`
# which will allow you to access files from the file.
def open_relative(path, flag="r"):

    # This builds the relative path by joining the current directory
    # plus the current filename being executed.
    relative_path = os.path.join(os.path.dirname(__file__), path)

    return open(relative_path, flag) # return file handler
    
class FilterAPIList(APIView):
    def get(self, request):
        data = filing('filter.json')
        return Response(data)




