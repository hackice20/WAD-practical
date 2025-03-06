function reverseTokens(inputText) {

    const tokens = inputText.split(' ');
    
    const reversedTokens = tokens.reverse();

    const reversedText = reversedTokens.join(' ');
    
    console.log('Original text:', inputText);
    console.log('Tokens:', tokens);
    console.log('Reversed tokens:', reversedText);
    
    return reversedText;
}

function processInput() {
    const inputElement = document.getElementById('textInput');
    const resultElement = document.getElementById('result');
    
    const inputText = inputElement.value.trim();
    
    if (inputText === '') {
        resultElement.textContent = 'Please enter some text';
        return;
    }
    
    const reversed = reverseTokens(inputText);
    resultElement.textContent = reversed;
}
const sampleText = "The quick brown fox";
reverseTokens(sampleText);