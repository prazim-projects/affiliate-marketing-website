from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from blog import models

# Register your models here.


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Site)
admin.site.register(models.Category)
admin.site.register(models.Tag)

admin.site.register(models.Post)
admin.site.register(models.Comment)
