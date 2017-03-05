/*Starting*/
function init(){
}

function createHTMLElement(eleHTML){
  return document.createElement(eleHTML);
}

function addAttrsInElementHTML(obj,attrsObj){
  for(var attr in attrsObj){
    if(attrsObj.hasOwnProperty(attr)){}
    obj.attr = attrsObj[attr];
  }
}

function findClassName(){}

function addTextInHTML(text){
  return document.createTextNode(text);
}

function addHTMLInDocument(elem){
  document.body.appendChild(elem);
}
