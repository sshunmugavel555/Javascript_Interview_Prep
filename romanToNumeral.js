let map={ "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000 };

function romanToNumeralConv(roman){
  
  let numb=0;
  let prev=roman[0];
  
  for (let eL of roman){
    if (map[eL] <= map[prev]){
      numb += map[eL];
    } else {
      numb += map[eL];
      numb -= 2*map[prev];
    }
    prev=eL;
  }
  console.log(`Number equivalent of Roman - ${roman} ----- ${numb}`);
}

romanToNumeralConv("MMMMMMMMMCMXCIX")