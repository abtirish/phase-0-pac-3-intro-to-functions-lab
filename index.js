function shout(string) {
    return "hello".toUpperCase();
}

function whisper(string) {
    return "HELLO".toLowerCase();
}

function logShout(string) {
    console.log('HELLO');
}

function logWhisper(string) {
    console.log('hello');
}




function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return 'I can\'t hear you!';
    } else if (string.toUpperCase() === string) {
        return 'YES INDEED!';
        } else if (string = "Let\'s have dinner together!") {
            return 'I would love to!';
        }
    }

    console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));


