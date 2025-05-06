import graphene
from . import queries, models, types
import graphql_jwt
from graphene_file_upload.scalars import Upload


class ObtainJSONWebToken(graphql_jwt.JSONWebTokenMutation):
    user = graphene.Field(types.UserType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)


class UserMutation(graphene.Mutation):
    #define response of mutation
    user = graphene.Field(types.UserType)
    # token = graphql_jwt.ObtainJSONWebToken.Field()

    class Arguments:
        #input arguments for this mustation
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)
     

    @classmethod
    def mutate(cls, root, info, username, email, password):
        user = models.User(username=username, email=email)
        user.set_password(password)
        user.save()

        return UserMutation(user=user)

class updateProfile(graphene.Mutation):
    profile = graphene.Field(types.UserType)

    class Arguments:
        id = graphene.ID(required=True)
        bio = graphene.String(required=False)
        username = graphene.String(required=False)
        email = graphene.String(required=False)
        password = graphene.String(required=False)
        avatar = Upload()

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
    post = graphene.Field(types.PostType)
    
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String()
        tag = graphene.String()
        created_at = graphene.String(required=True)
        featured_image=Upload(required=False)
 


    @classmethod
    def mutate(cls, root, info, title, content, tag, created_at, featured_image):
        post=models.Post.objects.create(
            title=title,
            content=content,
            featured_image=featured_image,
            user=info.context.user
        )
        post.created_at = TIME_ZONE.now()
        return PostCreateMutation(post=post)

class Mutation(graphene.ObjectType):
    #auth
    token_auth = ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

    createUser = UserMutation.Field()
    updateProfile = updateProfile.Field()
    createPost = PostCreateMutation.Field()
