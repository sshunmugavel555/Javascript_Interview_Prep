function gen_armstrong_numbs_until(cnt){
    
    armA=[];

    for (let x=1; x<=cnt; x++){
      
      let og=x;
      let orig=x
      let digCnt=0;
      let sum=0;
      let orig2=x;
    
      while (og>0){
          dig = og % 10;
          digCnt += 1;
          og = Math.floor(og/10);
      }
 
      while (orig2>0){
          dig = orig2 % 10;
          sum = sum + (dig**digCnt);
          orig2 = Math.floor(orig2/10);
      }
      if (orig===sum){
          armA.push(orig);
      }
    }
    
    return armA.join("->");
}

console.log(gen_armstrong_numbs_until(99999));