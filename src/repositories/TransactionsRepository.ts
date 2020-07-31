import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Result {
  transactions: Transaction[];
  balance: Balance;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Result {
    // TODO
    const balance = this.getBalance();

    const result: Result = {
      transactions: this.transactions,
      balance,
    };

    return result;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions.reduce((subtotal, item) => {
      return subtotal + (item.type === 'income' ? item.value : 0);
    }, 0);

    const outcome = this.transactions.reduce((subtotal, item) => {
      return subtotal + (item.type === 'outcome' ? item.value : 0);
    }, 0);

    const balance = { income, outcome, total: income - outcome };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
