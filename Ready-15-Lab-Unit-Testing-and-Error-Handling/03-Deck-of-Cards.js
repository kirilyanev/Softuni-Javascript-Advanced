function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        if (faces.includes(face) == false || suit in suits == false) {
            return `Invalid card: ${face + suit}`;
        }

        let card = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        }

        return card;
    }

    let result = [];

    for (let faceSuit of cards) {
        faceSuit = faceSuit.split('');
        let face = faceSuit[0];
        let suit = faceSuit[1];
        if (faceSuit.length == 3) {
            face = faceSuit[0] + faceSuit[1];
            suit = faceSuit[2];
        }
        let card = createCard(face, suit);
        if (card.length > 3) {
            return console.log(card);
        }
        result.push(card);
    }
    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
