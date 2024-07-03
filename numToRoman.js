function roman(dig,pv){
    let r="";
    if (dig >0 && dig <= 3){
      for (let x=1; x<=dig; x++){
        r += map[pv.toString()];
      }
    } else if (dig===4 || dig===9){
        r += map[pv.toString()]+map[((dig+1)*pv).toString()];
    } else if (dig > 5 && dig < 9){
        r += map[(pv*5).toString()];
        for (let y=1;y<=dig-5;y++){
          r += map[pv.toString()];
        }
    } else if (dig!=0) {
        r += map[(dig*pv).toString()];
    }
    return r;
  }
  
function romanGen(number){

    let romans=[];

    let pv=1
    let cnt=0
    while (number>0){
        cnt+=1;
        let dig=number%10;
        if (cnt===1){
        romans.unshift(roman(dig,pv));
        }
        if (cnt===2){
        romans.unshift(roman(dig,pv*10));
        }
        if (cnt===3){
        romans.unshift(roman(dig,pv*100));
        }
        if (cnt===4){
        romans.unshift(roman(dig,pv*1000));
        }
        
        number=Math.floor(number/10);
    
    }

    console.log(romans.join(""));

}
  
let map={ 1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M" };
romanGen(3999);