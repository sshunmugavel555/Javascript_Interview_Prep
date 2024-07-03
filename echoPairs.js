function echoPairs(arr,total){
    let pairs=[];
    let tmp=[];
    for (e of arr){
      if (arr.includes(total-e) && !tmp.includes(total-e)){
        tmp.push(e);
        if (e != total-e){
          pairs.push(`${e},${total-e}`);
          
        }
      }
    }
    console.log(pairs);
  }
  
  
  
  
  let myArray = [1,2,3,4,5,10,15,22,7,11];
  echoPairs(myArray,2);  