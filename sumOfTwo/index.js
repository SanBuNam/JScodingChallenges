function sumFinder(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){  
     for(var j = i+1; j<len; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }
  return false;
}

sumFinder([6,4,3,2,1,7], 9); //true
sumFinder([6,4,3,2,1,7], 2); // false


function sumFinder2(arr, sum){
   var differ = {}, 
       len = arr.length,
       substract;
   
   for(var i =0; i<len; i++){
      substract = sum - arr[i];
      if(differ[substract])
        return true;       
      else
        differ[arr[i]] = true;
   }
   return false;
 }
 
 sumFinder([6,4,3,2,1,7], 9); // true
 sumFinder2([6,4,3,2,1,7], 2);// false