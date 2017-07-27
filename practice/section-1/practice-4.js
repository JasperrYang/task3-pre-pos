'use strict';

function collectSameElements(collectionA, objectB) {
  var C=[];
  var n=0;
  for (var a in collectionA){
    for (var b in objectB.value){
      if(collectionA[a].key === objectB.value[b]){
        C[n++] = objectB.value[b];
      }
    }
  }
  return C;
}
