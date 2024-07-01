function is_balanced(expr){
    let oP = ['{','(','[','<'];
    let cP = ['}',')',']','>'];
    let isBal = true;
  
    let temp = [];
  
    for (let p of expr){
        if (oP.includes(p)===true){
          temp.push(p);      
        } else if (cP.includes(p)===true){
            if (temp.length === 0){
              isBal = false;
              break;
            } else {
              if (temp[temp.length-1] === oP[cP.indexOf(p)]) {
                temp.pop();
            } else {
                isBal = false;
                break;
            }
          }
        }
    }
  
    if (isBal === true){
      if (temp.length > 0){
        console.log(`${expr} is NOT balanced`);
      } else {
        console.log(`${expr} is balanced`);
      }
    } else {
      console.log(`${expr} is NOT balanced`);
    }
  }
  
  is_balanced("{[<()>]}");