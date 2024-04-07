from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from .models import tour,hotel
from .serializer import *
from .function import filing



from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class customPagination(PageNumberPagination):
    page_size= 2
    page_size_query_param= 'page_size'
    max_page_size=20

    def get_paginated_response(self, data):
        if str(self.get_next_link()) is not None:
            a=str(self.get_next_link())[-1]
        else:
            a='null'
        if str(self.get_previous_link()) is not None:
            b=str(self.get_previous_link())[-1]
        else:
            b='null'
        
        return Response({
            'count' : self.page.paginator.count,
            'links' :{
                'next' : a,
                'previous' : self.get_previous_link()
            },
            'results' : data
        })

class hotelAPIList(generics.ListAPIView):
    serializer_class = hotelSerializer
    queryset = hotel.objects.all()
    pagination_class=customPagination

    def get_queryset(self):
        queryset = super().get_queryset()
        ordering = self.request.query_params.get('ordering', '')
        if ordering:
            if ordering == 'custom_order':
                queryset = queryset.order_by('custom_order')
            else:
                queryset = queryset.order_by(ordering)
        return queryset
    

class tourAPIOrdering(generics.ListAPIView):
    serializer_class= tourSerializer
    queryset = tour.objects.all()   
    pagination_class=customPagination

    

class tourAPIList(generics.ListAPIView):
    serializer_class= tourSerializer
    queryset = tour.objects.all()   
    pagination_class=customPagination

    def get_queryset(self):
        queryset = super().get_queryset()
        ordering = self.request.query_params.get('ordering', '')
        if ordering:
            if ordering == 'custom_order':
                queryset = queryset.order_by('custom_order')
            else:
                queryset = queryset.order_by(ordering)
        return queryset
   

    
class FilterAPIList(APIView):
    def get(self, request):
        data = filing('filter.json')
        return Response(data)




