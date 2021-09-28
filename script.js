// we have to check whether the amount enters is positive or not

const billAmount = document.querySelector("#bill-amount");
// console.log(bill.innerHTML);
// const billAmount=bill.value;
// console.log(billAmount);
const btnCheck = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const messege1 = document.querySelector("#messege");
const noOfNotes= document.querySelectorAll('.no-of-notes');
console.log(noOfNotes.value);
// console.log(cashGiven.value);
// console.log(billAmount.value);
const availaibleNotes = [2000, 500, 100, 20, 10, 5, 1];

// btnCheck.addEventListener("click",() => {if(billAmount.value>0 && cashGiven.value>0) {
//     console.log('sahi hai ');
//     messege1.innerHTML="Accepted";
// }
// btnCheck.addEventListener("click", validBillAndCashAmount() {
//     console.log('sahi hai ');
//     messege1.innerHTML="Accepted";
// }
// else{
//     console.log("kuch toh gadbad hai daya ");
//     messege1.style.display="block";
//     messege1.innerHTML="Money should be a positive value ";

// }
// });

btnCheck.addEventListener("click", function validBillAndCashAmount() {
  hideMessege();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToReturn = cashGiven.value - billAmount.value;
    //   console.log(amountToReturn);

      calculateChange(amountToReturn);
    } else {
      showMessege("cash given must be grater than bill value ");
    }
  } else {
    showMessege("invalid bill amount ");
  }
});

function hideMessege() {
  messege1.style.display = "none";
}
function calculateChange(bakaya) {
  showMessege(`aapka bakaya hai ${bakaya}`);
  for (let i = 0; i < availaibleNotes.length; i++) {
    const numberOfNotes = Math.trunc(bakaya / availaibleNotes[i]);

        noOfNotes[i].innerText=numberOfNotes;
        console.log(noOfNotes.innerText);
    bakaya %= availaibleNotes[i];
  }
}

function showMessege(messege2) {
  messege1.style.display = "block";
  messege1.innerText = messege2;
}
