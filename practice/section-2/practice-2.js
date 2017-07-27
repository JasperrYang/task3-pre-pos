'use strict';

function countSameElements(collection) {
  var c=[];
  var key_v="";
  var count_v = 0;
  var arr=[];

  for (var i=0;i<collection.length;i++){

    if (collection [i] != -1)
    {
      if (collection[i].indexOf("-") > -1) {
        arr = collection[i].split("-");
        key_v = arr[0];
        count_v = parseInt(arr[1]);
        var keyCountObj = {key: key_v, count: count_v};
        c.push(keyCountObj);
        count_v = 0;
      }

      else {
    key_v = collection[i];
    var key_value=list(collection,key_v,count_v);
    c.push(key_value);
    count_v=0;
      }
    }
  }
  return c;
}
function list(collection,key_v,count_v) {
  for (var j=0;j<collection.length;j++){
    if (key_v === collection[j]){
      count_v ++;
      collection[j] = -1;
    }
  }
  var sum = { key:key_v,count:count_v};
  return sum;
}
