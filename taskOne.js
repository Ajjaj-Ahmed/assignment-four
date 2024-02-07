function calculateMoney(ticketSell){
  if(ticketSell<0){
    return 'Enter a valid number'
  }
    const ticketPrice = 120;
    const guradBill = 500;
    const lunchBill = 8*500;
    const totalBill = guradBill + lunchBill ;

    let totalSell = ticketSell * ticketPrice ;
    let remainingMoney = totalSell - totalBill ;

    return remainingMoney;

}
let moneyAfterExpense=calculateMoney(100);
console.log(moneyAfterExpense);