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