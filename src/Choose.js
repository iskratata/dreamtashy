import React, {useState} from 'react';
import Card from './Card';
import StoryDisplay from './StoryDisplay';
import FirstScene from './FirstScene';

export default function Choose(props) {
    const [name, setName] = useState(props.name);
    const [tasha, setTasha] = useState('start')
    const [display, setDisplay] = useState('start');
    const [text, setText] = useState({       
        'head': 'Hello ' + name,
        'name': '',
        'text': 'Please click on one of the tashas to the right to learn more about them and then choose the one you would like to romance.',
        'button': 'hidden',
        'likes': {
            'one': '',
            'two': '',
            'three': ''
        },
        'dislikes': {
            'one': '',
            'two': '',
            'three': ''
        }
    });
    const [chosenPath, setChosenPath] = useState('');

    //array that shows image of each tasha and possibly name?
    const tashaList = [
        {
            'id': 'kpop',
            'bg': 'url("/images/tash1.jpg")'
        },
        {
            'id': 'plant',
            'bg': 'url("/images/tash2.jpg")'
        },
        {
            'id': 'fashion',
            'bg': 'url("/images/tash3.jpg")'
        },
        {
            'id': 'cat',
            'bg': 'url("/images/tash4.jpg")'
        },
    ];

    //finished
    const kpop = [
        {
            "id": 'A1',
            "display": "story",
            "tcharacter": " ",
            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Oooh this looks like a nice record. Let me just grab it real quick."
            }
        },
        {
            "id": 'A2',
            "display": "story",
            "tcharacter": "/images/tashas/kpop.png",
            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": 'jimins_sexy_nostril_0508',
              "words": "Oops sorry, looks like we reached for the same record and of course it's the last one left."
            }
        },
        {
            "id": 'A3',
            "display": "story",
            "tcharacter": "/images/tashas/kpop.png",
            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Here, you take it, just give me your name and phone number. ;)"
            }
        },
        {
            "id": 'AT1',
            "display": "tashtip",
            "arrow": "yes",
            "num": "133",
            "tip": "you can't control what happens around you, but you can control how you react",
            "nextpart" : [
                {
                    "id": 'A4',
                    "display": "story",
                    "tcharacter": "/images/tashas/kpop.png",
                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                    "username": 'jimins_sexy_nostril_0508',
                    "words": "I'm not gonna give you my name or number. Stranger danger, you know. But I can give you my twitter fan acount handle: jimins_sexy_nostril_0508. "
                    }
                },
                {
                    "id": 'A5',
                    "display": "options",
                    "tcharacter": "/images/tashas/kpop.png",
                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                    "arrow": "yes",

                    "option1": {
                        "text": "No way, I already follow you. You're one of my favourite accounts!!",
                        "next": [
                            {
                                "id": 'A6',
                                "display": "story",
                                "tcharacter": "/images/tashas/kpop.png",
                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'jimins_sexy_nostril_0508',
                                    "words": "Always nice to meet a fan."
                                }
                            },
                            {
                                "id": 'A7',
                                "display": "story",
                                "tcharacter": "/images/tashas/kpop.png",
                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "Oh my god what are the odds? We really have so much in common!"
                                }
                            },
                            {
                                "id": 'AT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "44",
                                "tip": "if you're feeling depressed, just think positive thoughts :)",
                                "nextpart" : [
                                    {
                                        "id": 'A8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/kpop.png",
                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'jimins_sexy_nostril_0508',
                                            "words": "I mean, I barely know you and you only know my online persona. It's a little weird that you already know things about me."
                                        }    
                                    },
                                    {
                                        "id": 'A9',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/kpop.png",
                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Sorry, can we start over? I do genuinely want to get to know you. I just think a lot of the content you put out is cool.",
                                            "next": [
                                                {
                                                    "id": 'A10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "I am one of the biggest fan accounts out there, so I can't really be surprised you followed me. At least I know you and I like listening to the same music"
                                                    }
                                                },
                                                {
                                                    "id": 'A11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Let me take you out. I feel like our souls are meant to have met. It was fate that we both grabbed the same record. Music really brought us together"
                                                    }
                                                },
                                                {
                                                    "id": 'A12',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "Agreed. I must admit that when your fingers brushed against mine, I almost passed out from the rush of emotions that hit me."
                                                    }
                                                },
                                                {
                                                    "id": 'A13',
                                                    "display": "options",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "option1": {
                                                        "text": "You buy them the CD and some merch and take them to a karaoke studio to sing to your hearts content",
                                                        "next": [
                                                            {
                                                                "id": 'A14',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": name,
                                                                    "words": "Let's sing a romantic duet while we look each other in the eyes"
                                                                }
                                                            },
                                                            {
                                                                "id": 'A15',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'jimins_sexy_nostril_0508',
                                                                    "words": "Yes. I think I'm falling for you. Thank God I met you today"
                                                                }
                                                            },
                                                            {
                                                                "id": 'A16',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "text1": "That was so cute " + name + "!",
                                                                "text2": "You two are perfect together!",
                                                                "text3": "You bonded over your favourite songs and then found out that you had a lot more in common and we're actually very compatible as a couple. The CD you both wanted to get that day has been framed and hangs on your living room door to commemorate the first time you two met."
                                                            }
                                                        ]
                                                    },
                                                    "option2": {
                                                        "text": "You take them to a dark corner of the record store so that you can discuss your childhood traumas and analyse how it has influenced your music choice as an adult",
                                                        "next": [
                                                            {
                                                                "id": 'A14',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": name,
                                                                    "words": "Wow who knew that one traumatising incident in your life made you connect so hard with Blood, Sweat, and Tears."
                                                                }
                                                            },
                                                            {
                                                                "id": 'A15',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'jimins_sexy_nostril_0508',
                                                                    "words": "I feel like I really understand you now that I know that Butter (feat. Megan Thee Stallion) resonated with you so hard because your childhood was not smooth like butter"
                                                                }
                                                            },
                                                            {
                                                                "id": 'A16',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "text1": "What a way to bond, " + name + "!",
                                                                "text2": "I think you both need therapy!",
                                                                "text3": "It's very sweet that you two could feel comfortable enough from the very beginning to trust each other with these secrets. Your future developed very quickly after that with the two of you moving in together after a week and then eloping the week after."
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }, 
                                        "option2": {
                                            "text": "Well, you know I'm hot and have good taste in who I follow on social media",
                                            "next": [
                                                {
                                                    "id": 'A10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "That's true, you are hot. Hot enough that I'm willing to risk you being a little crazy"
                                                    }
                                                },
                                                {
                                                    "id": 'A11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "So will you give me a chance and go out with me?"
                                                    }
                                                },
                                                {
                                                    "id": 'A12',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "Sure, I'm free now. What do you wanna do??"
                                                    }
                                                },
                                                {
                                                    "id": 'A13',
                                                    "display": "options",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "option1": {
                                                        "text": "Why don't you come over to my place ;)",
                                                        "next": [
                                                            {
                                                                "id": 'A14',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'jimins_sexy_nostril_0508',
                                                                    "words": "Okay, sure, I'm ready to work up a sweat ;)."
                                                                }
                                                            },
                                                            {
                                                                "id": 'A15',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": name,
                                                                    "words": "Good because once we get to my home, we're gonna be making tik toks of kpop dance covers"
                                                                }
                                                            },
                                                            {
                                                                "id": 'A16',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "text1": "How fun, " + name + "!",
                                                                "text2": "You two really do make a hot couple!",
                                                                "text3": "So hot that your tik toks went viral and you two cemented yourselves as a power couple. Even though the two of you are very dramatic, your relationship is drama-free"
                                                            }
                                                        ]
                                                    },
                                                    "option2": {
                                                        "text": "Here come follow me into this dark alley and eat the fruit snacks I keep in my pocket",
                                                        "next": [
                                                            {
                                                                "id": 'A14',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'jimins_sexy_nostril_0508',
                                                                    "words": "Sure, why not? Sounds like it could be fun."
                                                                }
                                                            },
                                                            {
                                                                "id": 'A15',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": name,
                                                                    "words": "Hehehehe..."
                                                                }
                                                            },
                                                            {
                                                                "id": 'A16',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                "text1": "You're weird " + name + ".",
                                                                "text2": "I don't know why anyone would agree to go anywhere with you!",
                                                                "text3": "Turns out, the alley had one of those cute swinging benches and you guys cuddled and watch videos on your phone and ate snacks. Although your vibes are absolutely vile, they still ended up falling in love with you."
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }, 
                    "option2": {
                        "text": "Oh you're a BTS fan? They're pretty cool.",
                        "next": [
                            {
                                "id": 'A6',
                                "display": "story",
                                "tcharacter": "/images/tashas/kpop.png",
                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'jimins_sexy_nostril_0508',
                                    "words": "Yeah, I love everything about them. They're so incredibly talented and spread meaningful messages through their music."
                                }
                            },
                            {
                                "id": 'A7',
                                "display": "story",
                                "tcharacter": "/images/tashas/kpop.png",
                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "Honestly, I've only heard a few of their songs."
                                }
                            },
                            {
                                "id": 'AT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "62",
                                "tip": "to attract a mate, have all your teeth filed into sharp fangs to show potential partners that you can protect them with your weaponized mouth",
                                "nextpart" : [
                                    {
                                        "id": 'A8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/kpop.png",
                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'jimins_sexy_nostril_0508',
                                            "words": "Is that why you were buying their CD? To listen to more of their discography?"
                                        }
                                    },
                                    {
                                        "id": 'AO9',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/kpop.png",
                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Tell them that, yes, you'd like to learn more about them",
                                            "next": [
                                                {
                                                    "id": 'A10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "I could go on about them for hours!! Where do I even start?"
                                                    }
                                                },
                                                {
                                                    "id": 'A11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Tell me about all the members, I only know a few of them."
                                                    }
                                                },
                                                {
                                                    "id": 'AT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "95",
                                                    "tip": "you will one day have to pay the consequences for all the sins you have committed",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'A12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/kpop.png",
                                                            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'jimins_sexy_nostril_0508',
                                                                "words": "So there's seven of them, and I love them all."
                                                            }
                                                        },
                                                        {
                                                            "id": 'A13',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/kpop.png",
                                                            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Hey, why don't we move this conversation to the cafe next door. I wanna hear about all your interests and everything about you really.",
                                                                "next": [
                                                                    {
                                                                        "id": 'A14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'jimins_sexy_nostril_0508',
                                                                            "words": "You know what? Let's do it, you give off good vibes."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "If I'm being honest, I actually felt a spark when our hands first touch. From that moment, I knew you would be an important part of my life. You have granted me the greatest honour by agreeing to this date"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A16',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'jimins_sexy_nostril_0508',
                                                                            "words": "Wow, I thought it was just me!! I think I'm already falling in love with you"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A17',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "text1": "Good for you, " + name + "!",
                                                                        "text2": "Looks like you were successful in romancing jimins_sexy_nostril_0508!",
                                                                        "text3": "You two ended up having a very successful and healthy relationship where you both were appreciative of each others interest and hobbies and supported each other. You even found out that their real name is Tasha."
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "You know, I actually know one of the members, I could introduce you if you want.",
                                                                "next": [
                                                                    {
                                                                        "id": 'A14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'jimins_sexy_nostril_0508',
                                                                            "words": "Are you joking? I would love to meet them!! That would be amazing!!"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Yeah, would you wanna be my date to their concert tomorrow?? Then afterwards we can meet them and hangout with them."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A16',
                                                                        "display": "tashtip",
                                                                        "arrow": "yes",
                                                                        "num": "10",
                                                                        "tip": "when you hear sounds in your empty apartment, that is me crawling through your walls",
                                                                        "nextpart" : [
                                                                            {
                                                                                "id": 'A16',
                                                                                "display": "story",
                                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                                "arrow": "yes",
                                                                                "dialogue" : {
                                                                                    "username": 'jimins_sexy_nostril_0508',
                                                                                    "words": "Hmmm... I don't really know you but I guess we could talk more while waiting in the line for the concert. And getting to meet the mmebers would be a plus."
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 'A17',
                                                                                "display": "end",
                                                                                "tcharacter": "/images/tashas/kpop.png",
                                                                                "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                                "text1": "You're such a dumbass, " + name + "!",
                                                                                "text2": "You really thought you couldl compete with international superstars!",
                                                                                "text3": "So, you two went to the concert and met BTS and they all feel in love with jimins_sexy_nostril_0508 (real name Tasha) on first site. They are now all in a very loving polyamorous relationship, while you have to live with the fact that you were the one who introduced the person you were in love with to their lovers. How sad."
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        "option2": {
                                            "text": "Play it cool and say that you wanted to hate-listen to their album cause you think they're overrated",
                                            "next": [
                                                {
                                                    "id": 'A10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'jimins_sexy_nostril_0508',
                                                        "words": "What an odd thing to do with your time. Why do you think they don't deserve their success??"
                                                    }
                                                },
                                                {
                                                    "id": 'A11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/kpop.png",
                                                    "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "I mean honestly there are other artists that are more talented than them. Anyone with ears would know that."
                                                    }
                                                },
                                                {
                                                    "id": 'AT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "100",
                                                    "tip": "potential life mates will love it if you chew up all their food, digest it, and regurgitate it like a mother bird. this shows that you are capable of taking care of them",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'A12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/kpop.png",
                                                            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'jimins_sexy_nostril_0508',
                                                                "words": "What??"
                                                            }
                                                        },
                                                        {
                                                            "id": ' ',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/kpop.png",
                                                            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Your negging flirting technique didn't work but you're in too deep to turn back now",
                                                                "next": [
                                                                    {
                                                                        "id": 'A13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Yeah, honestly, you don't really have a good taste in music if you listen to them. I could teach you how to appreciate real music."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'jimins_sexy_nostril_0508',
                                                                            "words": "Ew."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A15',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "text1": "You're such a dick" + name + "!",
                                                                        "text2": "Why are you this way?",
                                                                        "text3": " Why did you feel the need to insult something they enjoy? Please go to therapy and learn to love yourself. Not only did you fail in your romance attempts, you're not successful in many future attempts because you're so unlikeable."
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "Clearly, this isn't working, so you try to act like you're an altruistic person concerned with people's music careers",
                                                                "next": [
                                                                    {
                                                                        "id": 'A13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "You know, I just really think that they're taking a lot of opportunities from smaller artists. And they don't even help promote other bands. I hate it when people don't use their success to empower others"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'jimins_sexy_nostril_0508',
                                                                            "words": "You're stupid and full of shit. Clearly you don't know anything. Get out of my sight!"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Please no!! It was all a lie, I'm actually a big fan!! I'm just trying to flirt with you!!"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "You're such a loser " + name + ". No one likes dishonesty and manipulation."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'A16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "text1": "How pathetic" + name + "!",
                                                                        "text2": "You're such a mess!",
                                                                        "text3": "You've got some issues. Nobody likes someone who doesn't act like themselves. Anyway, you bump into jimins_sexy_nostril_0508 in public afterwards and they just give you a pitying look. It's a little pathetic tbh. Why did you feel the need to insult something they enjoy?"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ];

    //finished
    const plant = [
        {
            "id": 'B1',
            "display": "story",
            "tcharacter": "",
            "bg": 'url("/images/backgrounds/plantbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Hello... is anyone out there?... methinks I've lost my way..."
            }
        },
        {
            "id": 'B2',
            "display": "story",
            "tcharacter": "/images/tashas/plant.png",
            "bg": 'url("/images/backgrounds/plantbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": "Tahsiana",
              "words": "Good evening weary traveller, what brings you to my domain?"
            }
        },
        {
            "id": 'B3',
            "display": "story",
            "tcharacter": "/images/tashas/plant.png",
            "bg": 'url("/images/backgrounds/plantbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Your domain? I apologize for trespassing. I was just trying to take a nice walk in the park, but it seems I got lost and lost a few hours."
            }
        },
        {
            "id": 'BT1',
            "display": "tashtip",
            "arrow": "yes",
            "num": "61",
            "tip": "everyone should get therapy",
            "nextpart" : [
                {
                    "id": 'B4',
                    "display": "story",
                    "tcharacter": "/images/tashas/plant.png",
                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                      "username": 'Tahsiana',
                      "words": "Don't worry, let me help you out. Just come step into this ring of mushrooms in this ominous clearing and I'll help you out."
                    }
                },
                {
                    "id": 'BO4',
                    "display": "options",
                    "tcharacter": "/images/tashas/plant.png",
                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                    "arrow": "yes",
                    "option1": {
                        "text": "OH YEAH, absolutely I will, no hesitation. What could possibly go wrong?",
                        "next": [
                            {
                                "id": 'B5',
                                "display": "story",
                                "tcharacter": "/images/tashas/plant.png",
                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "Wow now that I'm in here I feel so much better, my mind is so much clearer! And now that I get a good look at you, I see you're very beautiful."
                                }
                            },
                            {
                                "id": 'B6',
                                "display": "story",
                                "tcharacter": "/images/tashas/plant.png",
                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Tahsiana',
                                    "words": "I am literally a God."
                                }
                            },
                            {
                                "id": 'BT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "24",
                                "tip": "to brew your own kombucha at home, simply google the instructions and buy all the materials",
                                "nextpart" : [
                                    {
                                        "id": 'B7',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": name,
                                            "words": "Woooooooow... that's soooooooooooooo sexy. So like... are these mushrooms poisonous?? Like, if I were to eat one and go into cardiac arrest, would you give me CPR??"
                                        }
                                    },
                                    {
                                        "id": 'B8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Tahsiana',
                                            "words": "I am a God and the guardian of these lands. I know every speck of dirt and plant and which seek to harm humans."
                                        }
                                    },
                                    {
                                        "id": 'BO8',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "You don't even stop to think. You immediately dive into the ground head-first and start shoving mushrooms into your mouth",
                                            "next": [
                                                {
                                                    "id": 'B9',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "I... can't... breathe... *choking noises* PLEASE save me!!!"
                                                    }
                                                },
                                                {
                                                    "id": 'B10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tahsiana',
                                                        "words": "I am a God. Your life means nothing to me."
                                                    }
                                                },
                                                {//remove bg 
                                                    "id": 'B11',
                                                    "display": "end",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "text1": "YIKES " + name + "!",
                                                    "text2": "You just died!",
                                                    "text3": "Now you don't have a chance of romancing ANYBODY. What's it like dying without ever feeling loved? What a sad life you have lived. You met a diety and even they couldn't be convinced that your life was worth anything."
                                                }
                                            ]
                                        },
                                        "option2": {
                                            "text": "Yeah better not eat anything. Gotta find another way to seduce this impressive being",
                                            "next": [
                                                {
                                                    "id": 'B9',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "So... where do you live?? You should totally take me there and give me a house tour. I'm so weak and fragile. A nice soft bed to rest on with someone taking care of me would be lovely. *You flutter your eyelashes*"
                                                    }
                                                },
                                                {
                                                    "id": 'B10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tahsiana',
                                                        "words": "If you were to step into my dwelling, the energy would be too powerful for your pathetic body to handle and you would instantly implode."
                                                    }
                                                },
                                                { 
                                                    "id": 'BT2',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "56",
                                                    "tip": "if you find a little bit of mold on your food, don't worry about it! if you don't die, your immune system will get stronger maybe",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'B11',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": name,
                                                                "words": "Hmmmmm... I guess I'm not being clear with my intentions"
                                                            }
                                                        },
                                                        {
                                                            "id": 'BO11',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Launch your feeble body at them and latch on to their thigh",
                                                                "next": [
                                                                    {
                                                                        "id": 'B12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tahsiana',
                                                                            "words": "Disgusting."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'B13',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "text1": "How embarassing " + name + "!",
                                                                        "text2": "You were instantly incinerated by Tahsiana's powers!",
                                                                        "text3": "Okay can I be honest for a second? You REALLY thought YOU could seduce a whole GOD?? Maybe if you had gone to therapy and dealth with your delusions, you wouldn't be in this position."
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "Be direct and straight up tell them that you are very attracted to them and see a future together",
                                                                "next": [
                                                                    {
                                                                        "id": 'B12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tahsiana',
                                                                            "words": "I do not know how many times I have to say that I am literally a God. You are very tiresome so I will let you leave. Never return."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'B13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Well, I did my best. I'll never forget you. Farewell, my love"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'BT3',
                                                                        "display": "tashtip",
                                                                        "arrow": "yes",
                                                                        "num": "8",
                                                                        "tip": "don't cry because its over, smile because it happened :)",
                                                                        "nextpart" : [
                                                                            {
                                                                                "id": 'B14',
                                                                                "display": "story",
                                                                                "tcharacter": "/images/tashas/plant.png",
                                                                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                                "arrow": "yes",
                                                                                "dialogue" : {
                                                                                    "username": 'Tahsiana',
                                                                                    "words": "What a revolting creature that was. I'm going back into a separate dimension for a few centuries to recover from this interaction."
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 'B15',
                                                                                "display": "end",
                                                                                "tcharacter": "/images/tashas/plant.png",
                                                                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                                "text1": "Sorry " + name + "!",
                                                                                "text2": "You were rejected, but at least you left with your dignity intact!",
                                                                                "text3": "Sucks though, cause now you'll never meet anyone better than Tahsiana and will never find love. How sad."
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ] 
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }                   
                        ]
                    },
                    "option2": {
                        "text": "I may be disoriented, but I'm not stupid. You can't trick me fiend!!",
                        "next": [
                            {
                                "id": 'Bb5',
                                "display": "story",
                                "tcharacter": "/images/tashas/plant.png",
                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "I've heard of forest creatures like you, luring people into your lairs and trying to trap them there. But I am more clever than you thought, you can't fool me!!"
                                }
                            },
                            {
                                "id": 'Bb6',
                                "display": "story",
                                "tcharacter": "/images/tashas/plant.png",
                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Tahsiana',
                                    "words": "While you were busy with your useless tirade, I caused mushrooms to sprout in a perfect circle around you. So it seems, you are not the clever human you thought you were. Silly fool."
                                }
                            },
                            {
                                "id": 'BT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "127",
                                "tip": "живи, смейся, люби",
                                "nextpart" : [
                                    {
                                        "id": 'Bb7',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": name,
                                            "words": "You may have defeated me in this, but I will defeat you eventually. Tell me, what must I do to be set free?"
                                        }
                                    },
                                    {
                                        "id": 'Bb8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Tahsiana',
                                            "words": "To be released from my clutches, you must give me the correct answer when put forth a riddle. Here it is: I have nineteen feet, can cook, and only purchase ethical items. What am I?"
                                        }
                                    },
                                    {
                                        "id": 'BO8',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/plant.png",
                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Simple. The answer is: four rats stacked on top of each other, one having lost a leg in an accident, in a vegan leather tenchcoat",
                                            "next": [
                                                {
                                                    "id": 'Bb8',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tahsiana',
                                                        "words": "You are correct. As a God, I must acknowledge that you have managed to best me. However, I did not say that was the only riddle I would be asking you."
                                                    }
                                                },
                                                {
                                                    "id": 'Bb9',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Oh God!! Why is this happening to me?"
                                                    }
                                                },
                                                {
                                                    "id": 'Bb10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tahsiana',
                                                        "words": "God can't help you now. If you agree to my terms then answer the following riddle: I am short and cause revulsion in all those who look at me, like an onion, I have many layers, and I grow at un unbearably slow rate. What am I?"
                                                    }
                                                },
                                                {
                                                    "id": 'BT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "420",
                                                    "tip": "Blaze it",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'Bb11',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": name,
                                                                "words": "Fine. I agree to your terms."
                                                            }
                                                        },
                                                        {
                                                            "id": 'B11',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "These riddles are really way too easy. A little rotting bonsai tree.",
                                                                "next": [
                                                                    {
                                                                        "id": 'Bb12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tahsiana',
                                                                            "words": "Incorrect. Since I did not state what punishment you would receive should you fail when we agreed on this arrangment, I will decide now. You will have to serve me for the rest of your days tending to my gardens."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'Bb12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Please! Have mercy! I have a colony of cats that depend on me for survival! I need to get back to them. You're a plant God! You don't even need someone to help you take care of your plants! You can just use your powers for that!"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'Bb13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tahsiana',
                                                                            "words": "That's what makes this punishment so devious. Hehehehhe...."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'B14',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "text1": "Well, that's not the worst ending, " + name + "!",
                                                                        "text2": "Things could be worse!",
                                                                        "text3": "Tahsiana allowed you to bring all your cats to their home where you actually lives a pretty peaceful and relaxing life. Sadly, you never saw anyone again and despite many seduction attempts, nothing ever happened between the two of you."
                                                                    }
                                                                ]
                                                            },
                                                            "option2": {
                                                                "text": "Easy. The answer is: iskra's thumbnails that she can't seem to stop biting that dumb no-self-control-having bitch",
                                                                "next": [
                                                                    {
                                                                        "id": 'Bb12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tahsiana',
                                                                            "words": "Again you have found the correct answer to my riddle! "
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'Bb12',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Thank goodness! NOW will you finally let me leave??"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'BT4',
                                                                        "display": "tashtip",
                                                                        "arrow": "yes",
                                                                        "num": "133",
                                                                        "tip": "you can't control what happens around you, but you can control how you react",
                                                                        "nextpart" : [
                                                                            {
                                                                                "id": 'Bb13',
                                                                                "display": "story",
                                                                                "tcharacter": "/images/tashas/plant.png",
                                                                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                                "arrow": "yes",
                                                                                "dialogue" : {
                                                                                    "username": 'Tahsiana',
                                                                                    "words": "You really thought I'd let you off that easy? I have another riddle for you."
                                                                                }
                                                                            }, 
                                                                            {
                                                                                "id": 'Bb14',
                                                                                "display": "story",
                                                                                "tcharacter": "/images/tashas/plant.png",
                                                                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                                "arrow": "yes",
                                                                                "dialogue" : {
                                                                                    "username": name,
                                                                                    "words": "You are the WORST! But I am determined to win this."
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 'B14',
                                                                                "display": "end",
                                                                                "tcharacter": "/images/tashas/plant.png",
                                                                                "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                                "text1": "Really " + name + "!?",
                                                                                "text2": "Why are you so stubborn??",
                                                                                "text3": "You're talking to a GOD. Centuries are nothing to them, they experience the passage of time differently. Tahsiana kept coming up with riddles and you were too stubborn to stop answering them. Eventually you died of old age, never having experienced true love."
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        //add
                                        "option2": {
                                            "text": "I genuinely do not have any braincells left in any part of my body nor do I have the energy to even attempt to think",
                                            "next": [
                                                {
                                                    "id": 'Bb9',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tahsiana',
                                                        "words": "You absolute fool. Now you will be trapped forever and your fate will decided by my whims"
                                                    }
                                                },
                                                {
                                                    "id": 'Bb10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/plant.png",
                                                    "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Think again imp! *creepy laughter*"
                                                    }
                                                },
                                                {
                                                    "id": 'BT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "4",
                                                    "tip": "backup your files",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'Bb11',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tahsiana',
                                                                "words": "What is wrong with you?????"
                                                            }
                                                        },
                                                        {
                                                            "id": 'Bb12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": name,
                                                                "words": "Do you think I'm stupid?? I know you're not a god. You're only a forest nymph. I'm surprised you didn't recognize me, " + name + " the Immortal, ruler of twenty dimensions and destroyer of gods"
                                                            }
                                                        },
                                                        {
                                                            "id": 'Bb13',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tahsiana',
                                                                "words": "Oh no!"
                                                            }
                                                        },
                                                        {
                                                            "id": 'BO13',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/plant.png",
                                                            "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Show mercy and let the poor creature go with a warning",
                                                                "next": [
                                                                    {
                                                                        "id": 'Bb14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "I'm in a good mood so I'll let you go. But if I ever hear about you doing anything like this again, I will turn you into a leaf who can do nothing but sway in the wind. Watch yourself."
                                                                        }
                                                                    }, 
                                                                    {
                                                                        "id": 'B15',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "text1": "Wow " + name + "!",
                                                                        "text2": "Who knew you could be so kind?",
                                                                        "text3": "You really shocked us with your revelation. And did I detect some sexual tension between you two?? Let's see if they stir up trouble again just so they can see you again ;)"
                                                                    }
                                                                ]
                                                            },
                                                            "option2": {
                                                                "text": "Activate your laser eyes and obliterate the forest nymph into dust",
                                                                "next": [
                                                                    {
                                                                        "id": 'Bb14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Bye bye."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'B15',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/plant.png",
                                                                        "bg": 'url("/images/backgrounds/plantbg.jpg")',
                                                                        "text1": "Nice one " + name + "!",
                                                                        "text2": "You really just destroyed your one romantic prospect?",
                                                                        "text3": "Good luck finding someone who will tolerate your ass. If a magical creature isn't good enough for you, who is? You're annoying. Also, you can't just kill anyone who annoys you. It's an abuse of power"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }                   
                        ]
                    }
                }
            ]
        }
    ];

    //finished
    const fashion = [
        {
            "id": 'C1',
            "display": "story",
            "tcharacter": " ",
            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Wow, this place is so cool. After years of studying costume design, I can't wait to start designing!"
            }
        },
        {
            "id": 'C2',
            "display": "story",
            "tcharacter": "/images/tashas/fashion.png",
            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": 'Abena',
              "words": "Who the hell are you and why are you just standing there blocking everyone's way??"
            }
        },
        {
            "id": 'C3',
            "display": "story",
            "tcharacter": "/images/tashas/fashion.png",
            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Hi! My name's " + name + "! I'm the new intern, today's my first day!"
            }
        },
        {
            "id": 'CT1',
            "display": "tashtip",
            "arrow": "yes",
            "num": "7",
            "tip": "is there a god?",
            "nextpart" : [
                {
                    "id": 'C4',
                    "display": "story",
                    "tcharacter": "/images/tashas/fashion.png",
                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                    "username": 'Abena',
                    "words": "I do not care who you are. If you want to earn my respect, make sure you do your job properly."
                    }
                },
                {
                    "id": 'C5',
                    "display": "story",
                    "tcharacter": "/images/tashas/fashion.png",
                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                      "username": name,
                      "words": "I've actually been informed that I'm supposed to report directly to you!"
                    }
                },
                {
                    "id": 'C6',
                    "display": "story",
                    "tcharacter": "/images/tashas/fashion.png",
                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                    "username": 'Abena',
                    "words": "Fine. Just do as I say."
                    }
                },
                {
                    "id": 'C7',
                    "display": "options",
                    "tcharacter": "/images/tashas/fashion.png",
                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                    "arrow": "yes",
                    "option1": {
                        "text": "Decide that I'm going to suck up to them constantly during this internship",
                        "next": [
                            {
                                "id": 'C8',
                                "display": "story",
                                "tcharacter": "/images/tashas/fashion.png",
                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "So, tell me, my illustrious leader, what would you like me to do for you?"
                                }
                            },
                            {
                                "id": 'C9',
                                "display": "story",
                                "tcharacter": "/images/tashas/fashion.png",
                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Abena',
                                    "words": "Okay, you freak, go cut up some fabric according to the patterns we're using"
                                }
                            },
                            {
                                "id": 'CT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "13",
                                "tip": "please love yourself",
                                "nextpart" : [
                                    {
                                        "id": 'C10',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": name,
                                            "words": "Heyyyyyyyy, take a look at how well I cut these patterns. I followed the technique you mentioned in your Vogue magazine interview on April 12, 2018 beacuse you are the only one who's ever managed to master this skill."
                                        }    
                                    },
                                    {
                                        "id": 'C11',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Abena',
                                            "words": "What are you trying to do??"
                                        }
                                    },
                                    {
                                        "id": 'C12',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Nothing, I genuinely just think you're the most incredible fashion designer that's ever lived",
                                            "next": [
                                                {
                                                    "id": 'C13',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Abena',
                                                        "words": "Ugh, you're not wrong, but you're still embarassing. Tone it down"
                                                    }
                                                },
                                                {
                                                    "id": 'C14',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Apologies, my liege. I really do just want to learn from you"
                                                    }
                                                },
                                                {
                                                    "id": 'C15',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Abena',
                                                        "words": "Okay, well, here's a list of assignments I'd like for you to complete."
                                                    }
                                                },
                                                {
                                                    "id": 'C16',
                                                    "display": "options",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "option1": {
                                                        "text": "Quietly, also say that you'd also like to learn from them... romantically",
                                                        "next": [
                                                            {
                                                                "id": 'C17',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/fashion.png",
                                                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'Abena',
                                                                    "words": "Go report to HR"
                                                                }
                                                            },
                                                            {
                                                                "id": 'C18',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/fashion.png",
                                                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                "text1": "Yikes, " + name + "!",
                                                                "text2": "It was over before it had ever really begun!",
                                                                "text3": "This is on you. Harassment in the office is never appropriate. If you're interested in someone at work, consult the employee handbook and actually make sure to get to know them and that they like you first"
                                                            }
                                                        ]
                                                    },
                                                    "option2": {
                                                        "text": "Ask, since it's almost the end of the work day on a Friday and you know that they often work on saturdays in the office alone, if the two of you could go to a cafe tomorrow to go over the list together",
                                                        "next": [
                                                            {
                                                                "id": 'C17',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/fashion.png",
                                                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": 'Abena',
                                                                    "words": "You know what? It would be a nice change of scenery. Let's do that."
                                                                }
                                                            },
                                                            {
                                                                "id": 'C18',
                                                                "display": "story",
                                                                "tcharacter": "/images/tashas/fashion.png",
                                                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                "arrow": "yes",
                                                                "dialogue" : {
                                                                    "username": name,
                                                                    "words": "Perfect! I'll see at that one cat cafe tomorrow morning."
                                                                }
                                                            },
                                                            {
                                                                "id": 'C19',
                                                                "display": "end",
                                                                "tcharacter": "/images/tashas/fashion.png",
                                                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                "text1": "Nice move, " + name + "!",
                                                                "text2": "You got yourself a date!",
                                                                "text3": "Your work date at the cafe actually went really well. After you went over the work tasks with Abena, you both ended up talking about each other for hours. Eventually, after a few more months, you two did end up together. And then, after a few years, you ended up going into into business together. How lovely!"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }, 
                                        "option2": {
                                            "text": "I'm so sorry, I'll stop. I thought the only way to get into your graces was to flatter you, and in the process I lost my dignity and self-respect. I will stop",
                                            "next": [
                                                {
                                                    "id": 'C13',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Abena',
                                                        "words": "Thank you, I really appreciate that. "
                                                    }
                                                },
                                                {
                                                    "id": 'CT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "139",
                                                    "tip": "can bullying be a love language?",
                                                    "nextpart" : [
                                                         {
                                                            "id": 'C14',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": name,
                                                                "words": "That being said, I got many offers from other labels, but I wanted to come work here because of you. Would you be willing to be a mentor?"
                                                            }
                                                        },
                                                        {
                                                            "id": 'C15',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Abena',
                                                                "words": "You know what? I can tell you're very dedicated and hard working despite being creepy. So I'll consider it. Come in an hour early tomorrow and we'll see if you can handle it"
                                                            }
                                                        },
                                                        {
                                                            "id": 'C16',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "You won't regret this",
                                                                "next": [
                                                                    {
                                                                        "id": 'C17',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "I better not"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C18',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "text1": "Congratulations " + name + "!",
                                                                        "text2": "You did get that mentorship!",
                                                                        "text3": "With it came a bunch of late nights working with Abena. And overtime, the two of you developed very strong feelings for each other and romance blossomed."
                                                                    }
                                                                ]
                                                            },
                                                            "option2": {
                                                                "text": "You know what? This whole time I've proved to you I'm ready, yet you continue to treat me like this. I'll never be enough for you, will I?",
                                                                "next": [
                                                                    {
                                                                        "id": 'C17',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "I have very high standards and want to push you to be your best. This is a very cut-throat industry and I need to make sure you're tough enough to handle it. The only way to mentor you to fully prepare you is by puttinng you therough the most challenging tasks "
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C18',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Understood. You know what? I do think I can handle it. Let's do this"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "text1": "This is going to be challenging, " + name + ".",
                                                                        "text2": "But ultimately worth it!",
                                                                        "text3": "The tough love mentorship was difficult at first, but ultimately it helped you have a successful career in fashion. And seeing you thrive made Abena develop feelings for you, but your success inflated your ego and you rejected them. Both of you ended up unhappy :("
                                                                    }
                                                                ]
                                                            } 
                                                         }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }, 
                    "option2": {
                        "text": "Decide that my technique to impress them is to stay out of their way as much as possible and just do my job properly, hoping that in the end they can see how talented I am",
                        "next": [
                            {
                                "id": 'C8',
                                "display": "story",
                                "tcharacter": "/images/tashas/fashion.png",
                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Abena',
                                    "words": "Who did the flawless stitches on these culottes???"
                                }
                            },
                            {
                                "id": 'C9',
                                "display": "story",
                                "tcharacter": "/images/tashas/fashion.png",
                                "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "It was me your honour"
                                }
                            },
                            {
                                "id": 'CT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "146",
                                "tip": "as long as it doesn't hurt anyone, you shouldn't be ashamed of the things you enjoy. no such thing as guilty pleasures",
                                "nextpart" : [
                                    {
                                        "id": 'C10',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Abena',
                                            "words": "Tell me how you achieved this."
                                        }
                                    },
                                    {
                                        "id": 'C11',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": name,
                                            "words": "I just chose the correct sewing machine settings and made sure to follow the guidelines on the machine to feed the fabric in a straight line"
                                        }
                                    },
                                    {
                                        "id": 'C12',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Abena',
                                            "words": "Most of our employees aren't able to do this. Where have you been hiding?"
                                        }
                                    },
                                    {
                                        "id": 'C13',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/fashion.png",
                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Um. you basically told me you never wanted to see me again on my first day",
                                            "next": [
                                                {
                                                    "id": 'C14',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Abena',
                                                        "words": "Wow, so you're good at following directions too!"
                                                    }
                                                },
                                                {
                                                    "id": 'C15',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "I strive to be the best employee I can be"
                                                    }
                                                },
                                                {
                                                    "id": 'CT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "78",
                                                    "tip": "go to the beach and see how many shells you can fit in your mouth. bonus points if they contain hermit crabs",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'C16',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Abena',
                                                                "words": "Well I would like to reward that. What would you like?"
                                                            }
                                                        },
                                                        {
                                                            "id": 'C17',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "A high-level position in the company",
                                                                "next": [
                                                                    {
                                                                        "id": 'C18',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "Done. What else?"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C19',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "I would like to be included in some of your projects as well"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C20',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "We can definitely do that. I would be honoured to have you work with me"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C21',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "text1": "Awww, how wonderful " + name + "!",
                                                                        "text2": "You've earned their time and respect!",
                                                                        "text3": "Working with them on these important projects strengthened your work relationship. The respect and admiration between you two then evolved into love"
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "I would love just one steamy night with you ;)",
                                                                "next": [
                                                                    {
                                                                        "id": 'C14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "Go to HR. You're fired"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": ' ',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/kpop.png",
                                                                        "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                                        "text1": "What the fuck is wrong with you " + name + "?",
                                                                        "text2": "I have no words...",
                                                                        "text3": ""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        "option2": {
                                            "text": "I have been here doing my work, like a good employee",
                                            "next": [
                                                {
                                                    "id": 'C14',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Abena',
                                                        "words": "Amazing. I wish I had more people like you working for me"
                                                    }
                                                },
                                                {
                                                    "id": 'C15',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/fashion.png",
                                                    "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Now, if you don't mind, I'd like to get back to my work"
                                                    }
                                                },
                                                {
                                                    "id": 'CT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "53",
                                                    "tip": "if you have less than 3,000 followers on tik tok don't you dare even get close to me",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'C16',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Abena',
                                                                "words": "Oh, uh sorry, yeah. I'll, uh, let you get back to it."
                                                            }
                                                        },
                                                        {
                                                            "id": 'C17',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/fashion.png",
                                                            "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Thank you, please only contact me if you really need me. I am very busy",
                                                                "next": [
                                                                    {
                                                                        "id": 'C18',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "Of course. Your dedication is much appreciated."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C15',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "text1": "Good for you " + name + "!",
                                                                        "text2": "You're thriving in the field you're passionate about!",
                                                                        "text3": "As you continued to work and climb the positions in the company, you also found that the only reason why you wanted to seduce Abena was because you we're deeply insecure and had a gaping hole left in your heart, and due to parental issues, you we're immediately attracted to authority figures. Your work ended up being therapeutic and helping you find yourself and eventually you did find a life partner."
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "Also, since we're speaking, I'd also like to mention some of the errors you made on your last collection",
                                                                "next": [
                                                                    {
                                                                        "id": 'C13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "Wow, I've never had anyone speak to me like that. I think I kinda like it..."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "That's really not my problem. Kindly allow me to finish this project if there is nothing else you'd like to speak about"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Abena',
                                                                            "words": "Yes, yes, of course " + name
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'C16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/fashion.png",
                                                                        "bg": 'url("/images/backgrounds/fashionbg.jpg")',
                                                                        "text1": "What an interesting development, " + name + "!",
                                                                        "text2": "One always wants what they don't have!",
                                                                        "text3": "You started out obsessed with Abena, but then the tables turned when you ignored them and did your work and THEY ended up becoming obsessed with you, especially after you didn't immediately agree with everything they said and brushed them off. They ended up chasing after you, and after a while, they succeeded and you guys entered a romantic relationship."
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ];

    //storyline: go into a cat cafe and meet the owner Tabbysha Donkmeow
    const cat = [
        {
            "id": 'D1',
            "display": "story",
            "tcharacter": " ",
            "bg": 'url("/images/backgrounds/catbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Oh how cute! I've been wanting to go here for a while."
            }
        },
        {
            "id": 'D2',
            "display": "story",
            "tcharacter": "/images/tashas/cat.png",
            "bg": 'url("/images/backgrounds/catbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": 'Tabbysha Donkmeow',
              "words": "Hello! Welcome to my cat cafe!"
            }
        },
        {
            "id": 'D3',
            "display": "story",
            "tcharacter": "/images/tashas/cat.png",
            "bg": 'url("/images/backgrounds/catbg.jpg")',
            "arrow": "yes",
            "dialogue" : {
              "username": name,
              "words": "Oh are you the owner here?"
            }
        },
        {
            "id": 'DT1',
            "display": "tashtip",
            "arrow": "yes",
            "num": "27",
            "tip": "chew on some bones if you're lacking calcium",
            "nextpart" : [
                {
                    "id": 'D4',
                    "display": "story",
                    "tcharacter": "/images/tashas/cat.png",
                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                    "arrow": "yes",
                    "dialogue" : {
                    "username": 'Tabbysha Donkmeow',
                    "words": "Yeah! How can I help you"
                    }
                },
                {
                    "id": 'D5',
                    "display": "options",
                    "tcharacter": "/images/tashas/cat.png",
                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                    "arrow": "yes",
                    "option1": {
                        "text": "Could I just get some tea please an an hour with the cats?",
                        "next": [
                            {
                                "id": 'D6',
                                "display": "story",
                                "tcharacter": "/images/tashas/cat.png",
                                "bg": 'url("/images/backgrounds/catbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Tabbysha Donkmeow',
                                    "words": "Of course! Let me just get that for you real quick"
                                }
                            },
                            {
                                "id": 'D7',
                                "display": "story",
                                "tcharacter": "/images/tashas/cat.png",
                                "bg": 'url("/images/backgrounds/catbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "So tell me, how does this all work. It's my first time here"
                                }
                            },
                            {
                                "id": 'DT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "1",
                                "tip": "if your cat licks you, lick them back",
                                "nextpart" : [
                                    {
                                        "id": 'D8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/cat.png",
                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Tabbysha Donkmeow',
                                            "words": "Well, you can pay to spend time with the cats by the hour and order whatever you want from our menu. We're actually about to have our 'Catnip Happy Hour' where we feed all the cats catnip and also slip something special into your drinks so you can be just as high as the cats"
                                        }    
                                    },
                                    {
                                        "id": 'D9',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/cat.png",
                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Participate in the Catnip Happy Hour",
                                            "next": [
                                                {
                                                    "id": 'D10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tabbysha Donkmeow',
                                                        "words": "Okay I just slipped a little something in your drink and since you're the only other person here right now, you can help me feed all the cats the catnip"
                                                    }
                                                },
                                                {
                                                    "id": 'D11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Yes!! Thank you. I can't wait to meet all the kitties"
                                                    }
                                                },
                                                {
                                                    "id": ' ',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "61",
                                                    "tip": "everyone should get therapy",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'D12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tabbysha Donkmeow',
                                                                "words": "wow, you're a natural with them, they all really like you. And you know what they say, cats are good judges of character"
                                                            }
                                                        },
                                                        {
                                                            "id": 'D13',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "Isn't it weird being the only sober one here? You should join all of us",
                                                                "next": [
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "Sure! It's a slow day anyway, and you're the only one here, so let me just close up the cafe for the day and take something myself and we can all hang out"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Come back quick!"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": " " + name + "!",
                                                                        "text2": "",
                                                                        "text3": "The two of you spent the rest of the afternoon and night high and having deep, meaningful conversations. Even though you had only known each other for a few hours, it felt like you had known each other for years. After this, your relationship developed quickly and you were co-owner in a few months"
                                                                    }
                                                                ]
                                                            },
                                                            "option2": {
                                                                "text": "Maybe these cats are trying to tell you something... ",
                                                                "next": [
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "Honestly, they're very well socialized so they like most people. That's why they're employed here. But it's surprising to see all 20 of them piled on top of you"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Maybe we should chat some more and we can figure out why they like me so much?"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": "How adorable " + name + "!",
                                                                        "text2": "Cats are usually known to be aloof. But did you have the same effect on Tabbysha Donkmeown as you did on those cats?",
                                                                        "text3": "You two hung out after that for a few hours and then kept hanging out on separate occassions after that. You fell in love with some of those cats and ended up adopting them. The two of you eventually got together and kept adopting more cats. Like a hermit crab, you kept having to buy new houses as your collection of cats grew"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }

                                            ]
                                        }, 
                                        "option2": {
                                            "text": "Tell them the real reason why you're here is to find a job there",
                                            "next": [
                                                {
                                                    "id": 'D10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Yeah, I actually came here because I absolutely adore cats and would love to be able to work with them."
                                                    }
                                                },
                                                {
                                                    "id": 'DT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "52",
                                                    "tip": "those sounds you hear in your room at night? definitely ghosts",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'D11',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tabbysha Donkmeow',
                                                                "words": "Well, tell me more about yourself"
                                                            }
                                                        },
                                                        {
                                                            "id": 'D12',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "I have owned many cats in my life and know exactly how to take care of them",
                                                                "next": [
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "Okay, well you'll have to fill out an application and return it to me and I'll call you in for an interview"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "I'll get it to you ASAP"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": "A new job and a possible new partner " + name + "?",
                                                                        "text2": "",
                                                                        "text3": "You actually didn't get the job cause you had no experience, but you still became a regular at the cafe. You and Tabbysha Donkmeow would talk regularly and found you had a lot of things in common. Your shared passion for cats then lead to a successful relationship."
                                                                    }
                                                                ]
                                                            },
                                                            "option2": {
                                                                "text": "Twenty years ago I got lost in the woods and was raised by a colony of cats for ten years. I searched for the most ethical cat cafe in the nation and found this one and moved here just to be able to work here or at least be able to frequent it",
                                                                "next": [
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "Wow, okay, yeah I'll give you the job"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "Thank you. Now I will speak to the cats and make sure they're fine with it too"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": "Congrats on the job " + name + "!",
                                                                        "text2": "",
                                                                        "text3": "Turns out what you actually needed wasn't a job, but therapy. Working at the cafe and with Tabbysha Donkmeow helped you come to this realisation and they supported you through it at times. Once you were a bit more stable, you two were able to then confront your feelings for each other."
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }, 
                    //ADD
                    "option2": {
                        "text": "I'm just here to pet some pussy ;)",
                        "next": [
                            {
                                "id": 'D6',
                                "display": "story",
                                "tcharacter": "/images/tashas/cat.png",
                                "bg": 'url("/images/backgrounds/catbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": 'Tabbysha Donkmeow',
                                    "words": "That's really not as funny or original as you think"
                                }
                            },
                            {
                                "id": 'D7',
                                "display": "story",
                                "tcharacter": "/images/tashas/cat.png",
                                "bg": 'url("/images/backgrounds/catbg.jpg")',
                                "arrow": "yes",
                                "dialogue" : {
                                    "username": name,
                                    "words": "I'm so sorry. I don't know why I said that. I promise I'm not a weirdo"
                                }
                            },
                            {
                                "id": 'DT2',
                                "display": "tashtip",
                                "arrow": "yes",
                                "num": "86",
                                "tip": "do not put q-tips into your ear canal, even though it feels really good",
                                "nextpart" : [
                                    {
                                        "id": 'D8',
                                        "display": "story",
                                        "tcharacter": "/images/tashas/cat.png",
                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                        "arrow": "yes",
                                        "dialogue" : {
                                            "username": 'Tabbysha Donkmeow',
                                            "words": "Fine, I will give you the benefit of the doubt"
                                        }
                                    },
                                    {
                                        "id": 'DO9',
                                        "display": "options",
                                        "tcharacter": "/images/tashas/cat.png",
                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                        "arrow": "yes",
                                        "option1": {
                                            "text": "Let me buy you a slice of cake or something to make up for it",
                                            "next": [
                                                {
                                                    "id": 'D10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tabbysha Donkmeow',
                                                        "words": "Sure, it's the least you could do honestly"
                                                    }
                                                },
                                                {
                                                    "id": 'D11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Okay, well I'll do that right now and leave you be"
                                                    }
                                                },
                                                {
                                                    "id": 'DT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "31",
                                                    "tip": "to make a relationship work long-term, you have to make sure you both respect each other",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'D12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tabbysha Donkmeow',
                                                                "words": "Thanks"
                                                            }
                                                        },
                                                        {
                                                            "id": ' ',
                                                            "display": "end",
                                                            "tcharacter": "/images/tashas/kpop.png",
                                                            "bg": 'url("/images/backgrounds/kpopbg.jpg")',
                                                            "text1": "Let this be a lesson learned " + name + ".",
                                                            "text2": "First impressions really make a difference",
                                                            "text3": "Learn to think before you speak so you don't ruin yet another potential relationship"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        "option2": {
                                            "text": "Well, I'm just gonna go pet some cats",
                                            "next": [
                                                {
                                                    "id": 'D10',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": 'Tabbysha Donkmeow',
                                                        "words": "Okay well just stay there and don't cause trouble"
                                                    }
                                                },
                                                {
                                                    "id": 'D11',
                                                    "display": "story",
                                                    "tcharacter": "/images/tashas/cat.png",
                                                    "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                    "arrow": "yes",
                                                    "dialogue" : {
                                                        "username": name,
                                                        "words": "Of course. I am a great person."
                                                    }
                                                },
                                                {
                                                    "id": 'DT3',
                                                    "display": "tashtip",
                                                    "arrow": "yes",
                                                    "num": "149",
                                                    "tip": "never trust a goat",
                                                    "nextpart" : [
                                                        {
                                                            "id": 'D12',
                                                            "display": "story",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "dialogue" : {
                                                                "username": 'Tabbysha Donkmeow',
                                                                "words": "Can I get you anything else?"
                                                            }
                                                        },
                                                        {
                                                            "id": ' ',
                                                            "display": "options",
                                                            "tcharacter": "/images/tashas/cat.png",
                                                            "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                            "arrow": "yes",
                                                            "option1": {
                                                                "text": "I lied. I am a horrible person. I just wanna stay here and stroke this pussy",
                                                                "next": [
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "Get out of my sight"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": "Gross, " + name + "!",
                                                                        "text2": "Why are you so disgusting?",
                                                                        "text3": "If you enjoy making people uncomfortable after they've asked you not to do something, there is something wrong with you. Piss off!!"
                                                                    }
                                                                ]
                                                            }, 
                                                            "option2": {
                                                                "text": "I am going to steal this cat in my arms and you can't stop me",
                                                                "next": [
                                                                    {
                                                                        "id": 'D13',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "You know they're all up for adoption right? You don't have to steal them?"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D14',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": name,
                                                                            "words": "But where's the fun in that?? Hehehehhehe..."
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D15',
                                                                        "display": "story",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "arrow": "yes",
                                                                        "dialogue" : {
                                                                            "username": 'Tabbysha Donkmeow',
                                                                            "words": "What the fuck?"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 'D16',
                                                                        "display": "end",
                                                                        "tcharacter": "/images/tashas/cat.png",
                                                                        "bg": 'url("/images/backgrounds/catbg.jpg")',
                                                                        "text1": "What the fuck indeed, " + name + "!",
                                                                        "text2": "Why are you such a creep??",
                                                                        "text3": "I don't even know what kind of seduction technique this is supposed to be. Anyone would be weirded out"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ];

    //displays the character specs and also controls the path that the player chooses
    const pickTasha = (event, i) => {
        setTasha(tashaList[i].id);
        if (tashaList[i].id === 'kpop') {
            setText({      
                'head': '', 
                'name': 'jimins_sexy_nostril_0508',
                'text': 'hardcore fan',
                'button': 'visible',
                'likes': {
                    'one': 'the most important men in their life, BTS',
                    'two': 'covertly starting massive drama that no one can trace back to you',
                    'three': 'lightstick bongs'
                },
                'dislikes': {
                    'one': 'big crowds',
                    'two': 'eating lemons',
                    'three': 'competitions that dont apply to international fans'
                }
            });
            setChosenPath(kpop);
        }
        if (tashaList[i].id === 'plant') {
            setText({      
                'head': '', 
                'name': 'Tahsiana',
                'text': 'some kind of plant diety?',
                'button': 'visible',
                'likes': {
                    'one': 'licking the dew off plants',
                    'two': 'photosynthesizing',
                    'three': 'transforming into an omnipotent orb'
                },
                'dislikes': {
                    'one': 'fungi, the ultimate enemy',
                    'two': 'math',
                    'three': 'beady eyes'
                }
            });
            setChosenPath(plant);
        }
        if (tashaList[i].id === 'cat') {
            setText({      
                'head': '', 
                'name': 'Tabbysha Donkmeow',
                'text': 'owner of a cat cafe',
                'button': 'visible',
                'likes': {
                    'one': 'going outside at 3am and battling racoons',
                    'two': 'cuddling',
                    'three': 'sticking one leg up in the air'
                },
                'dislikes': {
                    'one': 'lies and deception',
                    'two': 'battles to the death, but only when youre not allowed to participate',
                    'three': 'rabid rats'
                }
            });
            setChosenPath(cat);
        }
        if (tashaList[i].id === 'fashion') {
            setText({      
                'head': '', 
                'name': 'Abena',
                'text': 'successful fashion designer',
                'button': 'visible',
                'likes': {
                    'one': 'the soothing sound of a sewing machine',
                    'two': 'collecting scraps of fabric to use later but then never actually using them',
                    'three': 'roller blading'
                },
                'dislikes': {
                    'one': 'moths',
                    'two': 'weak fingers',
                    'three': 'unethical business practices and fast fashion'
                }
            });
            setChosenPath(fashion);
        }
    }


    if (display === 'start') {
        return(
            <div className="main bg1" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '50px'}}>
                <div className="centered-box" style={{height: '100%', width: '45%', marginRight: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <center>
                            <h2>{text.head}</h2>
                            <h3>{text.name}</h3>
                            {text.text}
                        </center><br />
                        <div style={{visibility: text.button}}>
                            <h4>Likes:</h4>
                            <ul>
                                <li>{text.likes.one}</li>
                                <li>{text.likes.two}</li>
                                <li>{text.likes.three}</li>
                            </ul>
                            <br />
                            <h4>Dislikes:</h4>
                            <ul>
                                <li>{text.dislikes.one}</li>
                                <li>{text.dislikes.two}</li>
                                <li>{text.dislikes.three}</li>
                            </ul>
                        </div>
                        <br />
                       <button style={{visibility: text.button}} onClick={ e => setDisplay("firstscene")}>Pick this tasha</button>
                    </div> 
                </div>
                <div style={{height: '100%', width: '55%', marginLeft: '10px', display: 'grid', gap: '15px', gridTemplateColumns: 'auto auto', gridTemplateRows: '1fr 1fr'}}>
                        {
                            tashaList.map((item, i) => {
                                return (
                                    <div onClick={(event) => pickTasha(event, i)}>
                                    <Card 
                                        key={item.id}
                                        index={i}
                                        bg={item.bg}
                                    />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        );
    } else if (display === 'firstscene') {
        return (
            <div className='main bg2' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <div className="text-box" style ={{padding: '10px', width: '70%', border: '#6d6d6d'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <FirstScene scene={tasha} />
                        <button className='arrow-button' style={{marginTop: '20px'}} onClick={ e => setDisplay("story")}> ➜ </button>
                    </div>
                </div>
            </div>
        );
    } else if (display === 'story') {
        return (
            <StoryDisplay info={chosenPath} />
        );
    }    
}


