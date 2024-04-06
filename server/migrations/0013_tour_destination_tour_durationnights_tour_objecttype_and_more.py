# Generated by Django 5.0.3 on 2024-04-06 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0012_remove_tour_accomodation_remove_tour_city_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='destination',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='durationNights',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='objectType',
            field=models.CharField(default='TOUR'),
        ),
        migrations.AddField(
            model_name='tour',
            name='popularity',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='promo',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='rating',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
