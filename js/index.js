alert('Hello! I\'m your happy mathematic friend. Let\s solve a quadratic equation together');

const numbA = parseFloat(prompt('Enter number A'));
const numbB = parseFloat(prompt('Enter number B'));
const numbC = parseFloat(prompt('Enter number C'));

function calcDiscr(numbA, numbB, numbC) {
    return (numbB * numbB - 4 * numbA * numbC);
    }
let discr = calcDiscr(numbA, numbB, numbC);

function solveEq(numbA, numbB, discr) {
        if (discr > 0) {
        const xFir = (( - numbB + Math.sqrt(discr)) / (numbA * 2));
        const xSec = (( - numbB - Math.sqrt(discr)) / (numbA * 2));
        return 'x1 = ' + xFir + ' x2 = ' + xSec;
        }
        else if (discr === 0) { 
        const xSing = (( - numbB + Math.sqrt(discr)) / (numbA * 2));
        return xSing;
        }
        else (discr < 0) ;
        return 'Equation has no solution';
        
    }

let solution = solveEq(numbA, numbB, discr);
alert(solution);





    
