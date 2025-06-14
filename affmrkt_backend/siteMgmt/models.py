from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField
# from django.utils.translation import ugettext_lazy as _
from django.conf import settings
# Create your models here.


class Site(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    logo = models.ImageField(upload_to='site/logo/')

    class Meta:
        verbose_name = 'site'

    def __str__(self):
        return self.name


class User(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    email = models.EmailField(max_length=50, unique = True)
    avatar = models.ImageField(upload_to='users/avatars/%y/%m/%d/')
    bio = models.TextField(max_length=500, null=True, default="Change Me")
    location = models.CharField(max_length=30, null=True)
    website = models.CharField(max_length=100, null=True)
    date_joined = models.DateField(auto_now_add=True)
    
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    
    class Meta:
        verbose_name = 'user'

    def __str__(self):
        return self.username


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    description = models.TextField()

    class Meta:
        verbose_name = 'category'

    def __str__(self):
        return self.slug


class Tag(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    description = models.TextField()
    category = models.ManyToManyField(Category)

    class Meta:
        verbose_name = 'tag'

    def __str__(self):
        return self.slug


class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    content = models.TextField(max_length=2000, default='lorem ipsum dolor sit amet ...', null=False)
    featured_image = models.ImageField(upload_to='posts/featured_images/%Y/%m/%d/')
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)
    affiliate_link = models.URLField(max_length=500)
    # Each post can receive likes from multiple users, and each user can like multiple posts
    likes = models.ManyToManyField(User, related_name='post_like')

    # Each post belong to one user and one category.
    # Each post has many tags, and each tag has many posts.
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True)
    tag = models.ManyToManyField(Tag)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = 'post'

    def __str__(self):
        return self.title
    
    @property
    def display_conent(self):
        if len(self.content) > 50:
            return self.content[:50] + '...'
        else:
            return self.content

    def get_number_of_likes(self):
        return self.likes.count()

class Comment(models.Model):
    content = models.TextField(max_length=500)
    created_at = models.DateField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)


    likes = models.ManyToManyField(User, related_name='comment_like')


    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = 'comment'

    def __str__(self):
        if len(self.content) > 50:
            comment = self.content[:50] + '...'
        else:
            comment = self.content
        return comment
        
    def get_number_of_likes(self):
        return self.likes.count()