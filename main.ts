import inquirer from "inquirer"

let myBalance = 10000; //dollar
let myPin = 5577;

let PinAnswer = await inquirer . prompt(
    
    [
        {
         name: "Pin",
         message: "enter your pin",
         type: "number"
       }
    
    ]
);

if (PinAnswer.Pin === myPin) {

    console.log("correct pin code!!!")
}

let operationAnswer = await inquirer. prompt(
    [
        {
         name: "operation",
         message: "please select option", 
         type: "list",
         choices: ["withdraw", "check balance"] 

        }
    ]
);
console.log(operationAnswer);
if (operationAnswer.operation === "withdraw"){
     let amountAnswer = await inquirer.prompt(
        [
            {
            name: "amount",
            message: "enter your amount",
            number: "number"
            }
        ]
    );
    if(amountAnswer.amount <= myBalance && amountAnswer.amount >=500){
        myBalance -= amountAnswer.amount
        console.log("your remaining balance is:" + myBalance);
    }
    else{
        console.log("invalid amount");
    }
    
} else if (operationAnswer.operation === "checkbalance"){
    console.log("your balance is:" + myBalance);
} 

else {
    console.log("incorrect pin number");
}