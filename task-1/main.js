const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var array = input.split(','); // ['5', '2 4 7 12 9']
    
    for(let i=0;i<array.length;i++) {

        for(let j=i+1;j<array.length;j++) {
            if(array[i]===array[j]) {
                array.splice(j,1);
            }
        }
    }
    console.log(array.length);
 });
