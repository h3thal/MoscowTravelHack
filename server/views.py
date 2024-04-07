from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from .models import tour
from .serializer import tourSerializer
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

class tourAPIList(generics.ListAPIView):
    serializer_class= tourSerializer
    queryset = tour.objects.all()   
    pagination_class=customPagination
   

    
class FilterAPIList(APIView):
    def get(self, request):
        data = filing('filter.json')
        return Response(data)




