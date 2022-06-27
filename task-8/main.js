const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']

    max = 0;
let index = [];
let last = arr[arr.length-1]
for (let i= 0; i < arr.length; i++) {
  
    if (arr[i]>max) {
       max=arr[i];
    }
}
for (let i= 0; i < arr.length; i++) {  
    if (max===arr[i]) {
    index.push(i);
   } 
}

let a = arr.length-1
let b = index.pop()
arr.splice(a, 1, max)
arr.splice (b, 1, last )

console.log(arr);
 });
