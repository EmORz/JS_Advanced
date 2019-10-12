function ticketsSystem(inputArr, sortingCriteria) {
    
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }        
    }


    let tempTicketArr = [];

    for(let ticket of inputArr){
        let [destination, price, status] = ticket.split('|');

        price = +price;
        tempTicketArr.push(new Ticket(destination, price, status));
    }

    let sortArr;
    switch (sortingCriteria) {
        case "destination":
            sortArr = tempTicketArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
            case "status":
                sortArr = tempTicketArr.sort((a,b) => a.status.localeCompare(b.status));
                break;
                case "price":
                    sortArr = tempTicketArr.sort((a,b) => a.price - b.price);
                    break;
    }

    return sortArr

}

console.log(ticketsSystem(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))