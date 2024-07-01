function is_pallindrome_number(numb){
    let og = numb;
    let revN = 0;
  
    while (numb > 0){
      let dig = numb % 10;
      revN = (revN*10)+dig;
      numb = Math.floor(numb/10);
    }
    
    if (og === revN){
      console.log(`${og} is a pallindrome number`);
    } else {
      console.log(`${og} is NOT a pallindrome number`)
    }
  }
  
  is_pallindrome_number(123454321);  