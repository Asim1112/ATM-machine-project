#! /usr/bin/env node

 import inquirer from "inquirer";

 let myBalance = 10000;                                         // Dollar
 let myPin = 1234;

 let pinAnswer = await inquirer.prompt                          // QUESTION 1
 (
    [
        {
    
    name: "pin",
    message: "enter your pin:",
    type: "number"
    }
        ]
            )
 if (pinAnswer.pin === myPin) {
        console.log("correct pin code")

 let actionAns = await inquirer.prompt (                          // QUESTION 2
    [
        {

    name: "action",
    message: "what do you want to do?",
    type: "list",
    choices: ["check balance", "withdraw cash", "fast cash"]

         }
    ]
 );
   
 console.log(actionAns);
 
 if(actionAns.action === "withdraw cash") {
        let amountAns = await inquirer.prompt                   // QUESTION 3
 (
    [
        {
    
    name: "amount",
    message: "enter your amount",
    type: "number"
           
        
        }
    ]
 )
 if(amountAns.amount > myBalance){
        console.log("you have insufficient balance")
 } else if(myBalance -= amountAns.amount) {
      console.log(`your remaining balance is: ${myBalance}`) }    
 } 
 else if (actionAns.action === "check balance") {
    console.log(`your balance is: ${myBalance}`)

 }
 else if(actionAns.action === "fast cash"){
    let fastCash = await inquirer.prompt
    (
        [
            {

     name: "ask_cash",
     message: "Please select your desired amount",
     type: "list",
     choices: ["1000", "2000", "5000", "10000"]
                
            }
        ]
    )
     myBalance -= fastCash.ask_cash;
     console.log(`your remaining balance is: ${myBalance}`);
   
 }
 }

 else {
        console.log("sorry! incorrect pin number");
 }