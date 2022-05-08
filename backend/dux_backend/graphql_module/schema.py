from auth_module.schema import AuthMutations,UserQueries
from dashboard.schema import DashboardMutations,DashboardQueries
import graphene
class Mutation(
    AuthMutations,
    DashboardMutations

):pass

class Query(
    UserQueries,
    DashboardQueries

):pass

schema = graphene.Schema(query=Query, mutation=Mutation, types=[])

