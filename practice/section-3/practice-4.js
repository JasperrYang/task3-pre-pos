'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var C=[];
  var key_v="";
  var count_v=0;
  var arr=[];

  for(var i=0;i<collectionA.length;i++){
    if ( collectionA[i] != -1) {
      if (collectionA[i].indexOf("-") > -1){
        arr=collectionA[i].split("-");
        key_v = arr[0];
        count_v =parseInt(arr[1]);
        var keyCount = {key:key_v,count:count_v};
        C.push(keyCount);
        count_v =0;

    }else {
      key_v = collectionA[i];
      var keyCount=list(collectionA,key_v,count_v);
      C.push(keyCount);
      count_v =0;
      }
    }

  }
  for (var a in C){
    for (var b in objectB.value){
      if (C[a].key === objectB.value[b]){
        C[a].count -= Math.floor((C[a].count)/3);
      }
    }
  }
  return C;
}
function list(collectionA,key_v,count_v) {
  for(var j=0;j<collectionA.length;j++){
    if (key_v === collectionA[j]){
      count_v++;
      collectionA[j] = -1;
    }
  }
  var sum = {key:key_v,count:count_v};
  return sum;
}
