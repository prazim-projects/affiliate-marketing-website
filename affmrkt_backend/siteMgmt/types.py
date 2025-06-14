import graphene
from graphene_django import DjangoObjectType
from .models import *

class SiteType(DjangoObjectType):
    class Meta:
        model = Site
        fields = "__all__"

class UserType(DjangoObjectType):
    class Meta:
        model = User

class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = ('name', 'slug', 'category')

class PostType(DjangoObjectType):
    # featured_image_url = graphene.String()
    snapView = graphene.String()
    class Meta:
        model = Post
        fields = "__all__"
    
    def resolve_snapView(self, info):
        return self.display_conent

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ('name', 'slug')

class CommentType(DjangoObjectType):
    class Meta:
        model = Comment

