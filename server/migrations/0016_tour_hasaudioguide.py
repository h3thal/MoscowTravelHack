# Generated by Django 5.0.3 on 2024-04-06 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0015_tour_iscanbuy_tour_price_tour_title_tour_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='hasAudioGuide',
            field=models.BooleanField(default=False),
        ),
    ]
