# Generated by Django 5.0.3 on 2024-04-05 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0004_tours_city_alter_tours_description_alter_tours_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tours',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
