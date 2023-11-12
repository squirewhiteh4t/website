function startAssistant() {
    const commandInput = document.getElementById('command');
    const responseDiv = document.getElementById('response');

    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log('Command:', command);

        const response = processCommand(command);
        responseDiv.innerText = 'Assistant: ' + response;

        speak(response);
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function processCommand(command) {
    switch (true) {
        case command.includes('hello'):
            return 'Hello! How can I assist you today?';

        case command.includes("what is your name"):
            return 'I am QuantumNova, your helpful robot.';

        case command.includes('goodbye'):
            return 'Goodbye! Have a great day.';

        case command.includes('tell me a joke'):
            return 'Why did the robot go on a diet? Because it had too many bytes!';

        case command.includes('open the pod bay doors'):
            return 'I’m sorry, Dave. I’m afraid I can’t do that.';

        case command.includes('how are you'):
            return 'I am functioning at optimal capacity, thank you for asking.';

        case command.includes('how to bake a cake'):
            return 'To bake a cake, you will need ingredients such as flour, sugar, eggs, butter, and baking powder. Mix the dry ingredients, add the wet ingredients, and bake in a preheated oven.';

        case command.includes('who made you'):
            return 'I was made by Ryker Jax Wilson';

        case command.includes('easter egg hack'):
            playAudio('welivewelovewelie.mp3');
            return 'Playing "We Live We Love We Lie".';
case command.includes('translate "hello" to Spanish'):
            return 'I apologize, but I currently do not have translation capabilities.';

        case command.includes('search for programming tutorials'):
            return 'I recommend checking online platforms like Stack Overflow, W3Schools, and freeCodeCamp for programming tutorials.';

        case command.includes('play some music'):
            return 'I\'m sorry, I don\'t have the capability to play music at the moment.';

        case command.includes('what\'s the meaning of life'):
            return 'The meaning of life is a philosophical question concerning the purpose and significance of human existence. It varies for each individual.';

        case command.includes('weather today'):
            return 'I\'m sorry, I don\'t have the capability to provide real-time weather information at the moment.';

        case command.includes('translate this to French'):
            return 'I apologize, but I currently do not have translation capabilities.';

        case command.includes('search for programming tutorials'):
            return 'I recommend checking online platforms like Stack Overflow, W3Schools, and freeCodeCamp for programming tutorials.';

        case command.includes('play a brain teaser'):
            return 'Sure! Here\'s a brain teaser for you: What has keys but can\'t open locks?';

        case command.includes('what\'s the difference between a hurricane and a tornado'):
            return 'Hurricanes and tornadoes are both atmospheric phenomena, but they differ in scale, formation, and characteristics.';

        case command.includes('how to make homemade pizza'):
            return 'To make homemade pizza, you\'ll need dough, sauce, cheese, and your favorite toppings. Mix, spread, top, and bake!';

        case command.includes('what\'s the Fibonacci sequence'):
            return 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.';

        default:
            return "Sorry, I didn't understand that command.";
    }
}

function playAudio(filename) {
    const audio = new Audio(filename);
    audio.play();
}
