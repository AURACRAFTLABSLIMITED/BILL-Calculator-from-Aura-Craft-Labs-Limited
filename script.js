document.getElementById("bill-form").addEventListener("submit", function(event) {
    // 1. Prevent form from refreshing the page
    event.preventDefault();

    // 2. Grab inputs and convert to numbers
    const totalBill = parseFloat(document.getElementById("tb1").value);
    const percentBill = parseFloat(document.getElementById("bp1").value);
    const numberPeople = parseInt(document.getElementById("np1").value);

    // 3. Validation check
    if (numberPeople <= 0) {
        alert("Number of people must be at least 1.");
        return;
    }

    // 4. Calculate total per person
    const totalWithTip = totalBill + (totalBill * percentBill / 100);
    const perPerson = totalWithTip / numberPeople;

    // 5. Update UI gracefully with formatted currency (.toFixed(2))
    const resultBox = document.getElementById("result-box");
    const resultAmount = document.getElementById("result-amount");

    resultAmount.textContent = `$${perPerson.toFixed(2)}`;
    resultBox.classList.remove("hidden");
});
