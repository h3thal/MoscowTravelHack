import os
import json 
from .models import tour

def filing(file):
    a="static\_"
    path = a+file
    with open(path,'r' ,encoding='utf-8') as f:
        data = json.load(f)
        return data

def data_load():
    with open('static\data.json','r', encoding='utf-8') as f:
        data= json.load(f)
    for item in data:
        tour = Product(
            name=item['name'],
            price=Decimal(item['price']),
            description=item['description']
        )
    product.save()





# import codecs
# fileObj = codecs.open
# def filing():
#     f = open( "filter.json", "r" ,encoding='utf-8')
#     text = f.read()
#     f.close()
#     return text
# print(filing())