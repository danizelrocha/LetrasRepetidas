/*
Precisamos monstrar quantas letras se repentem em uma palavra
Exemplo LAURA = { L: 1 ,A: 2 , U: 1, R: 1 }
*/

const palavra = "Laura Adriano da Rocha".toLowerCase().replaceAll(" ","");

let letras = {};

for (let i = 0; i < palavra.length; i ++) {
    if (letras[palavra[i]]) {
    letras[palavra[i]] ++ ;
    } else {
        letras[palavra[i]] =1;
    }
}
console.log(letras);
