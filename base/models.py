from django.db import models

# Create your models here.

#style={{background:`linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)`}}
class FarmModel(models.Model):
    location_choices = [
        ("جميع المناطق", "all"),
        ("البحر الميت", "deadSea"),
        ("جرش", "jarash"),
        ("مادبا", "madaba"),
        ("عجلون", "ajlon"),
        ("الزرقاء", "zarqa"),
        ("اربد", "irbid"),
        ("البلقاء", "albalqa"),
        ("عمان", "amman"),
        ("الكرك", "alkark"),
        ("العقبة", "aqaba"),
        ("السلط", "salt")
    ]
    Location = models.CharField(
        choices=location_choices, max_length=150, default="جميع المناطق")
    name = models.CharField(blank=True, null=True, max_length=250)
    priceOnHoliday = models.IntegerField(blank=True, null=True)
    priceOnNormalDays = models.IntegerField(blank=True, null=True)
    kitchenDetails = models.CharField(blank=True, null=True, max_length=250)
    yardDetails = models.CharField(blank=True, null=True, max_length=250)
    bulidingDetails = models.CharField(blank=True, null=True, max_length=250)
    poolLenght = models.IntegerField(blank=True, null=True)
    poolWidth = models.IntegerField(blank=True, null=True)
    poolDepth = models.IntegerField(blank=True, null=True)
    bedRoomsNum = models.IntegerField(blank=True, null=True)
    livingRoomNum = models.IntegerField(blank=True, null=True)
    pathRoomNum = models.IntegerField(blank=True, null=True)
    bedsNum = models.IntegerField(blank=True, null=True)
    maxNumOFVistors = models.IntegerField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    descrption = models.TextField(blank=True, null=True)
    farmType = models.CharField(choices=[
        ("شبابية", "mens"),
        ("عائلية", "family"),
        ("مناسبات", "events"),
        ("الكل", "all"),
    ], default="الكل", null=False, max_length=100)

    def __str__(self):
        return self.name


class FarmImageModel(models.Model):
    farm = models.ForeignKey(
        FarmModel, on_delete=models.CASCADE, related_name="farmImages")
    image = models.ImageField(blank=True, null=True, default='defaultImg.jpg')


class BookingModel(models.Model):
    farm = models.ForeignKey(
        FarmModel, on_delete=models.CASCADE, related_name="Booking")
    customerPhoneNum = models.CharField(blank=True, null=True, max_length=250)
    bookingDate = models.CharField(blank=True, null=True, max_length=250)
    bookingVistoresNum = models.IntegerField(blank=True, null=True)
