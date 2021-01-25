from django.shortcuts import render
from django.http.response import JsonResponse

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# Create your views here.
from .serializers import PostSerializer
from .models import Post

class TestView(APIView):
    def get(self,request,*args,**kwargs):
        qs = Post.objects.all()
        data = []
        if kwargs:
            for x in qs:
                if PostSerializer(x).data['username'] == kwargs['username']:
                    data.append(PostSerializer(x).data)
        else:
            for x in qs:
                data.append(PostSerializer(x).data)
        return Response(data)
    def post(self, request, *args, **kwargs):
        qs = Post.objects.all()
        data = []
        exsist = False
        for x in qs:
            if PostSerializer(x).data['username'] == request.data['username'] and PostSerializer(x).data['name'] == request.data['name'] :
                exsist = True
            
            data.append(PostSerializer(x).data)
        if exsist == False:
            serializer = PostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                data.append(request.data)
        return Response(data)
    def delete(self, request, *args, **kwargs):
        print(kwargs)
        qs = Post.objects.all()
        data = []
        exsist = False
        for x in qs:
            if PostSerializer(x).data['username'] == kwargs['username'] and PostSerializer(x).data['name'] == kwargs['name'] :
                exsist = True
            else:
                data.append(PostSerializer(x).data)
        if exsist == True:
            Post.objects.get(name=kwargs['name'],username=kwargs['username']).delete()
        return Response(data)
        

class UserView(APIView):
    def get(self,request,*args,**kwargs):
        qs = Post.objects.all()
        post = qs.first()
        serializer = PostSerializer(post)
        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)