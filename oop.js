const prompt = require('prompt-sync')({sigint: true});
// npm install prompt-sync

class ParkingGarage{
    constructor(tickets, spaces, current_ticket = {}){
        this.tickets = tickets;
        this.spaces = spaces;
        this.current_ticket = current_ticket;
    }

    main = () => {
        let flag = true;
        while (flag){
            let choice = prompt('What would you like to do? \nTake\nPay\nShow\nQuit\n');
            if (choice.toLowerCase() == 't'){
                this.takeTicket();
            } else if (choice.toLowerCase() == 'p'){
                this.payTicket();
            } else if (choice.toLowerCase() == 's'){
                this.showTicket();
            } else if (choice.toLowerCase() == 'q'){
                break
            } else {
                console.log('Please type a valid option.')
            }
        }
    }

    takeTicket = () => {
        if (this.tickets.length <= 0) {
            console.log('No room')
        } else {
            console.log('Thanks for joining us!');
            let ticket_removed = this.tickets.pop();
            this.current_ticket[ticket_removed] = 'unpaid';
            // setTimeout(() => {console.log('Please enter!')}, 3);
            console.log('Please enter!')
        }
    }

    showTicket = () => {
        console.log('Tickets left: ' + this.tickets.length);
        console.log('\nCurrent tickets: ');
        console.log(this.current_ticket);
    }

    payTicket = () => {
        try {
            let ticket_num = parseInt(prompt("What was your ticket number? "));
            if (ticket_num in this.current_ticket){
                console.log('Please submit payment by pressing enter.')
                this.current_ticket[ticket_num] = 'paid';
            } else {
                console.log('That ticket is not a valid ticket.')
            }
        } catch {
            console.log('You did not give a valid ticket number.')
        }
    }
}

const park = () => {
    let garage = new ParkingGarage([1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]);
    garage.main();
}

park()