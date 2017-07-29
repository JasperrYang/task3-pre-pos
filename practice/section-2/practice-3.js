'use strict';


 function countSameElements(collection) {
   var arr=[];
   var result=[];
   var resultArray=[];
   collection.forEach((element,index) => {
     if (element.length > 1){
       var Array=element.split("");
       var num=parseInt(element.replace(/[^0-9]/ig, ""));
       for (var i=0;i<num-1;i++){
         arr.push(Array[0]);
       }
       collection.splice(index,1,Array[0]);
       resultArray=collection.concat(arr);
     }
   });

   resultArray.forEach( item => {
     if (!result.find(element => element.name === item)){
       result.push({name:item,summary:resultArray.filter(element => element === item).length});
     }
   });
   return result;
 }
