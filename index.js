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

    let randomQuestionsDiv = document.getElementById("randomQuestions");    
    let randomQuestionsData = Math.floor(Math.random() * randomQuestions.length);
    randomQuestionsDiv.textContent = randomQuestions[randomQuestionsData];

    const randomAnswers = [
        "Звучит неплохо",
        "Да, это определенно надо сделать",
        "Не думаю, что это хорошая идея",
        "Может, не сегодня?",
        "Компьютер говорит нет"
        ];

    let randomAnswersDiv = document.getElementById("randomAnswers");
    let randomAnswersData = Math.floor(Math.random() * randomAnswers.length);
    randomAnswersDiv.textContent = randomAnswers[randomAnswersData];

// homework to chapter 3 Arrays: compliment generator task 1 + task 2

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

const compliment = ["smart", "nice", "wice", "awesome", "shiny"];
const randomWord = pickRandomWord(compliment);
let randomComplimentSpan = document.getElementById("randomComplimentSpan");
randomComplimentSpan.textContent = randomWord;


const complimentLevelUp = ["You are kind and ", "You are beautiful and "];
const randomWordLevelUpSentence = pickRandomWord(complimentLevelUp);
let randomComplimentLevelUpSpan = document.getElementById("randomComplimentLevelUpSpan");
randomComplimentLevelUpSpan.textContent = randomWordLevelUpSentence; // Устанавливаем текст в элемент с идентификатором "randomComplimentLevelUpSpan"

//дразнилки

let offenceGenerator = function () {
    let randomBodyParts = ["глаз", "нос", "череп"];
    let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    let randomWords1 = ["муха", "выдра", "дубина", "мартышка", "крыса"];

    let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords1) + "!!!";
    return randomString;
};
console.log(offenceGenerator());
console.log(offenceGenerator());
console.log(offenceGenerator());

// join the numbers: [3, 2, 1] to the string "3 больше, чем 2 больше, чем 1"

const numbersArray = [3, 2, 1]
let numbersArrayString = numbersArray.join(" больше, чем ")
let numbersArrayDiv = document.getElementById("numbersArray");
numbersArrayDiv.textContent = numbersArrayString; 

// chapter 4 Objects
// owemoney counter

let owedMoney = {};
    owedMoney ["Jimmy"] = 7;
    owedMoney ["Anna"] = 8;
    owedMoney["Jimmy"]+=5
let objectTasksDiv = document.getElementById("objectTasks");
objectTasksDiv.textContent = owedMoney["Jimmy"];

// homework : score counter

let scoreObject1 = [
    {name: "Lars",
    age: 22,
    scoreNumber: 5},

    {name: "Timur",
    age: 6,
    scoreNumber: 20},

    {name: "Olya",
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
    scoreObject2["Bruno"] = 5;
    scoreObject2["Timur"] = 20;
    scoreObject2["Olya"] = 100;
    
scoreObject2["Timur"] += 20;
console.log(scoreObject2["Timur"]);
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

// sheeps counter loop - for loop (for: Часто используется, когда количество итераций известно заранее или когда нужно использовать счётчик для итераций) настройка + условие + приращение

for (let sheepNumber = 0; sheepNumber < 10; sheepNumber ++) {
    console.log("Number of sheeps: " + sheepNumber + "!");
}
console.log("You felt asleep");

// for loop to say hello

let timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Привет!");
}

// loop to name zoo animals

let zooAnimals = ["слон", "горилла", "носорог", "жираф"];
for (let i = 0; i < zooAnimals.length; i++) {
    console.log("В нашем зоопарке вы можете встретить" + zooAnimals[i] + "!");
}

// task 1 for chapter 6

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " прекрасное животное";
}
console.log(animals);

// task 2 for chapter 6

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let y = 0;
while (y < 6 ) {
    let randomAlfabetIndex = Math.floor(Math.random() * alphabet.length);
    let randomIndexNumber = alphabet[randomAlfabetIndex];
    console.log(randomIndexNumber);
    y++;
}

// task 3 hacker language

let input = "javascript is awesome";
let output = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
} // switch case may be used here too:  switch (input[i]) {case "a": output += "4"; break; case "e": output += "3"; break; case "i": output += "1"; break; case "o": output += "0"; break; default: output += input[i]; }
console.log(output);


    let name = prompt("What is your name?");
    console.log("Hello, " + name);

    let likesCats = confirm("Do you like cats?");
    if (likesCats) {
console.log("Ты классная кошка!");
} else {
console.log("No matter, You are nice anyway!");
}

    alert("JavaScript is awesome!"); //alert prompt config приостанавливают работу интерпретатора JS, console.log идет по строке дальше