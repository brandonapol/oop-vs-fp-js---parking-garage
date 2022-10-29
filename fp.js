const prompt = require('prompt-sync')({sigint: true});

const main = (tickets, spaces, current_ticket = {}) => {
    let flag = true;
    while (flag){
        let choice = prompt('What would you like to do? \nTake\nPay\nShow\nQuit\n');
        if (choice.toLowerCase() == 't'){
            takeTicket(tickets, spaces, current_ticket);
        } else if (choice.toLowerCase() == 'p'){
            payTicket(tickets, spaces, current_ticket);
        } else if (choice.toLowerCase() == 's'){
            showTicket(tickets, spaces, current_ticket);
        } else if (choice.toLowerCase() == 'q'){
            break
        } else {
            console.log('Please type a valid option.')
        }
    }
}

const takeTicket = (t, s, c_t) => {
    if (t.length <= 0) {
        console.log('No room')
    } else {
        console.log('Thanks for joining us!');
        let ticket_removed = t.pop();
        c_t[ticket_removed] = 'unpaid';
        // setTimeout(() => {console.log('Please enter!')}, 3);
        console.log('Please enter!');
        return t, s, c_t
    };
};

const showTicket = (t, s, c_t) => {
    console.log('Available tickets: \n' + t);
    console.log('Current tickets: ');
    console.log(c_t);
};

const payTicket = (t, s, c_t) => {
    try {
        let ticket_num = parseInt(prompt("What was your ticket number? "));
        if (ticket_num in c_t){
            console.log('Thank you for paying!');
            c_t[ticket_num] = 'paid';
        } else {
            console.log('That ticket is not a valid ticket.');
        };
    } catch {
        console.log('You did not give a valid ticket number.');
    };
}

main([1,2,3,4,5,6,7,8,9,10], 10);