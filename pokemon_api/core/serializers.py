from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'type', 
            'name',
            'base_experience',
            'img',
            'move_1_name',
            'move_1_text',
            'move_1_power',
            'move_2_name',
            'move_2_text',
            'move_2_power',
            'username',
        )