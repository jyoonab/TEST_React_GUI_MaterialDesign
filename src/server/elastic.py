from elasticsearch import Elasticsearch
from elasticsearch import helpers

#인덱스별로 검색 http://localhost:9200/goods/_search?pretty=true&q=*:*
#Conf File (MAC) : /usr/local/etc/elasticsearch/elasticsearch.yml

# 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
es = Elasticsearch("http://localhost:9200/") # 환경에 맞게 바꿀 것
es.info()


def make_index(input):
    """인덱스를 신규 생성한다(존재하면 삭제 후 생성) """
    if es.indices.exists(index=input):
        es.indices.delete(index=input)
    #print(es.indices.create(index=index_name))
    return es.indices.create(index=input)

def delete_index(input):
    return es.indices.delete(index=input)

def delete_document(input, num):
    es.delete(index=input, doc_type="string", id=num)
    return es.search(index="alias", body={'from': 0, 'size': 10, 'query': {'match_all': {}}})

def save_data(indicename, str):
    if not es.indices.exists(index=indicename):
        es.indices.create(index=indicename)

    doc1 = {'name': '1', 'alias': str}
    es.index(index=indicename, doc_type='string', body=doc1)
    return es.indices.refresh(index=indicename)

def get_alias_list(str):
    return es.search(index="alias", body={'from':0, 'size':10, 'query':{'match':{'alias':str}}})

# 상품명에 '노트북'을 검색한다
#results = es.search(index=index_name, body={'from':0, 'size':10, 'query':{'match':{'goods_name':'노트북'}}})

#print(results)
#for result in results['hits']['hits']:
#    print('score:', result['_score'], 'source:', result['_source'])