const generator = require('generate-password');

function generateAnyPassword() {
    const password = generator.generate({
        length: 9,
        numbers: true,
        symbols: false,
        uppercase: true,
        excludeSimilarCharacters: false,
    });
    
    return password;
}

const password = generateAnyPassword();
console.log('Generated password:', password);