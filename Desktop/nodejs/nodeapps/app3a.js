
var a, b;

function enterb (input2) {
    b = Number (input2);
    var result = a+b;
    console.log( result );
}

function entera (input1) {
    a = Number (input1);
    ri1.close();
    ri2.question ("enter value of b: ", enterb);    
}

ri1.question ("enter value of a: ", entera);
