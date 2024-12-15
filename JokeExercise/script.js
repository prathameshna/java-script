let MyJoke = [
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "How do you generate a random string?",
        "delivery": "Put a Windows user in front of Vim and tell them to exit.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 127,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why are Assembly programmers always soaking wet?",
        "delivery": "They work below C-level.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 264,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "why do python programmers wear glasses?",
        "delivery": "Because they can't C.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 294,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why did the Python programmer not respond to the foreign mails he got?",
        "delivery": "Because his interpreter was busy collecting garbage.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 15,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 4,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "ASCII silly question, get a silly ANSI.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 25,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 55,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 24,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why did the web developer walk out of a resturant in disgust?",
        "delivery": "The seating was laid out in tables.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 6,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "How did you make your friend rage?",
        "delivery": "I implemented a greek question mark in his JavaScript code.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 147,
        "safe": true,
        "lang": "en"
    }
]

let index = Math.floor(Math.random() * (MyJoke.length - 1))
console.log(index);
joke.innerHTML = MyJoke[index].joke
