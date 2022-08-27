# Generated by Django 4.1 on 2022-08-20 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='farmmodel',
            name='Location',
            field=models.CharField(choices=[('جميع المناطق', 'all'), ('البحر الميت', 'deadSea'), ('جرش', 'jarash'), ('مادبا', 'madaba'), ('عجلون', 'ajlon'), ('الزرقاء', 'zarqa'), ('اربد', 'irbid'), ('البلقاء', 'albalqa'), ('عمان', 'amman'), ('الكرك', 'alkark'), ('العقبة', 'aqaba')], default='جميع المناطق', max_length=150),
        ),
        migrations.AlterField(
            model_name='farmmodel',
            name='farmType',
            field=models.CharField(choices=[('شبابية', 'mens'), ('عائلية', 'family'), ('مناسبات', 'events'), ('الكل', 'all')], default='الكل', max_length=100),
        ),
    ]
