'use strict';

function countSameElements(collection) {
  var c=[];
  var key_v="";
  var count_v=0;

  for (var i=0;i<collection.length;i++) {
    if (collection[i] != -1){
    key_v = collection[i];
    var keyValue=list(collection,key_v,count_v);
    c.push(keyValue);
    count_v=0;
    }
  }
  return c;

}
function list(collection,key_v,count_v) {
  for (var j=0;j<collection.length;j++){
    if(key_v === collection[j]){
      count_v ++;
      collection[j]= -1;
    }
  }
  var sum={key:key_v,count:count_v};
  return sum;
}
