import graphene
from . import queries, models, types
# from graphene_file_upload_scalars import Upload


class UserMutation(graphene.Mutation):
    #define response of mutation
    user = graphene.Field(types.UserType, id=graphene.Int())

    class Arguments:
        #input arguments for this mustation
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)
        created_date = graphene.String(required=True)
    

    @classmethod
    def mutate(cls, root, info, username, email, password):
        user = models.User.create(username=username, email=email)
        user.set_password(password)
        user.bio = "Change me"
        user.save()

        return UserMutation(user=user)

class updateProfile(graphene.Mutation):
    profile = graphene.Field(types.UserType, id=graphene.Int())

    class Arguments:
        id = graphene.ID(required=True)
        bio = graphene.String(required=False)
        username = graphene.String(required=False)
        email = graphene.String(required=False)
        password = graphene.String(required=False)
        # avatar = Upload()

    @classmethod
    def mutate(cls, root, info, id, bio, username, email, password):
        profToUpdate = models.User.objects.get(pk=id)
        profToUpdate.bio = bio
        profToUpdate.username = username
        profToUpdate.email = email
        profToUpdate.password = password
        profToUpdate.save()

        return updateProfile(profile=profToUpdate)
        

class PostCreateMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String()
        tag = graphene.String()
        created_at = graphene.String(required=True)
        # featured_image=Upload()
 
    post = graphene.Field(types.PostType)

    @classmethod
    def mutate(cls, root, info, title, content, tag, created_at):
        newPost=models.Post.objects.create(
            title=title,
            content=content,
            # featured_image=featured_image,
            user=info.context.user
        )
        newPost.created_at = TIME_ZONE.now()
        return PostCreateMutation(post=newPost)

class Mutation(graphene.ObjectType):
    createUSer = UserMutation.Field()
    updateProfile = updateProfile.Field()
    PostCreateMutation = PostCreateMutation.Field()
