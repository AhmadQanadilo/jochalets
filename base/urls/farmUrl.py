from django.urls import path, include
from base.Views.FarmView import FarmListCreateView, FarmDetailsView,FarmWithImageListCreateView,FarmWithImageDetailsView, BookingListCreatView

urlpatterns = [
   path('',FarmListCreateView.as_view(),name="farms"),
   path('images/',FarmWithImageListCreateView.as_view(),name="farms"),
   path('<int:pk>/',FarmDetailsView.as_view(),name="farm-detail"),
   path('images/<int:pk>/',FarmWithImageDetailsView.as_view(),name="farm-detail"),
   path('book/',BookingListCreatView.as_view(),name="booking")
]