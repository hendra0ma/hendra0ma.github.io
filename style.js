// // const button = document.getElementById('btnButton');
// const firstName = document.getElementById('first-name');     // ini untuk mengambil firstName
// const lastName = document.getElementById('last-name');
// const city = document.getElementById('city');
// const zipCode = document.getElementById('zip-code');
// const check = document.getElementById('check');
// const warning = document.getElementById('warning');

// let resetForm = () => {
//     firstName.value = '';
//     lastName.value = '';
//     city.value = '';
//     zipCode.value = '';
//     check.checked = false;
// }

// let validateFormData = (e = getFormData()) =>{

//         if (firstName.value != '' && lastName.value != '' && city.value != '') {
//             if (typeof zipCode.value != "number") {
//                 if (isLength(zipCode.value , 5) == true) {
//                     if (checkBoxIsChecked() === true) {
//                         warning.innerHTML = '';
//                         return true;
//                     }    else{
//                         warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
//                         return false;
//                     }
//                 }else{
//                     warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
//                     return false;
//                 }

//             }else{
//                 warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
//                 return false;
//             }
//         }else{
//             warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
//             return false;
//         }

// }

// function getFormData() {
//     var ambilNama = {
//         firstName : firstName.value,
//         lastName : lastName.value,
//         city : city.value,
//         zipCode : zipCode.value,
//         check : check.checked,
//     }
//     return ambilNama;
// }
// let angka = "sayaHendra";

// let isNumber = (string) => {
//     if(typeof string == "number"){
//         return true;
//     }else{
//         return false;
//     }
// }

// let isLength = (string, integer) => {
//     if (typeof integer == "number") {
//         if(string.length == integer){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         console.log("gagal");
//     }
// }

// let checkBoxIsChecked = ()=>{
//     if (check.checked) {
//         return true
//     }else{
//         return false
//     }

// }
let canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let tulisan =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
tulisan.split("");
let fontSize = 15;
let kolom = canvas.width / fontSize;
let drops = [];
for (let x = 0; x < kolom; x++) drops[x] = 1;

let draw = () => {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px arial";
  for (let i = 0; i < drops.length; i++) {
    let text = tulisan[Math.floor(Math.random() * tulisan.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
};

setInterval(draw, 33);
