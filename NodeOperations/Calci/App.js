// app.js
const calculator = require('./Calci');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser() {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            rl.question("Enter operation (+, -, *, /): ", (operation) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                
                switch (operation) {
                    case '+':
                        result = calculator.add(a, b);
                        break;
                    case '-':
                        result = calculator.subtract(a, b);
                        break;
                    case '*':
                        result = calculator.multiply(a, b);
                        break;
                    case '/':
                        result = calculator.divide(a, b);
                        break;
                    default:
                        result = "Invalid operation";
                        break;
                }
                
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

askUser();
