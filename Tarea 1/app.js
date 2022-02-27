let mateBasica = require('./mate');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let operators = () => {
    readline.question('Select the operation ( + - * / %): ', 
    function (selection) {
        readline.question('Select the first number: ',
        function(a){
            readline.question('Select the second number: ',
            function(b){
                switch(selection){
                    case '+':
                        console.log(`${a} + ${b}: ${mateBasica.suma(parseFloat(a),parseFloat(b))} \n`);
                        break;
                    case '-':
                        console.log(`${a} - ${b}: ${mateBasica.resta(parseFloat(a),parseFloat(b))} \n`);
                        break;
                    case '*':
                        console.log(`${a} * ${b}: ${mateBasica.producto(parseFloat(a),parseFloat(b))} \n`);
                        break;
                    case '/':
                        console.log(`${a} / ${b}: ${mateBasica.division(parseFloat(a),parseFloat(b))} \n`);
                        break;
                    case '%':
                        console.log(`${a} % ${b}: ${mateBasica.modulo(parseFloat(a),parseFloat(b))} \n`);
                        break;
                    default:
                        console.log("Invalid option");
                        break;
                }
                readline.close()
            })
        }) 
    })
};
operators();