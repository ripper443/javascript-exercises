const sumAll = function(a , b) {
    let final  = +"";
    let newA = a;
    let newB = b;



    if (newA < 0 || newB <0 || !Number(newA) || !Number(newB))  {
        return "ERROR";
    } else if ( newA === Number(newA) === false)  {
        return "ERROR";
    } else if ( newB === Number(newB) === false) {
        return "ERROR";
    }
    else if ( a > b){
        newA = arguments[1];
        newB = arguments[0];
        for (let i = newA; i <=newB; i++) {
            final += i;
     }
     } else if (a < b) {
        for (let i = newA; i <=newB; i++) {
            final += i;
     }
     }
    

   
 return final;
}


// Do not edit below this line
module.exports = sumAll;

/** 
 newA = 10;
 newB = 43434;



if (newA < 0 || newB <0 || !Number(newA) || !Number(newB)) {
    console.log("invalid");
} else {
    console.log("valid");
} 

function sum (a,b) {
    let final  = +"";
    let newA = a;
    let newB = b;



    if (newA < 0 || newB <0 || !Number(newA) || !Number(newB))  {
        return "ERROR";
    } else if ( newA === Number(newA) === false)  {
        return "ERROR";
    } else if ( newB === Number(newB) === false) {
        return "ERROR";
    }
    else if ( a > b){
        newA = arguments[1];
        newB = arguments[0];
        for (let i = newA; i <=newB; i++) {
            final += i;
     }
     } else if (a < b) {
        for (let i = newA; i <=newB; i++) {
            final += i;
     }
     }
    

   
 return final;
} ; sum(3,10);     "2" === true



newA = "23";
if (!(newA === Number(newA))) {     //NUMBER == TRUE
    console.log("DOES NOT EQUAL");
}else {
        console.log("EQUAL");}

        !(newA === +(newA)) && !(newB === +(newB)) 


        **/