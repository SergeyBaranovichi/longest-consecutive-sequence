module.exports = function longestConsecutiveLength(array) {
  // your solution here
    array.sort(compare);
    if (array.length == 0) {
      return 0;
      }
    var c = 1;
    var res = 1;
     function compare(a,b){
      if(a>b) return 1;
      if(a<b) return -1;
      }
    for (var i=0; i<array.length; i++){
      if(array[i]+1 == array[i+1]){
        c++;
        if(c>res){
          res=c;
          }
        } else if(array[i] == array[i+1]){
          c=c;
          } else c=1;
        }
      return res;
    }
  
