# Generated by Django 3.2.14 on 2023-04-30 17:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0016_auto_20230430_1838'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='category',
            new_name='idCategory',
        ),
    ]
