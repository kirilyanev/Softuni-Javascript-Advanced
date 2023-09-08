const library = require('./library');
const { assert,expect} = require('chai');


describe("Tests library", function() {
    describe("Tests calcPriceOfBook (nameOfBook, year)", function() {

        it("calcPriceOfBook (invalidInput(number), year)", function() {
            expect(()=>{library.calcPriceOfBook(1,2015)}).to.throw("Invalid input");
        });

        it("calcPriceOfBook (nameOfBook, InvalidInput(string))", function() {
            expect(()=>{library.calcPriceOfBook('Le Petit Prince','2015')}).to.throw("Invalid input");
        });

        it("calcPriceOfBook (nameOfBook, year is less than or equal to 1980)", function() {
            expect(library.calcPriceOfBook('Le Petit Prince',1979)).to.equal('Price of Le Petit Prince is 10.00');
            expect(library.calcPriceOfBook('Le Petit Prince',1980)).to.equal('Price of Le Petit Prince is 10.00');
        });

        it("calcPriceOfBook (nameOfBook, 2015)", function() {
            expect(library.calcPriceOfBook('Le Petit Prince',2015)).to.equal('Price of Le Petit Prince is 20.00');
        });
     });

     describe("Tests findBook (booksArr, desiredBook)", function() {

        it("the booksArr array is zero", function() {
            expect(()=>{library.findBook([],'Le Petit Prince')}).to.throw("No books currently available");
        });

        it("the desiredBook is present in booksArr", function() {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],'Troy')).to.equal("We found the book you want.");
        });

        it("the desiredBook is NOT present in booksArr", function() {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],'Le Petit Prince')).to.equal("The book you are looking for is not here!");
        });

     });

     describe("Tests arrangeTheBooks (countBooks)", function() {

        it("countBooks is not an integer number", function() {
            expect(()=>{library.arrangeTheBooks(1.5)}).to.throw("Invalid input");
        });

        it("countBooks is a negative number", function() {
            expect(()=>{library.arrangeTheBooks(-1)}).to.throw("Invalid input");
        });

        it("countBooks is less than 40", function() {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });

        it("countBooks is 40", function() {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });

        it("countBooks is more than 40", function() {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });

     });
     
});