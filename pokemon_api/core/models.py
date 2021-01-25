from django.contrib.auth import get_user_model
from django.db import models

class Post(models.Model):
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    base_experience = models.CharField(max_length=100)
    img =  models.CharField(max_length=100)
    move_1_name =  models.CharField(max_length=100)
    move_1_text =  models.CharField(max_length=100)
    move_1_power =  models.IntegerField() 
    move_2_name =  models.CharField(max_length=100)
    move_2_text =  models.CharField(max_length=100)
    move_2_power =  models.IntegerField()
    username =  models.CharField(max_length=100)
