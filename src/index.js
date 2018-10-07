module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var res=0;
  if (array.length>0){ 
    res=1;
    var n = array.length;
    for (var i = 0; i < n; i++){ 
      var v = array[ i ], j = i-1;
      while (j >= 0 && array[j] > v){ 
        array[j+1] = array[j]; 
        j--; 
        }
        array[j+1] = v;
      }                    
    for (var i=0; i<array.length-1; i++){ 
      var n=1;
        while (array[i+1]-array[i]==1 || array[i+1]==array[i]) {
          n++;
          if (array[i+1]==array[i]) n--;
          i++;
          }
        res=Math.max(res,n);  
      }
    }
  return res;
  }
