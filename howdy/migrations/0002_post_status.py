# Generated by Django 2.2.1 on 2019-06-30 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('howdy', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='status',
            field=models.IntegerField(choices=[(0, 'Draft'), (1, 'Publish')], default=0),
        ),
    ]
