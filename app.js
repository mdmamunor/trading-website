const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');


// depositBtn.addEventListener('click', function (event) {
//     event.preventDefault()
//     let depositBox = document.getElementById('deposit-box');
//     // console.log(depositBox.value);
//     let availableBalance = parseFloat(balanceField.innerText)
//     let inputAmount = parseFloat(depositBox.value)
//     if (isNaN(inputAmount) || inputAmount < 0) {
//         depositBox.value = ''
//         return alert('Please enter amount of money in number')
//     }
//     balanceField.innerText = inputAmount + availableBalance;
//     depositBox.value = ''
//     console.log(depositBox.value);
// })

function getInputValue(boxID) {
    let inputBox = document.getElementById(boxID);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = ''
        return alert('Please enter amount of money in number')
    }
    inputBox.value = '';
    return inputAmount;
}

// update balance

depositBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let availableAmount = parseFloat(balanceField.innerText)
    let inputAmount = getInputValue('deposit-box')
    if (inputAmount > 0) {
        balanceField.innerText = inputAmount + availableAmount
    }
}
)

// Buy coins

buyBtc.addEventListener('click', function () {
    updatePortfolio('btc-box')
})
buyEth.addEventListener('click', function () {
    updatePortfolio('eth-box')
})

// Update Portfolio

function updatePortfolio(boxID) {
    let availableAmount = parseFloat(balanceField.innerText)
    let coinAmount = getInputValue(boxID)
    if (coinAmount > 0) {
        let totalExpense
        if (boxID == 'btc-box') {
            totalExpense = 10 * coinAmount

            if (totalExpense > availableAmount) {
                return alert('Not enough balance')
            }
            btcField.innerText = coinAmount
        }
        else if (boxID == 'eth-box') {
            totalExpense = 5 * coinAmount


            if (totalExpense > availableAmount) {
                return alert('Not enough bababab')
            }
            ethField.innerText = coinAmount
        }
        balanceField.innerText = availableAmount - totalExpense
    }
}

