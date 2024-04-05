from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms import model_to_dict
from rest_framework import filters
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from .models import tour
from .serializer import tourSerializer


# Create your views here.
class tourAPIList(generics.ListAPIView):
    serializer_class= tourSerializer
    queryset = tour.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields=['id' , 'country','accomodation','transportation']





# class toursAPIview(APIView):
#     def get(self, request):
#         t = tours.objects.all()
#         return Response({'title': toursSerializer(t,many=True).data})
    
#     def post(self, request):
#         serializer = toursSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response({'post':serializer.data})

#     def put(self, request, *args, **kwargs):
#         pk = kwargs.get('pk',None)
#         if not pk:
#             return Response({"error" : "Method put is not allowed"})
        
#         try:
#             instance= tours.objects.get(pk=pk)
#         except:
#             return Response({"error" : "obj doesnt exist"})
        
#         serializer = toursSerializer(data=request.data, instance = instance)
#         serializer.is_valid(raise_exception=True)

#         serializer.save()
#         return Response({"post":serializer})
    # queryset=tours.objects.all()
    # serializer_class=toursSerializer




