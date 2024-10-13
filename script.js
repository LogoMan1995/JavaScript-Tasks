// 1. Создай строку "Привет, мир!" и выведи количество символов в ней.
let greetingMessage = "Привет, мир!";
console.log(greetingMessage.length);

// 2. Создай строку "JavaScript" и выведи символ, находящийся на индексе 4.
let programmingLanguage = "JavaScript";
console.log(programmingLanguage.charAt(4)); 

// 3. Создай две строки "Hello" и "World" и объедини.
let greeting = "Hello";  
let entity = "World";
console.log(greeting.concat(entity));

// 4. В строке "Как дела?" проверь, содержит ли она слово "дела".
let inquiry = "Как дела?";
console.log(inquiry.includes("дела"));

// 5. Убедись, что строка "example.txt" заканчивается на ".txt".
let fileName = "example.txt";
console.log(fileName.endsWith(".txt"));

// 6. Убедись, что строка "Здравствуй, мир!" начинается с "Здравствуй".
let welcomeMessage = "Здравствуй, мир!";
console.log(welcomeMessage.startsWith("Здравствуй"));

// 7. Найди индекс слова "Java" в строке "JavaScript - это здорово!".
let jsPhrase = "JavaScript - это здорово!";
console.log(jsPhrase.indexOf("Java"));

// 8. Найди последний индекс буквы "o" в строке "Hello, World!".
let worldMessage = "Hello, World!";
console.log(worldMessage.lastIndexOf("o"));

// 9. Найди все гласные буквы в строке "Программирование".
let programmingTerm = "Программирование";
let vowels = programmingTerm.match(/[оаеи]/g);
console.log(vowels);

// 10. В строке "Привет, Привет!" найди все вхождения слова "Привет".
let helloString = "Привет, Привет!";
let allMatches = Array.from(helloString.matchAll(/Привет/g));
for (const match of allMatches) {
    console.log(match[0]);
}

// 11. Замените первое вхождение "плохо" на "добро" в строке "плохо пожаловать".
let welcomeStatement = "плохо пожаловать";
let improvedWelcome = welcomeStatement.replace("плохо", "добро");
console.log(improvedWelcome);

// 12. Замените все вхождения "Java" на "Python" в строке "Java и JavaScript".
let programmingText = "Java и JavaScript";
let updatedText = programmingText.replaceAll("Java", "Python");
console.log(updatedText);

// 13. Найдите индекс первого вхождения "мир" в строке "Привет, мир!".
let greetingString = "Привет, мир!";
let firstOccurrence = greetingString.search("мир");
console.log(firstOccurrence);

// 14. Извлеките первые 5 символов из строки "JavaScript".
let jsString = "JavaScript";
let firstFiveChars = jsString.slice(0, 5);
console.log(firstFiveChars);

// 15. Разделите строку "Я люблю JavaScript" на слова.
let loveStatement = "Я люблю JavaScript";
let wordsArray = loveStatement.split(" ");
console.log(wordsArray);

// 16. Извлеките подстроку из строки "Программирование" с индекса 0 по индекс 5.
let programmingWord = "Программирование";
let substring = programmingWord.substring(0, 6);
console.log(substring);

// 17. Преобразуйте строку "HELLO" в нижний регистр.
let uppercaseString = "HELLO";
let lowercaseString = uppercaseString.toLowerCase();
console.log(lowercaseString);

// 18. Преобразуйте строку "hello" в верхний регистр.
let lowercaseText = "hello";
let uppercaseText = lowercaseText.toUpperCase();
console.log(uppercaseText);

// 19. Убедитесь, что пробелы в строке " Hello, World! " удалены.
let spacedString = " Hello, World! ";
let trimmedString = spacedString.trim();
console.log(trimmedString);

// 20. Преобразуйте число 123 в строку с помощью valueOf().
let numberValue = 123;
let stringFromNumber = numberValue.toString();
console.log(typeof stringFromNumber);
