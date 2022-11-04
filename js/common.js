function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal);

    //calculate tax
    const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setTextElementValueById('tax-amount',taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount);
}