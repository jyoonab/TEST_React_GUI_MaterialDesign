from elasticsearch import Elasticsearch
from elasticsearch import helpers

#인덱스별로 검색 http://localhost:9200/goods/_search?pretty=true&q=*:*

# 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
es = Elasticsearch("http://localhost:9200/") # 환경에 맞게 바꿀 것
es.info()

# 인덱스는 독립된 파일 집합으로 관리되는 데이터 덩어리이다
index_name = 'good'

def make_index(es, index_name):
    """인덱스를 신규 생성한다(존재하면 삭제 후 생성) """
    if es.indices.exists(index=index_name):
        es.indices.delete(index=index_name)
    print(es.indices.create(index=index_name))

def delet_index(es, index_name):
    print(es.indices.delete(index=index_name))

#make_index(es, index_name) # 상품 데이터 덩어리(인덱스)를 생성한다
delet_index(es, index_name)

# 데이터를 저장한다
doc1 = {'goods_name': '삼성 노트북 9',    'price': 1000000}
doc2 = {'goods_name': '엘지 노트북 그램', 'price': 2000000}
doc3 = {'goods_name': '애플 맥북 프로',   'price': 3000000}
es.index(index=index_name, doc_type='string', body=doc1)
es.index(index=index_name, doc_type='string', body=doc2)
es.index(index=index_name, doc_type='string', body=doc3)
es.indices.refresh(index=index_name)

# 상품명에 '노트북'을 검색한다
results = es.search(index=index_name, body={'from':0, 'size':10, 'query':{'match':{'goods_name':'노트북'}}})

print(results)
#for result in results['hits']['hits']:
#    print('score:', result['_score'], 'source:', result['_source'])

