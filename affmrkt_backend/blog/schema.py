import graphene
from . import queries

schema = graphene.Schema(query=queries.Query)