function sortTickets(tickets, sortType) {
    let allTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        let currentTicket = new Ticket(destination, price, status);
        allTickets.push(currentTicket);
    }
    if (sortType != 'price') {
        allTickets.sort((a, b) => a[sortType].localeCompare(b[sortType]));
    } else {
        allTickets.sort((a, b) => a[sortType] - (b[sortType]));
    }

    return allTickets;
}

// console.log(sortTickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'));

// console.log(sortTickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'));

console.log(sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));