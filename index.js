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