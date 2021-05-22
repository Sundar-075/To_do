from django.db import models
import random
# Create your models here.


def unique_code():

    while True:
        id = random.randint(1, 99999)
        if Room.objects.filter(id=id).count() == 0:
            break

    return id


class Room(models.Model):
    # id = models.IntegerField(max_length=5, default=1, unique=True)
    title = models.CharField(max_length=200, null=False)
    description = models.TextField(null=False)
    created_date = models.DateField(auto_now_add=True)
    created_time = models.TimeField(auto_now_add=True)
