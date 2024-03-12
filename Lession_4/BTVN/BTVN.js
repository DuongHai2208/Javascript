//BT PET
class pet {
    constructor(name, talk){
        this.name = name;
        this.talk = talk;
    }
    getName() {
        return "Tôi tên là: "+this.name;
    }
    getTalk(){
        return "Tiếng kêu: " + this.talk;
    }
    introduce(){
        document.writeln(this.getName()+"<br/>")
        document.writeln(this.getTalk()+"<br/>")
        
    }
}

// var myPet = new pet("Vàng", "gau gau !!!");
// myPet.introduce();

class dog extends pet {
    constructor(name,talk,TypeOfPet){

        super(name, talk);
        this.TypeOfPet = TypeOfPet;
    }
    getTypeOfPet(){

        return this.TypeOfPet;

    }
    dogIntroduce = super.introduce();
    dogTalk = super.getTalk();
    inRa(){
        document.writeln("Loại vật nuôi: " + this.getTypeOfPet()+"<br/>")
        
        return this.dogIntroduce, this.dogTalk;
    }
    

    
}
var cho = new dog("Rockie", "gâu gâu!!!","4 chân")
cho.inRa();



//Chuyen func thanh class

class Square {
    constructor(width) {
        this.width = width;
    }

    getArea() {
        if (this.width > 0) {
            return this.width * this.width;
        }
    }
}

class Cube extends Square {
    constructor(width) {
        super(width);
    }

    getVolume() {
        if (this.width > 0) {
            return super.getArea() * 6;
        }
    }
}
var mySquare = new Square(5);
document.write(mySquare.getArea() + "<br/>");

var myCube = new Cube(5);
document.write(myCube.getVolume() + "<br/>");
document.write(mySquare.getArea() + "<br/>");

//Chuyen func thanh class 2
class Car {
    constructor() {
        this.speed = 0;
    }

    printSpeed() {
        console.log(this.speed);
    }
}

var car = new Car();
car.instanceMethod = function() {
    console.log('An instance method');
};
car.speed = 50;
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car {
    constructor() {
        super();
        this.topState = 'closed';
    }

    openTop() {
        this.topState = 'opened';
        console.log('Top ' + this.topState);
    }

    closeTop() {
        this.topState = 'closed';
        console.log('Top ' + this.topState);
    }
}

const cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet {
    constructor() {
        super();
        this.name = 'Tesla http....';
    }

    sayName() {
        console.log(this.name);
    }
}

const tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();



//Callback tong cac so trong mang
class tongMang {
    constructor(arr) {
        this.arr = arr;
    }

    calculate(myCallback) {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        myCallback(sum);
    }
}

var myArr = new tongMang([1, 2, 3, 4, 5]);
myArr.calculate(function(sum) {
    document.write("Tổng các phần tử của mảng là: " + sum);
});


// tim so chan trong mang, co su dung callback
const arr = [];

function input(calback){
    while (true) {
        var input = prompt("Nhap vao cac so can kiem tra");
        if (input === null || input === "") {
            break; 
        }
        var number = Number(input);
        arr.push(number);
    }
    if(typeof calback === 'function')
        console.log("Ket qua: ",calback(arr));
}
function chan(arr){
    var result = [];
    arr.forEach(i => {
        if(i % 2 === 0){
            result.push(i);
        }
    });
    return result;
}

input(chan);
