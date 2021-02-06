
var sum = 0;

function addThree() {
    sum = sum + 3
}

// Only change code below this line
function addFive() {
  var num = sum + 5
  return num
 
}
// Only change code above this line

addThree() //this adds three to a number but returned value is undefined

if(typeof addFive === "function") {
    var func = addFive
}

module.exports = { func, sum }
