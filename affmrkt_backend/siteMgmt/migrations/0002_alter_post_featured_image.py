# Generated by Django 5.1.6 on 2025-04-29 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteMgmt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='featured_image',
            field=models.ImageField(upload_to='posts/featured_images/%Y/%m/%d/'),
        ),
    ]
