let rand = Math.random()
let adjectives, shop, word;

// Adjective
if(rand>=0 & rand<=0.33){
    adjectives = "Crazy";
    
}
else if(rand>=0.33 & rand<=0.66){
    adjectives = "Amazing";
    
}
else{
    adjectives = "Fire";
    
}

// Shop Name
if(rand>=0 & rand<=0.33){
    shop = "Engine";
    
}
else if(rand>=0.33 & rand<=0.66){
    shop = "Foods";
    
}
else{
    shop = "Garments";
    
}

// Another Word
if(rand>=0 & rand<=0.33){
    word = "Bros";
    
}
else if(rand>=0.33 & rand<=0.66){
    word = "Limited";
    
}
else{
    word = "Hub";
    
}

console.log(`The business name is ${adjectives} ${shop} ${word}`)


