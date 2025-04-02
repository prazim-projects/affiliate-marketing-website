import graphene
from . import queries, models, types



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
        user = models.User(username=username, email=email, password=password)
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
        # avatar = graphene.Field(required=False)

    @classmethod
    def mutate(cls, root, info, id, bio, username, email, password):
        profToUpdate = models.User.objects.get(pk=id)
        profToUpdate.bio = bio
        profToUpdate.username = username
        profToUpdate.email = email
        profToUpdate.password = password
        profToUpdate.save()

        return updateProfile(profile=profToUpdate)
        

# class PostCreateMutation(graphene.Mutation):
#     class Arguments:
#         title =
#         content
#         category 
    
#     post = graphene.Field(types.PostType)

class Mutation(graphene.ObjectType):
        createUSer = UserMutation.Field()
        updateProfile = updateProfile.Field()
