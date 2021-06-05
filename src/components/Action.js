/*
Index     <>  Database
Type     <>  Table
Document<>  Row
Field     <>  Column
Mapping  <>  Schema

GET      <>  Select
PUT      <>  Update
POST    <>  Insert
DELETE  <>  Delete
출처: https://goddaehee.tistory.com/86 [갓대희의 작은공간]
*/


//basic request functions
export async function requestPOST(body, url, header) {

  let formData = new FormData();

  formData.append('cmd', body);

  console.log(body);

  let response = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: header,
  });

  let responseJson = await response.json();

  return responseJson;
}

export async function requestGet(url, header) {

  let response = await fetch(url, {
    method: 'GET',
    headers: header,
  });

  let responseJson = await response.json();

  return responseJson;
}

export async function requestDelete(url) {

  let response = await fetch(url, {
    method: 'Delete',
  });

  let responseJson = await response.json();

  return responseJson;
}

//get list function
export async function getAllList() {
  return await this.requestGet('http://localhost:9200/_all/_search', {});
}

//add list function
export async function addDocument(index, type, body) {
  return await this.requestPost(body, 'http://localhost:9200/' + index + '/' + type + '/1/', {"Content-Type": "application/json"});
}

//delete function
export async function deleteDocument(index, type, doc) {
  return await this.requestDelete('http://localhost:9200/' + index + '/' + type + '/' + doc + '?refresh');
}

//refresh function
export async function refreshIndex(index, type, doc) {
  return await this.requestDelete('http://localhost:9200/' + index + '/' + type + '/' + doc);
}
