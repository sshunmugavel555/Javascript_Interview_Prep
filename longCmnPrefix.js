function long_common_prefix(words){
  
    let tmp=words[0].length;
    for (let x=1; x<=words.length-1; x++){
      if (words[x].length < tmp){
        tmp=words[x].length;
      }
    }
    
    let isMach=true;
    let prefix="";
    
    for (let y=0; y<tmp; y++){
      for (let z=y+1; z<words.length; z++){
        if (words[0][y] === words[z][y]){
        } else {
            isMach=false;
            break;
        }
      }
      if (isMach===false){
        break;
      }else{
        prefix += words[0][y];
      }
    }
    
    console.log(prefix);
    
  }
  
  let wordL=['a','stab','stabe'];
  
  long_common_prefix(wordL);