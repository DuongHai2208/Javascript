var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a MockingBird',
        namXuatBan: 2020,
        trangThai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2020,
        trangThai: false
    }
]
console.log(sachs[1]['tacgia']);

//1 Viết hàm nhập vào đầu vào là 1 mảng số xuất ra 1 số lơn nhất 
//và 1 số nhỏ nhất theo thứ tự lớn, nhỏ.
function Bai1(){
var array = [2, 3, 4, 5];
let min = array[0]  ;
let max = array[0]  ; 
for(var i = 0 ; i < array.length ; i++){
    if (min > array[i]){
        min = array[i];
    }
    else if (max < array[i]){
        max = array[i];
    }
    
}
return console.log(max,min);
}
Bai1();
//Function parameters
function plusAll(){
    var res = 0 ; 
    for(i in arguments)
    {
        res += arguments[i];
    }
    return res;
}
document.writeln(plusAll(12)+"<br/>");
document.writeln(plusAll(1, 3, 3, 2));

function func1(a, b, c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1, 2, 3);



