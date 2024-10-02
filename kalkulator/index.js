const readline = require("readline-sync")

const angkapertama = parseFloat(readline.question("masukan angka pertama :"));
const operator = readline.question("masukan operator (+, -, *, /) :");
const angkakedua = parseFloat(readline.question("masukan angka kedua :"));


if (isNaN(angkapertama) || isNaN(angkakedua)){

    return console.log("inputan tidak sesuai !!!");
}else{


const hasil = execute(angkapertama, angkakedua, operator);
console.log(`hasilnya adalah ${hasil}`);
}

function execute(angkapertama,angkakedua,operator){
switch(operator){
    case "+" :
        return angkapertama + angkakedua;
    case "-" :
        return angkapertama - angkakedua;
    case "*" :
        return angkapertama * angkakedua;
    case "/" :
        if(angkakedua === 0){
        return console.log('error: tidak bisa dibagi dengan nol');

        }
        return angkapertama / angkakedua;
    case "%" : 
        return angkapertama % angkakedua;
        default:
            return console.log("operator tidak valid");

    }
}