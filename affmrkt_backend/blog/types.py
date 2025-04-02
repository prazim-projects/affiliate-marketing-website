import graphene
from graphene_django import DjangoObjectType
from .models import *

class SiteType(DjangoObjectType):
    class Meta:
        model = Site

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'avatar')

class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = ('name', 'slug', 'category')

class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = "__all__"

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ('name', 'slug')


class CommentType(DjangoObjectType):
    class Meta:
        model = Comment

