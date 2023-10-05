const cardName = document.getElementById('card-name');
const cardNameInput = document.getElementById('card-name-input');
const cardNumber = document.getElementById('card-number');
const cardNumberInput = document.getElementById('card-number-input');
const cardMonth = document.getElementById('card-month');
const cardMonthInput = document.getElementById('card-month-input');
const cardYear = document.getElementById('card-year');
const cardYearInput = document.getElementById('card-year-input');
const confirmBtn = document.getElementById('confirm-button');
const cvc = document.getElementById('cvc');
const cvcInput = document.getElementById('cvc-input');
const cardNameError = document.getElementById('card-name-error');
const cardNumberError = document.getElementById('card-number-error');
const cardDateError = document.getElementById('card-expiry-error');
const cvcError = document.getElementById('cvc-error');
const continueBtn = document.getElementById('continue-button');

// CARD NUMBER VALIDATION

function formatCardNumber(input) {
    let cardno = input.value.replace(/\D/g, '');

    if (!/^\d+$/.test(cardno)) {
        cardNumberError.textContent = "Wrong Input, numbers only!";
        cardNumberError.classList.remove('hidden');
        cardNumberInput.classList.remove('border-lightGrayishViolet');
        cardNumberInput.classList.add('border-red-700');
    }
    else {
        cardNumberError.textContent = "";
        cardNumberError.classList.add('hidden');
        cardNumberInput.classList.add('border-lightGrayishViolet');
        cardNumberInput.classList.remove('border-red-700');

        let formattedNumber = "";
        for (let i = 0; i < cardno.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedNumber += " ";
            }
            formattedNumber += cardno.charAt(i);
        }

        input.value = formattedNumber;
        cardNumber.textContent = formattedNumber;
    }
}

// CARD MONTH VALIDATION


cardMonthInput.addEventListener('input', () => {
    cardMonth.textContent = cardMonthInput.value;
    const inputValue = cardMonthInput.value;
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(inputValue)){
        cardDateError.textContent = "Wrong input, numbers only";
        cardDateError.classList.remove('hidden');
        cardMonthInput.classList.remove('border-lightGrayishViolet');
        cardMonthInput.classList.add('border-red-700');
        cardMonthInput.value = inputValue.replace(/\D/g, '');
    }
    else{
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardMonthInput.classList.add('border-lightGrayishViolet');
        cardMonthInput.classList.remove('border-red-700');
    }
    let iscardMonthEmpty = (cardMonthInput.value == "") ? true : false;

    const intValue = parseInt(inputValue);
    if (intValue > 12 || intValue < 1) {
        cardDateError.textContent = "Invalid Month!";
        cardDateError.classList.remove('hidden');
        cardMonthInput.classList.remove('border-lightGrayishViolet');
        cardMonthInput.classList.add('border-red-700');
    }
    else {
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardMonthInput.classList.add('border-lightGrayishViolet');
        cardMonthInput.classList.remove('border-red-700');
    }
    if (iscardMonthEmpty) {
        cardDateError.textContent = "Can't be blank!";
        cardDateError.classList.remove('hidden');
        cardMonthInput.classList.remove('border-lightGrayishViolet');
        cardMonthInput.classList.add('border-red-700');
        cardMonth.textContent = "00";
    }
    else {
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardMonthInput.classList.add('border-lightGrayishViolet');
        cardMonthInput.classList.remove('border-red-700');
    }
});

// CARD YEAR VALIDATION


cardYearInput.addEventListener('input', () => {
    cardYear.textContent = cardYearInput.value;
    const inputValue = cardYearInput.value;
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(inputValue)){
        cardDateError.textContent = "Wrong input, numbers only";
        cardDateError.classList.remove('hidden');
        cardYearInput.classList.remove('border-lightGrayishViolet');
        cardYearInput.classList.add('border-red-700');
        cardYearInput.value = inputValue.replace(/\D/g, '');
    }
    else{
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardYearInput.classList.add('border-lightGrayishViolet');
        cardYearInput.classList.remove('border-red-700');
    }
    let iscardYearEmpty = (cardYearInput.value == "") ? true : false;

    const intValue = parseInt(inputValue);
    if (intValue > 35 || intValue < 20) {
        cardDateError.textContent = "Invalid Year!";
        cardDateError.classList.remove('hidden');
        cardYearInput.classList.remove('border-lightGrayishViolet');
        cardYearInput.classList.add('border-red-700');
    }
    else {
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardYearInput.classList.add('border-lightGrayishViolet');
        cardYearInput.classList.remove('border-red-700');
    }
    if (iscardYearEmpty) {
        cardDateError.textContent = "Can't be blank!";
        cardDateError.classList.remove('hidden');
        cardYearInput.classList.remove('border-lightGrayishViolet');
        cardYearInput.classList.add('border-red-700');
        cardYear.textContent = "00";
    } else {
        cardDateError.textContent = "";
        cardDateError.classList.add('hidden');
        cardYearInput.classList.add('border-lightGrayishViolet');
        cardYearInput.classList.remove('border-red-700');
    }
});

// CVC VALIDATION


cvcInput.addEventListener('input', () => {
    cvc.textContent = cvcInput.value;
    const inputValue = cvcInput.value;
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(inputValue)){
        cvcError.textContent = "Wrong input, numbers only";
        cvcError.classList.remove('hidden');
        cvcInput.classList.remove('border-lightGrayishViolet');
        cvcInput.classList.add('border-red-700');
        cvcInput.value = inputValue.replace(/\D/g, '');
    }
    else{
        cvcError.textContent = "";
        cvcError.classList.add('hidden');
        cvcInput.classList.add('border-lightGrayishViolet');
        cvcInput.classList.remove('border-red-700');
    }
    let iscardCvcEmpty = (cvcInput.value == "") ? true : false;

    if (iscardCvcEmpty) {
        cvcError.textContent = "Can't be blank!";
        cvcError.classList.remove('hidden');
        cvcInput.classList.remove('border-lightGrayishViolet');
        cvcInput.classList.add('border-red-700');
        cvc.textContent = "000";
    } else {
        cvcError.textContent = "";
        cvcError.classList.add('hidden');
        cvcInput.classList.add('border-lightGrayishViolet');
        cvcInput.classList.remove('border-red-700');
    }
});

// CARD NAME VALIDATION

cardNameInput.addEventListener('input', () => {
    cardName.textContent = cardNameInput.value;
    const inputValue = cardNameInput.value;
    const textPattern = /^[a-zA-Z]+$/;
    if (!textPattern.test(inputValue)){
        cardNameError.textContent = "Wrong input, text only";
        cardNameError.classList.remove('hidden');
        cardNameInput.classList.remove('border-lightGrayishViolet');
        cardNameInput.classList.add('border-red-700');
        cardNameInput.value = inputValue.replace(/^[a-zA-Z]/g, '');
    }
    else{
        cardNameError.textContent = "";
        cardNameError.classList.add('hidden');
        cardNameInput.classList.add('border-lightGrayishViolet');
        cardNameInput.classList.remove('border-red-700');
    }
    let iscardNameEmpty = (cardNameInput.value == "") ? true : false;

    if (iscardNameEmpty) {
        cardNameError.textContent = "Can't be blank!";
        cardNameError.classList.remove('hidden');
        cardNameInput.classList.remove('border-lightGrayishViolet');
        cardNameInput.classList.add('border-red-700');
        cardName.textContent = "JANE APPLESEED";
    } else {
        cardNameError.textContent = "";
        cardNameError.classList.add('hidden');
        cardNameInput.classList.add('border-lightGrayishViolet');
        cardNameInput.classList.remove('border-red-700');
    }
});

confirmBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let isNameEmpty = (cardNameInput.value == "") ? true : false;
    let isCvcEmpty = (cvcInput.value == "") ? true : false;
    let isYearEmpty = (cardYearInput.value == "") ? true : false;
    let isMonthEmpty = (cardMonthInput.value == "") ? true : false;
    let cardno = cardNumberInput.value.replace(/\D/g, '');

    if (isMonthEmpty || isYearEmpty || isCvcEmpty || isNameEmpty || !/^\d+$/.test(cardno)) {
        cardDateError.textContent = "Fields Can't be blank!";
        cardDateError.classList.remove('hidden');
    }
    else if (!isMonthEmpty || !isYearEmpty || !isCvcEmpty || !isNameEmpty || !!/^\d+$/.test(cardno)) {
        let pageURL = confirmBtn.getAttribute("href");
        window.location.href = pageURL;
    }
});

continueBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let pageURL = continueBtn.getAttribute("href");
    window.location.href = pageURL;
})