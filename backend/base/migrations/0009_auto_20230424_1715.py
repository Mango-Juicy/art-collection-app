# Generated by Django 3.2.14 on 2023-04-24 15:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0008_auto_20230424_1713'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categorye',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('modifiedAt', models.DateTimeField(auto_now=True)),
                ('modifiedBy', models.CharField(blank=True, max_length=200, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('active', models.BooleanField(blank=True, default=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('createdBy', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='createdBy', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.categorye'),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
