import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import iplog
from graphene.types import generic
import requests
from django.db.models import Count


class IPobjectType(DjangoObjectType):
    class Meta:
        model=iplog
        fields='__all__'


class DashboardQueries(graphene.ObjectType):
    ip_logs = graphene.List(IPobjectType)
    most_searched_countries=graphene.List(generic.GenericScalar)
    heat_map=graphene.List(generic.GenericScalar)

    @login_required
    def resolve_ip_logs(root,info):
        user=info.context.user
        all_logs=iplog.objects.filter(user=user)
        return all_logs

    @login_required
    def resolve_most_searched_countries (root,info):
        user=info.context.user
        result = (iplog.objects.filter(user=user)
        .values('country')
        .annotate(dcount=Count('country'))
        .order_by('-dcount'))
        
        return result

    @login_required
    def resolve_heat_map(root,info):
        user=info.context.user
        most_search_country=(iplog.objects.filter(user=user)
        .values('country')
        .annotate(dcount=Count('country'))
        .order_by('-dcount'))[0]['country']
        
        result = (iplog.objects.filter(user=user,country=most_search_country)
        .values('region','IP')
        .annotate(dcount=Count('IP'))
        .order_by())
        return result    




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
            log_to_create=iplog.objects.create(user=info.context.user,
                                               country=r['country'],
                                               country_code=r['country_code'],
                                               continent=r['continent'],
                                               IP=r['ip'],
                                               region=r['region'],
                                               region_code=r['region_code'],
                                               city=r['city'])


            array.append(object_to_create)
            print(array,r,'r here')    
            return IPlogged(ok=True,information=array)

        except BaseException as e:
            r=requests.get(f'http://ipwho.is/?ip={ip}').json()
            print(str(e),r)
            return IPlogged(ok=False,error=str(e))

class DashboardMutations(graphene.ObjectType):
    log_ip=IPlogged.Field()
    