from flask_restful import Resource
import json
from helpers.item import *
from flask import request


class ItemApi(Resource):
    def post(self, route):
        if route == "create":
            return SaveItem()

    
    # def get(self, route):
    #     if route == "readall":
    #         return ReadAllAdmin()
    #     if route == "readsingle":
    #         return ReadSingleAdmin()
            
    
    # def delete(self, route):
    #      if route == "delete":
    #         return DeleteAdmin()
         
    # def patch(self, route):
    #     if route == "update":
    #         return UpdateAdmin()
        