module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var A=array;
  var res=0;
  if (array.length>0){ 
    res=1;
    var n = A.length;
    for (var i = 0; i < n; i++){ 
      var v = A[ i ], j = i-1;
      while (j >= 0 && A[j] > v){ 
        A[j+1] = A[j]; 
        j--; 
        }
      A[j+1] = v;
      }                    
    for (var i=0; i<A.length-1; i++){ 
      var n=1;
        while (A[i+1]-A[i]==1 || A[i+1]==A[i]) {
          n++;
          if (A[i+1]==A[i]) n--;
          i++;
          }
        res=Math.max(res,n);  
      }
    }
  return res;
  }
