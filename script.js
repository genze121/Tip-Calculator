const bill = document.querySelector(".billAmount");
const percentage = document.querySelector(".percentage");
const buttonElement = document.querySelector(".calculateButton");
const display = document.querySelector(".displayTotal");

buttonElement.addEventListener("click", () => {
  const billValue = bill.value;
  const percentageValue = percentage.value;
  const totalValue = billValue * (1 + percentageValue / 100);
  display.innerText = `$` + totalValue.toFixed(2);
});
