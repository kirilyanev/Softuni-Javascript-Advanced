class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length + 1 > this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        const wine = {
            wineName: wineName,
            wineType: wineType,
            price: price,
            paid: false
        }

        this.wines.push(wine);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const index = this.wines.findIndex(w => w.wineName == wineName);

        if (index == -1) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (this.wines[index].paid == true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        this.wines[index].paid = true;
        this.bill += this.wines[index].price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        const index = this.wines.findIndex(w => w.wineName == wineName);

        if (index == -1) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if (this.wines[index].paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            let output = [];
            output.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            output.push(`You paid ${this.bill}$ for the wine.`);

            const sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (const wine of sorted) {
                output.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? "Has Paid" : "Not Paid"}.`)
            }

            return output.join('\n');
        }

        const index = this.wines.findIndex(w => w.wineType == wineType);

        if (index == -1) {
            throw new Error(`There is no ${wineType} in the cellar.`)
        }

        const wine = this.wines[index];
        return `${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? "Has Paid" : "Not Paid"}.`;
    }
}


// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
