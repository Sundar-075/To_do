
# from django.core.serializers import serialize
from django.forms.models import model_to_dict
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Room
from .serializers import RoomSerializer

# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class AddView(APIView):
    serializer_class = RoomSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        # print(serializer)
        if serializer.is_valid():
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            room = Room(title=title, description=description)
            room.save()

            return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)

        return Response({'Invalid request': 'Data not provided'}, status=status.HTTP_400_BAD_REQUEST)


class GetView(APIView):
    def get(self, request, format=None):
        queryset = Room.objects.all()
        li = {}
        # for i in queryset:
        #     li.append(model_to_dict(i))
        # print(li)
        for i in queryset:
            data = RoomSerializer(i).data
            li[data['id']] = data
        return Response(li, status=status.HTTP_200_OK)


class DeleteView(APIView):
    lookup_url_kwarg = "id"

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            room = Room.objects.filter(id=id)
            if len(room) > 0:
                room.delete()
                return Response(status=status.HTTP_200_OK)
            return Response({'Bad Request': "Invalid Id"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': "NO Id"}, status=status.HTTP_400_BAD_REQUEST)
