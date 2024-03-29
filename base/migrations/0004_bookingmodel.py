# Generated by Django 4.1 on 2022-08-22 20:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_remove_farmmodel_bulidingarea_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookingModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerPhoneNum', models.CharField(blank=True, max_length=250, null=True)),
                ('bookingDate', models.CharField(blank=True, max_length=250, null=True)),
                ('bookingVistoresNum', models.IntegerField(blank=True, null=True)),
                ('farm', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Booking', to='base.farmmodel')),
            ],
        ),
    ]
