import graphene

from . import models
from . import types

class Query(graphene.ObjectType):
    site = graphene.Field(types.SiteType)
    all_posts = graphene.List(types.PostType)
    all_categories = graphene.List(types.CategoryType)
    all_tags = graphene.List(types.TagType)
    posts_by_category = graphene.List(types.PostType, category=graphene.Int())
    posts_by_tag = graphene.List(types.PostType, tag=graphene.Int())
    posts_by_slug = graphene.List(types.PostType, slug=graphene.String())


    def resolve_site(root, info):
        return (
            models.Site.objects.first()
        )

    def resolve_all_posts(root, info):
        return (
            models.Post.objects.all()
        )

    def resolve_all_categories(root, info):
        return (
            models.Category.objects.all()
        )
    
    def resolve_all_tags(roos, info):
        return (
            models.Tag.objects.all()
        )
    
    def resolve_posts_by_category(root, info, category):
        try:
            return models.Post.objects.filter(category=category)
        except Post.DoesNotExist:
            return None

    def resolve_posts_by_tag(root, info, tag):
        try:
            return models.Post.objects.get(tag=tag)
        except Post.DoesNotExist:
            return None
    
    def resolve_posts_by_slug(root, info, slug):
        return {
            models.Post.objects.get(slug=slug)
        }
