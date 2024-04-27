//работа с массивами
const familyArray= ["Yura", "Timur", "Jarik"];
let outputDiv = document.getElementById("output");
outputDiv.textContent = familyArray[0];

const longestName = familyArray.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");

const allNames = familyArray.join(" ");

outputDiv.textContent = "Самое длинное имя: " + longestName;
outputDiv.textContent += "\nВсе имена: " + allNames;
outputDiv.textContent = familyArray.length;
outputDiv.textContent = familyArray.indexOf("Jarik");

const boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
outputDiv.textContent = boringAnimals.join(" - ");

//Метод пополнения и удаления массива .push() и .pop()
let landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Приют для животных");
landmarks.push("Мигающий фонарь");
landmarks.push("Пожарная станция");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");
outputDiv.textContent = landmarks.join(" , затем ");

while (landmarks.length > 1) {
    landmarks.pop();
    outputDiv.textContent = landmarks.join(" , затем ");
}
//метод математического рандома
let consoleDiv = document.getElementById("console");
consoleDiv.textContent = Math.floor(Math.random()*10); //округление до целого числа Math.floor

let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
let randomIndex = Math.floor(Math.random() * randomWords.length);
consoleDiv.textContent = randomWords.length;

//генератор случайных ответов на вопросы
const randomQuestions = [
    "Может, начать худеть?",
    "Нужно срочно найти работу",
    "Начинай готовиться к экзамену",
    "Посмотрим вместе фильм?",
    "Ты должен мне денег"
    ];

    const randomAnswers = [
        "Звучит неплохо",
        "Да, это определенно надо сделать",
        "Не думаю, что это хорошая идея",
        "Может, не сегодня?",
        "Компьютер говорит нет"
        ];

    let randomQuestionsDiv = document.getElementById("randomQuestions");
    let randomAnswersDiv = document.getElementById("randomAnswers");
    let randomQuestionsData = Math.floor(Math.random() * randomQuestions.length);
    let randomAnswersData = Math.floor(Math.random() * randomAnswers.length);
    randomQuestionsDiv.textContent = randomQuestions[randomQuestionsData];
    randomAnswersDiv.textContent = randomAnswers[randomAnswersData];

// homework to chapter 3 Arrays: compliment generator task 1 + task 2

const compliment = ["smart", "nice", "wice", "awesome", "shiny"];
const complimentLevelUp = ["You are not only", "but", "when I see you, I jump up high"];

const randomWordIndex = Math.floor(Math.random() * compliment.length);
const randomWord = compliment[randomWordIndex]; // Получаем рандомное слово из массива compliment
const firstTwoElements = complimentLevelUp.slice(0, 2); // Копируем первые два элемента массива complimentLevelUp
const combinedArray = firstTwoElements.concat(randomWord, complimentLevelUp.slice(2)); // Вставляем рандомное слово после первых двух элементов
const randomSentenceIndex = Math.floor(Math.random() * combinedArray.length); // Получаем рандомное предложение
const randomGeneratedSentence = combinedArray[randomSentenceIndex];
let randomComplimentLevelUpSpan = document.getElementById("randomComplimentLevelUpSpan");
randomComplimentLevelUpSpan.textContent = randomGeneratedSentence; // Устанавливаем текст в элемент с идентификатором "randomComplimentLevelUpSpan"

// join the numbers: [3, 2, 1] to the string "3 больше, чем 2 больше, чем 1"

const numbersArray = [3, 2, 1]
let numbersArrayString = numbersArray.join(" больше, чем ")
let numbersArraySpan = document.getElementById("numbersArraySpan");
numbersArraySpan.textContent = numbersArrayString; 

// chapter 4 Objects
// owemoney counter

let owedMoney = {};
    owedMoney ["Jimmy"] = 7;
    owedMoney ["Anna"] = 8;
    owedMoney["Jimmy"]+=5
let numbersArrayDiv = document.getElementById("objectTasks");
numbersArrayDiv.textContent = owedMoney["Jimmy"] + " " + JSON.stringify(owedMoney);

// homework : score counter

let scoreObject1 = [
    {name: Jack,
    age: 22,
    scoreNumber: 5},

    {name: Timur,
    age: 6,
    scoreNumber: 20},

    {name: Olya,
    age: 30,
    scoreNumber: 100},
];
const olyaObject = scoreObject1.find(item => item.name === "Olya");
if (olyaObject) {
    olyaObject.scoreNumber += 5;
}
console.log(scoreObject1);

//or

let scoreObject2 = {};
    scoreObject["Jack"] = 5;
    scoreObject["Timur"] = 20;
    scoreObject["Olya"] = 100;
    
    scoreObject2["Timur"] += 20;
    scoreObject2["Timur"];
console.log(scoreObject2);


// chapter 4 Objects - number 123 with the help of 1 string code

let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
    };

let number123 = myCrazyObject["some array"][2].number;
console.log(number123);

//chapter 6 Conditions and loops

let userName = "Nicolas";
console.log("Hi, " + userName);
if (userName > 6) {
    debugger
    console.log("You have too long name!");
} else {
        console.log("Your name is quite short!");
    }


//

let userName2 = "Olga";
if (userName2 === "Olga") {
    console.log("Hi, " + userName2);
} else if (userName2 === "Tatyana") {
    console.log("Hello, mum");
} else if (userName2 === "Vladimir") {
    console.log("Hi, dad!");
} else {
    console.log("Hi, stranger"); 
}

// sheeps counter loop - while loop (while: Используется, когда количество итераций неизвестно заранее или когда условие зависит от внешних факторов)

let sheepNumber = 0;
while (sheepNumber < 10) {
    console.log("Number of sheeps:" + sheepNumber + "!");
    sheepNumber++;
}
console.log("You felt asleep");

// sheeps counter loop - for loop (for: Часто используется, когда количество итераций известно заранее или когда нужно использовать счётчик для итераций)

for (let sheepNumber = 0; sheepNumber < 10; sheepNumber ++) {
    console.log("Number of sheeps: " + sheepNumber + "!");
}
console.log("You felt asleep");

