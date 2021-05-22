from django.urls import path
from .views import AddView, DeleteView, GetView, RoomView
urlpatterns = [
    path('home', RoomView.as_view()),
    path('add', AddView.as_view()),
    path('get', GetView.as_view()),
    path('delete', DeleteView.as_view())
]
