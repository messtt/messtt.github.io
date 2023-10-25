function getRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function replaceCharacterAtIndex(inputString, index, newCharacter) {
    if (index < 0 || index >= inputString.length) {
        return inputString;
    }
    return inputString.substring(0, index) + newCharacter + inputString.substring(index + 1);
}

function animationTextRandom() {
    const words = ["Hello World", "Hello World", "Hello World", "Hello World"];
    const text = document.querySelector(".content_title_name");
    let currentWordIndex = 0;
    let count = 0;

    function updateText() {
        let currentWord = words[currentWordIndex];
        text.textContent = replaceCharacterAtIndex(text.textContent, Math.random() * (currentWord.length - 1), getRandomCharacter());
        text.textContent = replaceCharacterAtIndex(text.textContent, Math.random() * (currentWord.length - 1), getRandomCharacter());
        text.textContent = replaceCharacterAtIndex(text.textContent, Math.random() * (currentWord.length - 1), getRandomCharacter());
        count++;
        if (count > 5) {
            count = 0;
            currentWordIndex++;
            if (currentWordIndex >= words.length) {
                currentWordIndex = 0;
            }
        }
        setTimeout(updateText, 75); // Répéter l'animation avec un délai
    }


    updateText(); // Démarrer l'animation
}

export { animationTextRandom };