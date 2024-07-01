function shuffler(deck){
  
    for (let cnt=0; cnt<=9999; cnt++){
      
      let ind1 = Math.floor(Math.random()*52);
      let ind2 = Math.floor(Math.random()*52);
    
      let tmp=0;
    
      tmp=deck[ind1];
      deck[ind1]=deck[ind2];
      deck[ind2]=tmp;
      
    }
    
    console.log(deck);
    
  }
  
  let deck=[];
  for (let x=1;x<=52;x++){
    deck.push(x);
  }
  console.log(deck);
  shuffler(deck);