/*Starting*/
function init(){
}

function createHTMLElement(eleHTML){
  return document.createElement(eleHTML);
}

function addAttrInElemHTML(obj,attrs){
  for(var attr in attrs){
    obj.attr = attrs[attr];
  }
}

function addTextInHTML(text){
  return document.createTextNode(text);
}

function addHTMLInDocument(elem){
  document.body.appendChild(elem);
}
