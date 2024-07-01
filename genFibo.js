function gen_fibo(cnt){
    if (cnt===1 || cnt===0){
      return [0];
    } else if (cnt===2){
      return [0,1];
    } else {
      fib=[0,1];
      for ( let x=2; x<cnt; x++){
        fib.push(fib[x-1]+fib[x-2]);
      }
      return fib;
    }
  }
  
  series=gen_fibo(0);
  
  for (e of series){
    console.log(e);
  }