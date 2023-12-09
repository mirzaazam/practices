

function ticketPrice(ticketQuantity){
    let firstTicketPrice = 100;
    let secondTicketPrice = 90; 
    let reamingTicketPrice = 70;

    if ( ticketQuantity <= 100 ){
        let getPriceLessThan_100 = ticketQuantity * firstTicketPrice;
        console.log('Total price is: ',getPriceLessThan_100);
        return getPriceLessThan_100;
    }

    else if ( ticketQuantity <= 200 ){
        let getpriceFirst_100ticket = (100 * firstTicketPrice);
        console.log('First 100 ticket price is:', getpriceFirst_100ticket);
        let getPriceSecond_100ticket = (ticketQuantity - 100) * secondTicketPrice;
        console.log('second or reaming ticket price is: ',secondTicketPrice);
        const totalPrice = getpriceFirst_100ticket + getPriceSecond_100ticket;
    }

    else{
         const getFirst100Price  = 100 * firstTicketPrice;
         console.log('First 100 ticket price is:', getFirst100Price);
         const getSecond100Price = 100 * secondTicketPrice;
         console.log('Second 100 ticket price is:', getSecond100Price);
         const getReaningPrice = (ticketQuantity - 200) * reamingTicketPrice;
         console.log('Remaining ticket price is:', getReaningPrice);
         const totalPrice = getFirst100Price + getSecond100Price + getReaningPrice;
         console.log('Total price is :',totalPrice);
         return totalPrice;
    }

}

const getResult = ticketPrice(60);
console.log(getResult);

