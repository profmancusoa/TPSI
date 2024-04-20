export const special_concat = (s1, s2) => {
    return s1 && s2 && s1.split(' ').length == 1 && s2.split(' ').length == 1 ?
        `${s2.substring(0, 2)}${s1.substring(2,)}${s1.substring(0, 2)}${s2.substring(2,)}` :
        'parole non adatte';
        
};
/* 
let str1 = '', str2 = 'Rossi fiippo';
console.log(special_concat(str1, str2)); */