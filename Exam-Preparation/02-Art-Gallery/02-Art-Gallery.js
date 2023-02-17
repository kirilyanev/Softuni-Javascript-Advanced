class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        const model = articleModel.toLowerCase();

        const article = {
            articleModel: model,
            articleName: articleName,
            quantity: quantity
        };

        for (let i = 0; i < this.listOfArticles.length; i++) {
            let currentArticle = this.listOfArticles[i];
            if (currentArticle.articleName == articleName && currentArticle.articleModel == model) {
                this.listOfArticles[i].quantity += 1;
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
            }
        }

        if (this.possibleArticles[model] == undefined) {
            throw new Error("This article model is not included in this gallery!");
        }

        this.listOfArticles.push(article);

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    };

    inviteGuest(guestName, personality) {
        for (let i = 0; i < this.guests.length; i++) {
            let currentGuest = this.guests[i];
            if (currentGuest.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }

        let points = 0;

        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        const guest = {
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        };

        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`
    };

    buyArticle(articleModel, articleName, guestName) {
        let isFound = false;

        for (let i = 0; i < this.listOfArticles.length; i++) {
            let currentArticle = this.listOfArticles[i];
            if (currentArticle.articleName == articleName) {
                if (currentArticle.articleModel == articleModel) {
                    isFound = true;
                    if (currentArticle.quantity == 0) {
                        return `The ${articleName} is not available.`
                    };
                };
            };
        };

        if (isFound == false) {
            throw new Error("This article is not found.");
        };

        let isPresent = false;

        for (let i = 0; i < this.guests.length; i++) {
            let guest = this.guests[i];
            if (guest.guestName == guestName) {
                isPresent = true;
                if (guest.points < this.possibleArticles[articleModel]) {
                    return "You need to more points to purchase the article.";
                } else {
                    this.guests[i].points -= this.possibleArticles[articleModel];
                    this.guests[i].purchaseArticle += 1;
                    const articleIndex = this.listOfArticles.findIndex(ar => ar.articleName == articleName);
                    this.listOfArticles[articleIndex].quantity -= 1;
                    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
                }
            };
        };

        if (isPresent == false) {
            return "This guest is not invited.";
        };


    };

    showGalleryInfo (criteria){
        const output = [];
        if(criteria == 'article') {
            output.push('Articles information:');
            this.listOfArticles.forEach(ar=>output.push(`${ar.articleModel} - ${ar.articleName} - ${ar.quantity}`));
            return output.join('\n');
        }

        if(criteria == 'guest') {
            output.push('Guests information:');
            this.guests.forEach(g=>output.push(`${g.guestName} - ${g.purchaseArticle}`));
            return output.join('\n');
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
