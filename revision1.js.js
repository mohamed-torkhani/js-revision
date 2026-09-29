
//Exercise 1.2: Name Badge
//

function  formatBadge(name,role){
    return name.toUpperCase() + "-" + role
}

.

//Exercise 1.3: Fence Length

//
function fenceLength (length , width){
    return (length + width) * 2
}


.

//Exercise 1.5: Step Down with While
//
var x = 24

while (x> 0) {
    x = x - 4 ; 
    console.log(x)
}


.
// Exercise 1.6: Multiples with For
//

for (var i = 1 ; i<= 6 ; i ++){
    console.log(4 * i)
}





.
// Exercise 2.2: Repeat a Word
//

function repeatWord (word,numOfReapets){
    var result = "";
    for (var i = 0 ; i< numOfReapets ; i++){
        result = result + word
    }
    console.log(result)
         }



// Exercise 2.5: Count Capital Letters
//

function countCapitals(text){
    var result = 0 ;
    for(var i = 0 ; i< text.length ; i++){
        if (text[i] !== " " && text[i] === text[i].toUpperCase()) {
            result = result + 1
        }
    }
    console.log(result)
}



// Exercise 3.1: Ride Fare
//

function rideFare (stops,hasPass){
    if ( hasPass === true) {
        return 0
    }
    if ( stops <= 3) {
        return 2
    }
    return  2 + (stops - 3) * 0.5
}


// Exercise 3.2: Reverse the Text
//


function reverseText(text){
    var result = ""
    for (var i = text.length-1; i>=0 ; i --){
        result = result + text[i]
    }
    console.log(result)
}



// bounus
//



function collectStamps (goal){
    var stamps = 0 ;
    while ( stamps <= goal) {
        stamps = stamps + 3
           console.log(stamps)
    }
}