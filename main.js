// fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6b88373d4424400b8013e95a3a11f29d")
// .then((result) => {
//     let myData = result.json();
//     return myData;
// }).then((currency) => {
//     console.log(currency.rates);
// })

let myApi = "5a93b0ea021bf33f7eae928d"
let dropList = document.querySelectorAll(".drop-list select");
let fromCurrency = document.querySelector(".from select")
let toCurrency = document.querySelector(".to select")
let getButton = document.querySelector("form button")


for(let i = 0; i < dropList.length; i++) {
    for(currency_code in country_list) {
        //Add selected to First Select
        let slected;
        if (i == 0) {
            slected = currency_code == "USD" ? "selected" : ""
        }
        //Add selected to Second Select
        if (i == 1) {
            slected = currency_code == "EGP" ? "selected" : ""
        }
        //Creating Option Tage With Passing Currency Code As a text And Value
        let optionTag = `<option value="${currency_code}" ${slected}>${currency_code}</option>`
        //Inserting Option Tag In Selected Tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target) // Calling LoadFlag With Passing TargetElement As An Argument
    })
}

function loadFlag(element) {
    for(code in country_list) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${country_list[code]}/flat/64.png`
        }
    }
}

window.addEventListener("load", () => {
    getExchangeRate()
})

getButton.addEventListener("click", (e) => {
    e.preventDefault()
    getExchangeRate()
})

let exchangIcon = document.querySelector('.icon')
exchangIcon.addEventListener("click", () => {
    let tempCod = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = tempCod
    loadFlag(fromCurrency)
    loadFlag(toCurrency)
    getExchangeRate()
})

function getExchangeRate() {
    let amount = document.querySelector(".amount input")
    let exchangeRateTxt = document.querySelector(".exchang")
    let amountValue = amount.value
    //If User Dont Enter Any Value Or Enter 0 Then We'll Put 1 Value By Default In The Input Field
    if (amountValue == "" || amountValue == "0") {
        amount.value = "1"
        amountValue = 1
    }

    exchangeRateTxt.innerText = "Geeting Exchange Rate..."
    let url = `https://v6.exchangerate-api.com/v6/${myApi}/latest/${fromCurrency.value}`
    // Fetching Api Response And Returning It With Parsing Into Js Obj And In Another Then Method Receiving That Obg
    fetch(url).then(response => response.json()).then((result) => {
        let exchangeRate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountValue * exchangeRate).toFixed(2)
        exchangeRateTxt.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`

    })
}





// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6b88373d4424400b8013e95a3a11f29d



















































// // Start Change Image 
// let fromImage = document.querySelector(".from img")
// let fromSelect = document.querySelector(".from select")

// fromSelect.addEventListener("input", function() {
//     if (fromSelect.value === "EGY" ) {
//         fromImage.src = "https://flagsapi.com/EG/flat/64.png";
//     }else if (fromSelect.value === "USA") {
//         fromImage.src = "https://flagsapi.com/US/flat/64.png";
//     }else if (fromSelect.value === "EUR") {
//         fromImage.src = "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg";
//     }else if (fromSelect.value === "AED") {
//         fromImage.src = "https://flagsapi.com/AE/flat/64.png";
//     }else if (fromSelect.value === "SAR") {
//         fromImage.src = "https://flagsapi.com/SA/flat/64.png";
//     }
// })


// let toImage = document.querySelector(".to img")
// let toSelect = document.querySelector(".to select")

// toSelect.addEventListener("input", function() {
//     if (toSelect.value === "USA" ) {
//         toImage.src = "https://flagsapi.com/US/flat/64.png";
//     }else if (toSelect.value === "EGY") {
//         toImage.src = "https://flagsapi.com/EG/flat/64.png";
//     }else if (toSelect.value === "EUR") {
//         toImage.src = "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg";
//     }else if (toSelect.value === "AED") {
//         toImage.src = "https://flagsapi.com/AE/flat/64.png";
//     }else if (toSelect.value === "SAR") {
//         toImage.src = "https://flagsapi.com/SA/flat/64.png";
//     }
// })

