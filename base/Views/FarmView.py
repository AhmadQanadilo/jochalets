from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from base.models import FarmModel, FarmImageModel, BookingModel
from base.api.serializer import FarmImageSerializer, FarmSerializer, BookingSerializer
from rest_framework.decorators import api_view, permission_classes
from base.api.pagination import smallSetPagination
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny


class FarmListCreateView(generics.ListCreateAPIView):
    queryset = FarmModel.objects.all().order_by("?")
    serializer_class = FarmSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['Location', 'priceOnNormalDays','farmType']
    pagination_class = smallSetPagination


class FarmDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmModel.objects.all()
    serializer_class = FarmSerializer


class FarmWithImageListCreateView(generics.ListCreateAPIView):
    queryset = FarmImageModel.objects.all()
    serializer_class = FarmImageSerializer


class FarmWithImageDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmImageModel.objects.all()
    serializer_class = FarmImageSerializer

class BookingListCreatView(generics.ListCreateAPIView):
    queryset= BookingModel.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

