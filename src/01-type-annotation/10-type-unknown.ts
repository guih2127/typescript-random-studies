// O Unknown funciona como o any, mas um pouco mais seguro
// O Any permite fazer qualquer coisa,

let x: any;
x = 100;
x = 'Guilherme';
const y = 899;
console.log(x + y); // vai concatenar normalmente, pois é any

let x2: unknown;
// console.log(x2 + y); // não é possivel, pois o x2 é do tipo unknown
if (typeof x2 === 'number') console.log(x2 + y);
// O unknown nos força a fazer a checagem de tipos, diferente do any.
