/* BT JS 17-1*/
// 1 sw case

var x = 5;
switch(x){
    case 2: 
        document.writeln("Thu 2 </br>");
        break;
    case 3: 
        document.writeln("Thu 3 </br>");
        break;
    case 4: 
        document.writeln("Thu 4 </br>");
        break;
    case 5: 
        document.writeln("Thu 5 </br>");
        break;
    case 6: 
        document.writeln("Thu 6 </br>");
        break;
    case 7: 
        document.writeln("Thu 7 </br>");
        break;
    default:
        document.writeln("Chu Nhat </br>")
        break;
}

//2 sw case + arr

var x = Number(prompt());
var arr = ["Thu 2 </br>", "Thu 3 </br>", "Thu 4 </br>", "Thu 5 </br>", "Thu 6 </br>", "Thu 7 </br>", "Chu Nhat </br>"];

switch(x){
    case 2: 
        document.write(arr[x-2]);
        break;
    case 3: 
        document.write(arr[x-2]);
        break;
    case 4: 
        document.write(arr[x-2]);
        break;
    case 5: 
        document.write(arr[x-2]);
        break;
    case 6: 
        document.write(arr[x-2]);
        break;
    case 7: 
        document.write(arr[x-2]);
        break;
    default:
        document.write(arr[x-2])
        break;
}

//3 Ktra số nguyên tố
var y = 7;

function SNT() {
    for (let i = 2; i < y; i++){
        if(y % i == 0)
        {
            return false;
        }
        
    }
        return true;
}
if(SNT()){
    document.write(y + " la so nguyen to </br>")
}
else {
    document.write(y + " khong phai la so nguyen to </br>")
}



//4 Hiển thị ma trận hai chiều
var arr = [[1,2,3],[1,2,3],[1,2,3]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
            document.write(arr[i][j]+ " ")
    
    }
    document.write("</br>")
}

//5 Hàm kiểm tra Regex
function checkPassword(password) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(password)) {
      document.getElementById("r_password").innerHTML = "Password ok!";
      return true;
    } else {
      document.getElementById("r_password").innerHTML =
        "Password phải có ít nhất một chữ cái in hoa, ít nhất một số, ít nhất một chữ cái thường, và có ít nhất tám ký tự";
      return false;
    }
  }
  function checkEmail(email) {
    var regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).*@gmail\.com$/;
    if (regex.test(email)) {
      document.getElementById("r_email").innerHTML = "Email ok!";
      return true;
    } else {
      document.getElementById("r_email").innerHTML =
        "Email phải chứa ít nhất một số, một chữ cái, và kết thúc bằng @gmail.com";
      return false;
    }
  }
  
  function submitForm() {
    var hotenValue = document.getElementById("hoten").value;
    var emailValue = document.getElementById("email").value;
    var tendangnhapValue = document.getElementById("tendangnhap").value;
    var passwordValue = document.getElementById("password").value;
    if (hotenValue === "") {
      alert("Họ tên không được để trống");
      return;
    }
    if (emailValue === "") {
      alert("Email không được để trống");
      return;
    }
    if (tendangnhapValue === "") {
      alert("Tên đăng nhập không được để trống");
      return;
    }
    if (passwordValue === "") {
      alert("Mật khẩu không được để trống");
      return;
    }
    if (checkEmail(emailValue) && checkPassword(passwordValue) === false) {
      return;
    } else {
      document.getElementById("hoten").innerHTML = "";
      document.getElementById("email").innerHTML = "";
      document.getElementById("tendangnhap").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      document.getElementById("r_email").innerHTML = "";
      document.getElementById("r_password").innerHTML = "";
    }
    const info = {
      hoten: hotenValue,
      email: emailValue,
      tendangnhap: tendangnhapValue,
      matkhau: passwordValue,
    };
    var result =
      "Họ và tên: " +
      info.hoten +
      "<br>" +
      "Email: " +
      info.email +
      "<br>" +
      "Tên đăng nhập: " +
      info.tendangnhap +
      "<br>" +
      "Mật khẩu: " +
      info.matkhau;
    // var result = JSON.stringify(info);
  
    document.getElementById("ketqua").innerHTML = result;
  }