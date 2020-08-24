rotate_array = () =>{
var nbre = 0;
var tab = [3,2,1,0,8,5,6,7];
 for(var i = 0; i < tab.length; i++){
  if(tab[i] === 0){
     var keep = i;
     nbre = tab.length - keep;
  }
 }
 for(var j = 0; j < nbre -1; j++) 
      tab.unshift(tab.pop());
 return tab;
}
console.log(rotate_array());
