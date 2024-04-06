import os
import json 

def filing(file):
    a="static\_"
    path = a+file
    with open(path,'r' ,encoding='utf-8') as f:
        data = json.load(f)
        return data

filing('filter.json') 






# import codecs
# fileObj = codecs.open
# def filing():
#     f = open( "filter.json", "r" ,encoding='utf-8')
#     text = f.read()
#     f.close()
#     return text
# print(filing())