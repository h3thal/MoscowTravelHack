from django.db import models
from django.contrib.postgres.fields import ArrayField

def default_image():
    return '{https://test.eclida.ru/files/noimg.png}'
def default_theme():
    return '{No theme}'

# Create your models here.
class tour(models.Model):
    
    id = models.AutoField(unique=True, editable=False, primary_key=True)
    title =models.CharField(max_length = 400, null = True)
    objectType= models.CharField(blank=False,default = 'TOUR')

    destination =models.CharField(blank =False, null = True)
    rating= models.FloatField(blank=True,null=True)
    popularity= models.FloatField(blank=True,null=True)

    type = models.CharField(blank = False, default='Тур')
    themes = ArrayField(models.CharField(max_length=30, blank=True),size=8, default=default_theme)
    images= ArrayField(models.CharField(max_length=500,blank=True),size=4,default=default_image)

    price = models.CharField(blank = False, default = 0)
    iscanbuy= models.BooleanField(blank =False, default = True)
    durationNights =models.IntegerField(blank=True, null=True)

    promo = models.BooleanField(default=False, blank=False)
    russpassRecomendation = models.BooleanField(blank = False, null = False, default=False)
    hasAudioGuide = models.BooleanField(blank = False, default = False)



class hotel(models.Model):
    id = models.AutoField(unique=True, editable=False, primary_key=True)
    title =models.CharField(max_length = 300, null = True)
    HOTEL_STARS={
        (0, 'без звезд'),
        (1, '1 star'),
        (2, '2 star'),
        (3, '3 star'),
        (4, '4 star'),
        (5, '5 star'),


    }
    stars = models.SmallIntegerField(blank=False,choices= HOTEL_STARS,default = 0)
    position= models.CharField(blank=False,default='')
    typeofhotel = models.CharField(blank=True, null=True,max_length=100)

    rating= models.FloatField(blank=True,null=True)
    popularity= models.FloatField(blank=True,null=True)

    price = models.CharField(blank = False, default = 0)
    distance_from_center = models.FloatField(blank=True,default=0)
    images= ArrayField(models.CharField(max_length=500,blank=True),size=4,default=default_image)

    iswifi =models.BooleanField(blank=False, default=False)
    isparking= models.BooleanField(blank=False, default=False)
    ismeal= models.BooleanField(blank=False, default=False)





class tourist(models.Model):
    pass




    
    
    