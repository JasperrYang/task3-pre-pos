'use strict';

function collectSameElements(collectionA, collectionB) {
    var i,j,n=0;
    var c=[];
    for(i=0;i<collectionA.length;i++){
      for(j=0;j<collectionB.length;j++){
        if (collectionA[i] === collectionB[j]){
          c[n++] = collectionB[j];
        }
      }
    }
    return c;
}

