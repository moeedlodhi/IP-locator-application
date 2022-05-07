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
    single_user=graphene.Field(UserObjectType)

    def resolve_single_user(root,info):
        single_user=info.content.User
        return single_user


class AuthMutations(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()