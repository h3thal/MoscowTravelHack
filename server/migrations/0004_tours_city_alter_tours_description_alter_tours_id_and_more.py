# Generated by Django 5.0.3 on 2024-04-05 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tours',
            name='city',
            field=models.CharField(blank=True),
        ),
        migrations.AlterField(
            model_name='tours',
            name='description',
            field=models.CharField(),
        ),
        migrations.AlterField(
            model_name='tours',
            name='id',
            field=models.CharField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='tours',
            name='title',
            field=models.CharField(),
        ),
    ]
