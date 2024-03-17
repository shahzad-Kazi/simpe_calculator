import inquirer from "inquirer";

// asking question from users through inquirer

let answers = await inquirer.prompt([
    {message: "enter your first number", type: "number", name: "firstNumbr"},
    {message: "enter your second number", type: "number", name: "secondNumber"},
    {
            message: "select one operator to perform operations",
            type: "list",
            name: "operator",
            choices: ["addition", "substraction", "multiplication", "division"],
    }
]);
// conditional statements if - else
if (answers.operator === "addition")
{ console.log(answers.firstNumbr + answers.secondNumber)
}
else if (answers.operator === "substraction")
{ console.log(answers.firstNumbr - answers.secondNumber)
}
else if (answers.operator === "multiplication")
{ console.log(answers.firstNumbr * answers.secondNumber)
}
else if (answers.operator === "division")
{ console.log(answers.firstNumbr / answers.secondNumber)
}
else {console.log("invalid input")};