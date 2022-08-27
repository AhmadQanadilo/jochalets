from rest_framework import serializers
from base.models import FarmModel, FarmImageModel, BookingModel


class FarmImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = FarmImageModel
        fields = "__all__"




class FarmSerializer(serializers.ModelSerializer):
    images = FarmImageSerializer(
        source='farmImages', many=True, read_only=True)

    class Meta:
        model = FarmModel

        fields = ['id',
                  "Location",
                  "farmType",
                  "images",
                  "name",
                  "priceOnHoliday",
                  "priceOnNormalDays",
                  "kitchenDetails",
                  "yardDetails",
                  "bulidingDetails",
                  "poolLenght",
                  "poolWidth",
                  "poolDepth",
                  "bedRoomsNum",
                  "livingRoomNum",
                  "pathRoomNum",
                  "bedsNum",
                  "maxNumOFVistors",
                  "rating",
                  "descrption",
                  ]

  
    def create(self, validated_data):
        images_data = self.context.get('view').request.FILES
        farm = FarmModel.objects.create(**validated_data)
        for image_data in images_data.values():
            FarmImageModel.objects.create(farm=farm, image=image_data)
        return farm

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookingModel
        fields = "__all__"


