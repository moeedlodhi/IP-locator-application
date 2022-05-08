import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import country,iplog
from graphene.types import generic
import requests


class IPobjectType(DjangoObjectType):
    class Meta:
        model=iplog
        fields='__all__'


class DashboardQueries(graphene.ObjectType):
    single_user = graphene.Field(IPobjectType)

    @login_required
    def resolve_single_user(root,info):
        single_user=info.content.User
        return single_user



class IPlogged(graphene.Mutation):
    class Arguments():
        ip_address=graphene.String(required=True)

    ok=graphene.Boolean()
    error=graphene.String()
    information=graphene.List(generic.GenericScalar)


    @login_required
    def mutate(self,info,**kwargs):
        try:
            print(info.context.user,kwargs['ip_address'])
            ip=kwargs['ip_address']
            r=requests.get(f'http://ipwho.is/?ip={ip}').json()
            array=[]
            object_to_create={
                "ip":r['ip'],
                "Continent":r['continent'],
                "Country":r['country'],
                "Country_code":r['country_code'],
                "Region":r['region'],
                "Region_code":r['region_code'],
                "city":r['city']
                }
            country_object,created=country.objects.get_or_create(user=info.context.user,
                                                                country=r['country_code'])


            array.append(object_to_create)
            print(array,r,'r here')    
            return IPlogged(ok=True,information=array)

        except BaseException as e:
            r=requests.get(f'http://ipwho.is/?ip={ip}').json()
            print(str(e),r)
            return IPlogged(ok=False,error=str(e))

class DashboardMutations(graphene.ObjectType):
    log_ip=IPlogged.Field()
    