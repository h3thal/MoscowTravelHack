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
   # filter_backends = [DjangoFilterBackend]
   # filterset_fields=['id' , 'country','accomodation','transportation']

class FilterAPIList(APIView):
    def get(self, request):
        file = open('filter.json', 'r')
        return Response({
    "title": "Туры и турпакеты",
    "filters": [
        {
            "elementType": "TAGS",
            "title": "Популярное",
            "name": "popular",
            "image": "https://cms.russpass.ru/v1/file/6568523f77220d327e3bf3a3",
            "displayRules": "CHECKBOX",
            "filterRules": "OR",
            "options": [
                {
                    "title": "С проживанием",
                    "slug": "s-prozhivaniem",
                    "id": "6123b4a1020892001197bb4d"
                },
                {
                    "title": "2 ночи",
                    "slug": "2-nochi",
                    "id": "611a852c57f8c10019f8c907"
                },
                {
                    "title": "Экотуры",
                    "slug": "ekotury",
                    "id": "611a827e57f8c10019f8c8f3"
                }
            ]
        },
        {
            "elementType": "TAGS",
            "title": "Категория отеля",
            "name": "hotel-category",
            "image": "https://cms.russpass.ru/v1/file/6568523f77220d327e3bf3a6",
            "displayRules": "BUTTON",
            "filterRules": "OR",
            "options": [
                {
                    "title": "Без звезд",
                    "slug": "hotel-no-stars",
                    "id": "65684f271ba46c009d8f78da"
                },
                {
                    "title": "1",
                    "slug": "hotel-1-stars",
                    "id": "65684f2777220d327e3bd306"
                },
                {
                    "title": "2",
                    "slug": "hotel-2-stars",
                    "id": "65684f2777220d327e3bd313"
                },
                {
                    "title": "3",
                    "slug": "hotel-3-stars",
                    "id": "65684f2777220d327e3bd320"
                },
                {
                    "title": "4",
                    "slug": "hotel-4-stars",
                    "id": "65684f27be89ea19a7c0da49"
                },
                {
                    "title": "5",
                    "slug": "hotel-5-stars",
                    "id": "65684f2777220d327e3bd32d"
                }
            ]
        },
        {
            "elementType": "TAGS",
            "title": "Особенности",
            "name": "advantages",
            "image": "https://cms.russpass.ru/v1/file/6568523f1ba46c009d8f9384",
            "displayRules": "CHECKBOX",
            "filterRules": "AND",
            "options": [
                {
                    "title": "С перелетом",
                    "slug": "s-pereletom",
                    "id": "611a836957f8c10019f8c8fa"
                },
                {
                    "title": "С проживанием",
                    "slug": "s-prozhivaniem",
                    "id": "6123b4a1020892001197bb4d"
                },
                {
                    "title": "С питанием",
                    "slug": "s-pitaniem",
                    "id": "611a842657f8c10019f8c8ff"
                },
                {
                    "title": "Туры выходного дня",
                    "slug": "tury-vyhodnogo-dnya",
                    "id": "611a84db57f8c10019f8c903"
                },
                {
                    "title": "Недорогие туры",
                    "slug": "nedorogie-tury",
                    "id": "611a84fe57f8c10019f8c905"
                }
            ]
        },
        {
            "elementType": "TAGS",
            "title": "Продолжительность",
            "name": "duration",
            "image": "https://cms.russpass.ru/v1/file/6568523f77220d327e3bf3a9",
            "displayRules": "CHECKBOX",
            "filterRules": "OR",
            "options": [
                {
                    "title": "2 ночи",
                    "slug": "2-nochi",
                    "id": "611a852c57f8c10019f8c907"
                },
                {
                    "title": "3 ночи",
                    "slug": "3-nochi",
                    "id": "611a854e57f8c10019f8c909"
                },
                {
                    "title": "4 ночи",
                    "slug": "4-nochi",
                    "id": "611a857357f8c10019f8c90b"
                },
                {
                    "title": "5 ночей",
                    "slug": "5-nochej",
                    "id": "611a859b57f8c10019f8c90d"
                },
                {
                    "title": "6 ночей",
                    "slug": "6-nochej",
                    "id": "611a85bf57f8c10019f8c90f"
                },
                {
                    "title": "7 ночей",
                    "slug": "7-nochej",
                    "id": "611a85e957f8c10019f8c911"
                },
                {
                    "title": "Более 7 ночей",
                    "slug": "bolee-7-nochej",
                    "id": "611a860757f8c10019f8c913"
                },
                {
                    "title": "На один день",
                    "slug": "na-odin-den",
                    "id": "646dfe8b4e729484444f2cfc"
                }
            ]
        },
        {
            "elementType": "TAGS",
            "title": "Тип",
            "name": "type",
            "image": "https://cms.russpass.ru/v1/file/6568523f1ba46c009d8f9387",
            "displayRules": "CHECKBOX",
            "filterRules": "OR",
            "options": [
                {
                    "title": "Индивидуальные",
                    "slug": "individualnye",
                    "id": "611a815857f8c10019f8c8e9"
                },
                {
                    "title": "Групповые",
                    "slug": "gruppovye",
                    "id": "611a817f57f8c10019f8c8eb"
                },
                {
                    "title": "Автобусные",
                    "slug": "avtobusnye",
                    "id": "611a7c8257f8c10019f8c8cd"
                },
                {
                    "title": "Обзорные",
                    "slug": "obzornye",
                    "id": "611a7cd057f8c10019f8c8d1"
                },
                {
                    "title": "Тематические",
                    "slug": "tematicheskie",
                    "id": "611a7cf557f8c10019f8c8d3"
                },
                {
                    "title": "История",
                    "slug": "istoricheskie",
                    "id": "611a7d6d57f8c10019f8c8d7"
                },
                {
                    "title": "Авторские",
                    "slug": "avtorskie",
                    "id": "611a7ea157f8c10019f8c8df"
                },
                {
                    "title": "Наука",
                    "slug": "nauchno-obrazovatelnye",
                    "id": "641aeed2496364042dff8762"
                },
                {
                    "title": "Образовательные",
                    "slug": "obrazovatelnye",
                    "id": "642464cecfc508abfb5962a3"
                },
                {
                    "title": "Событийные",
                    "slug": "sobytijnye",
                    "id": "611a822d57f8c10019f8c8ef"
                },
                {
                    "title": "Этнотуры",
                    "slug": "etnotury",
                    "id": "611a825557f8c10019f8c8f1"
                },
                {
                    "title": "Экотуры",
                    "slug": "ekotury",
                    "id": "611a827e57f8c10019f8c8f3"
                },
                {
                    "title": "Гастрономические",
                    "slug": "gastronomicheskie",
                    "id": "611a7d1957f8c10019f8c8d5"
                },
                {
                    "title": "Золотое кольцо",
                    "slug": "zolotoe-kolco_staryj",
                    "id": "61dedc9583343c163e261870"
                }
            ]
        },
        {
            "elementType": "RANGE",
            "title": "Бюджет",
            "name": "budget",
            "image": "https://cms.russpass.ru/v1/file/6568523fbe89ea19a7c0fcd4",
            "rangeLowerLimit": 0,
            "rangeUpperLimit": 368000,
            "rangeCode": "BUDGET",
            "options": []
        },
        {
            "elementType": "TAGS",
            "title": "Рейтинг",
            "name": "rating",
            "image": "https://cms.russpass.ru/v1/file/6568523fbe89ea19a7c0fcd7",
            "displayRules": "CHECKBOX",
            "filterRules": "OR",
            "options": [
                {
                    "title": "Превосходно: 9+",
                    "slug": "rating-9-plus",
                    "id": "65684f201ba46c009d8f7845"
                },
                {
                    "title": "Очень хорошо: 8+",
                    "slug": "rating-8-plus",
                    "id": "65684f20be89ea19a7c0d9db"
                },
                {
                    "title": "Хорошо: 7+",
                    "slug": "rating-7-plus",
                    "id": "65684f2077220d327e3bcedd"
                },
                {
                    "title": "Достаточно хорошо: 6+",
                    "slug": "rating-6-plus",
                    "id": "65684f20be89ea19a7c0d9e8"
                }
            ]
        }
    ]
})








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




