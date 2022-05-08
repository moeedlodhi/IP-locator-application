import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required


class UserObjectType(DjangoObjectType):
    class Meta:
        model=User
        fields='__all__'


class UserQueries(graphene.ObjectType):
    single_user = graphene.Field(UserObjectType)

    def resolve_single_user(root,info):
        single_user=info.content.User
        return single_user


class RegisterUser(graphene.Mutation):
    class Arguments():
        username = graphene.String()
        email = graphene.String()
        password = graphene.String()

    ok=graphene.String()

    def mutate(self,info,**kwargs):
        try:
            user_to_create=User.objects.create(email=kwargs['email'], username=kwargs['username'])
            user_to_create.set_password(kwargs['password'])
            user_to_create.save()
            return RegisterUser(ok='True')
        except BaseException as e:
            raise Exception({'error':e})       

class AuthMutations(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    register_user=RegisterUser.Field()