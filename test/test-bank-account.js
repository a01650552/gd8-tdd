const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        it('Should return the current balance of the account.', () => {
            //returning current balance
            let balance = 0;
            let account = new BankAccount(balance);
            assert.deepEqual(balance, account.current());
        })
    })

    describe('#append', () => {
        it('Should return the final balance after adding money to the account. No change if appending negative amount.', () => {
            //appending amount and returning final balance
            let balance = 10;
            let amount = 50;
            let account = new BankAccount(balance);
            assert.deepEqual(60, account.append(amount));

            //no change if negative amount
            let negativeAmount = -10;
            let account2 = new BankAccount(balance);
            assert.deepEqual(10, account2.append(negativeAmount));
        })
    })

    describe('#substract', () => {
        it('Should return the final balance after substracting money to the acount. No change if it receives a negative amount.', () => {
            //substracting amount and returning final balance
            let balance = 20;
            let amount = 10;
            let account = new BankAccount(balance);
            assert.deepEqual(10, account.substract(amount));

            //no change if negative amount
            let negativeAmount = -10;
            let account2 = new BankAccount(balance);
            assert.deepEqual(20, account2.substract(negativeAmount));
        })
    })

    describe('#merge', () => {
        it('Merges new account into current account. History is combined and balance is added or substracted if positive or negative, respectively.', () => {
            //account 1
            let balance = 20;
            let account = new BankAccount(balance);

            //account 2
            let account2 = new BankAccount(balance);
            account2.append(10);

            //merged history
            let history = [{operation: 'create', amount: 20}, {operation: 'create', amount: 20}, {operation: 'append', amount: 10}];
            account.merge(account2);
            
            //When 
            assert.deepEqual(history, account.history);
            assert.deepEqual(50, account.current());
        })
    })

    describe('#history', () => {
        it('Should return the array of history objects.', () => {
            //value we are expecting
            let expected = [{operation: 'create', amount: 20}, {operation: 'substract', amount: 10}, {operation: 'append', amount: 30}];

            //building the history
            let balance = 20;
            let account = new BankAccount(balance);
            account.substract(10);
            account.append(30);
           
            assert.deepEqual(expected, account.history());
        })
    })
})