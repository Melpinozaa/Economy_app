const form = document.getElementById("transactionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  let transactionFormData = new FormData(form);
  
  insertRowInTransactionTable(transactionFormData)
});

function insertRowInTransactionTable(transactionFormData){
    let transactionTableRef = document.getElementById("transactionTable");
    let newTransactionRow = transactionTableRef.insertRow(-1);

    let newTransactionCell = newTransactionRow.insertCell(0);
    newTransactionCell.textContent = transactionFormData.get("typeSelector");
  
    newTransactionCell = newTransactionRow.insertCell(1);
    newTransactionCell.textContent = transactionFormData.get("descripcion");
  
    newTransactionCell = newTransactionRow.insertCell(2);
    newTransactionCell.textContent = transactionFormData.get("amount");
  
    newTransactionCell = newTransactionRow.insertCell(3);
    newTransactionCell.textContent = transactionFormData.get("category");
}