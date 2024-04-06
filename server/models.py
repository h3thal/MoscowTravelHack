from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class tour(models.Model):
    
    
    objectType= models.CharField(blank=False,default = 'TOUR')
    
    durationNights =models.IntegerField(blank=True, null=True)
    rating= models.FloatField(blank=True,null=True)
    promo = models.BooleanField(default=False,null=True)
    popularity= models.FloatField(blank=True,null=True)
    destination = models.CharField(blank=True,null=True)
    
    themes = ArrayField(models.CharField(max_length=10, blank=True),size=8, default=[''])
    
    # THEME = [  ('Автобусные')
    #             ('Экотуры')
    #             ('Обзорные')
    #             ('История')
    #             ('Групповые')
    #             ('Этнотуры')
    #             ]



    
    