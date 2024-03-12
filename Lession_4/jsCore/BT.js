//Closures scope
var sayBye = function(name){
    var text = 'Bye, ' + name;
    return () => {
        console.log(text);
    
    }
}
sayBye('Me');
var callMe = sayBye('Me');
callMe();

//Curry
function add(a,b,c){
    return a+b+c;
}

console.log(add(1,2,3));
function addCurries(a){
    return (b) => {
        return (c) => {
            return a + b+ c;
        }
    }
}
//console.log(addCurries((1)(2)(3)));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3);


//This
function global(){
    document.write(this + "</br>");
}
var o = {"local" :function(){
    document.write(this+this.x+"</br>")}, "x": 10};
global();
//o.global();

//Scopes
var person1 = {name: "Nhat Minh", age:12};
var person2 = {name: "Huu Trung", age:32};
var sayHello = function(){
    alert('hello, '+ this.name);
};
var sayGoodbye = function(){
    alert('goodbye, '+ this.name);
};
sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//Scope Chain
function Step1(){
    console.log(te);
}

function Step2(){
    var te = 2;
    Step1();
}
Step2();
var te = "Global variables";

// Scopes, bind

var checkNumericRange = function (value){
    if (typeof value !== 'number' ) {
        return false
    } else {
        return value >= this.minimum && value <= this.maximun;
    }
    var range = {minimum: 10, maximun:20};

    var result = boundCheckNumericRange(12);
    document.write(result);
}

//Currying
function add(v1, v2){return v1 + v2;}
function curriedAdd(v2){return add(5,v2);}

//Lexical
function fOter(){
    var x = "Hello ";
    function fIner(){
        x = "World";
    }
    fIner();
    return x;
}
document.write(fOter());

//
var myFunction = function(){
    var name = 'Ha Thi';
    var myOtherFunction = function(){
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction;

//Closure
function outerF(){
    var x = "World";
    function innerFsetx(val){
        x = val;
    }
    return innerFsetx;
}
var a =outerF();
a("Hello")

//Functional inheritance
function square(width){
    var squareObject  = {};
    squareObject.getArea = function(){
        if(width>0) return width*width;
    }
    return squareObject
}
var myBox = square(5);
document.write(myBox.getArea() + "<br/>");
document.write(myBox.width + "<br/>");

function cube(width){
    var cubeObject = square(width);
    var squareArea = cubeObject.getArea;
    cubeObject.getVolume = function(){
        if(width>0) return squareArea * width;
    }
    cubeObject.getArea = function (){
        if(width>0) return squareArea() * 6;
    }
    return cubeObject;
}
var myCube = cube(5);
document.write(myCube.getArea()+"<br/>");
document.write(myCube.getVolume()+"<br/>");

//
class square{
    constructor(width){
        this.width = width;
    }

    getArea(){
        console.log('Square of this ${this.width * this.width}');
        return this.width * this.width;
    }
}
class cube extends square{
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        console.log('Volume if this ${this.squareArea * this.width}');
        return this.squareArea * this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume();


