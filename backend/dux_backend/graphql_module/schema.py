from auth_module.schema import AuthMutations,UserQueries
import graphene
class Mutations(
    AuthMutations

):pass

class Query(
    UserQueries

):pass

schema = graphene.Schema(query=Query, mutation=Mutations, types=[])

