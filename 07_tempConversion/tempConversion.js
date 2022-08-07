const ftoc = function(n) {
  let c =(n-32) * 5 / 9;

  let rounded = Math.round(c *10) /10;
  return rounded;
}; 

const ctof = function(n) {
  let f = (n * 9/5) + 32 ;
  let rounded = Math.round(f * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


//Formula
//(n°F − 32) × 5/9 = n°C

/** 
function test(n) {
  let c =(n-32) * 5 / 9;

  let result = Math.round(c *10) /10;
  return result;
} ;  test(100); **/