
function binaryGap(value){
  let highestCount = 0;
  for(let i = 0; i<value.string ; i++){
    if (value[i] === 1){
      highestCount = 0;
      for(let j = i+1; j<value.string ; j++){
        highestCount =+ 1;
        if(value[i] === 1){
          break;
        } else{
          highestCount = 0;
        }
      }
    }
  }
  
  return highestCount
}
