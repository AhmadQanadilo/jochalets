from django.contrib import admin
from base.models import FarmModel, FarmImageModel, BookingModel

# Register your models here.
admin.site.register(FarmModel)
admin.site.register(FarmImageModel)
admin.site.register(BookingModel)
