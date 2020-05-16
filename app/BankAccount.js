class BankAccount {
    constructor(balance){
        this.balance = balance;
        this.accountHistory = [{operation: 'create', amount: balance}];
    }

    current(){
        return this.balance;
    }

    append(amount){
        if(amount >= 0){
            this.balance = this.balance + amount;
            this.accountHistory.push({operation: 'append', amount: amount});
        }
        return this.balance;
    }

    substract(amount){
        if(amount >= 0){
            this.balance = this.balance - amount;
            this.accountHistory.push({operation: 'substract', amount: amount});
        }
        return this.balance;
    }

    merge(newAccount){
        this.balance = this.balance + newAccount.current();
        this.history = this.accountHistory.concat(newAccount.history());
    }

    history(){
        return this.accountHistory;
    }
}

module.exports = BankAccount;