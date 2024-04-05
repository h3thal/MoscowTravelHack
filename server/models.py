from django.db import models

# Create your models here.
class tour(models.Model):
    title= models.CharField()
    description = models.CharField()
    duration =models.DurationField()
    rating= models.FloatField()
    promo = models.BooleanField(default=False)



    typeofentertaiment = models.CharField(blank=True)

    country = models.CharField(max_length=100, null=True) #location
    region = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100,  null=True)
    street = models.CharField(max_length=100, null=True)
    house_number = models.PositiveIntegerField( null=True)

    accomodation = models.BooleanField(default=False)               #hotel included in cost of tour
    transportation_bool = models.BooleanField(default=False)                          #transfer to the location
    meal =models.BooleanField(default=False)                                     #meal included in cost of tour


    TRANS = [
        ('bus','Bus'),
        ('train','Train'),
        ('plane','Plane'),  
    ]
    transportation = models.CharField(choices=TRANS , blank=True)

    cost_per_adult = models.PositiveIntegerField(null=True) 
    cost_per_child = models.PositiveIntegerField(null=True)

    program_of_tour = models.CharField(blank=True)

    