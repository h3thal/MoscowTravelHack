# Generated by Django 5.0.3 on 2024-04-06 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0017_alter_tour_promo'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='russpassRecomendation',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='tour',
            name='id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
