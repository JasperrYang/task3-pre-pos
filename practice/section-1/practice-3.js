'use strict';

function collectSameElements(collectionA, objectB) {
  var c=[];
  var n=0;
  for(var i=0;i<collectionA.length;i++){
  for(var j=0;j<objectB.value.length;j++){
    if (collectionA[i] === objectB.value[j]){
      c[n++] = objectB.value[j];
    }
  }
  }
  return c;
}
