// Immediately Invoked Function Expressions (IIFE)

// or ye function imediately execute hojate hai 
// global scope ke vajaha se jo pollution hota hai usese bcne ke leyia hm iife ka use karte hai 

(function chai(){     //ye named iife 
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // yahapar ; ye imp hai kuyki ye btata hai ke imdeiately invoked function ko rokna hai yaha pr


( (name) => {           // ye hai unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('AMAN')
