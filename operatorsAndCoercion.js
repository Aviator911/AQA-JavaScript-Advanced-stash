// 1. отримання прав true \ false
let age = 18.5;
let canGetLicense = age >= 18;
console.log(`Чи може отримати права? ${canGetLicense}`);

// 2. Вітання Маші і Петі
let person1 = "Petia";
let person2 = "Masha";
let greeting = "Привіт, " + person1 + " і " + person2 + "!";
console.log(greeting);

// 3. Обробка числа str
let strNumber = "5.489";

let num = parseFloat(strNumber); // Приведення до числа
let isNotNaN = !isNaN(num); // Перевірка, чи не є NaN
let roundedNum = num.toFixed(1); // Округлення до 1 знаку після коми
let strResult = roundedNum.toString(); // Повернення до рядка

console.log(`Число після перетворення: ${num}`);
console.log(`Чи не є NaN: ${isNotNaN}`);
console.log(`Число після округлення: ${roundedNum}`);
console.log(`Рядок після конвертації: ${strResult}`);

// 4. Рядок операції
let text = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";

let textLength = text.length; // Довжина рядка
let replacedText = text.replace(/Wikipedia/, "Shmekipedia"); // Заміна "Wikipedia"
let containsWorld = text.includes("world"); // Перевірка, чи містить "world"
let endsWithFoundation = text.endsWith("Foundation."); // Перевірка закінчення на "Foundation"

console.log(`Довжина рядка: ${textLength}`);
console.log(`Рядок після заміни: ${replacedText}`);
console.log(`Чи містить 'world': ${containsWorld}`);
console.log(`Чи закінчується на 'Foundation': ${endsWithFoundation}`);

// 5. Обчислення площі та об'єму
let radius = 5;
let length = 10;
let width = 8;
let height = 12;

let circleArea = Math.PI * Math.pow(radius, 2);
let rectangleArea = length * width;
let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;

// Округлення до 2 знаків після коми
circleArea = circleArea.toFixed(2);
rectangleArea = rectangleArea.toFixed(2);
cylinderVolume = cylinderVolume.toFixed(2);

console.log(`Площа кола: ${circleArea}`);
console.log(`Площа прямокутника: ${rectangleArea}`);
console.log(`Об'єм циліндра: ${cylinderVolume}`);