let api=;


const fromDropDown=document.getElementById("from-currency-select");
const toDropDown=document.getElementById("to-currency-select");
const result=document.getElementById("result");
currencies.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;

    fromDropDown.add(option);
});

currencies.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    toDropDown.add(option);
});

let convertCurrency=()=>{
   const amount=document.querySelector("#amount").value;
   const fromCurrency=fromDropDown.value;
   const toCurrency=toDropDown.value;
    var xhr=new XMLHttpRequest();
    xhr.open("GET",api,true);
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4)
        {
            var jsonData=JSON.parse(xhr.responseText);
            let fromExchangeRate=jsonData.data[fromCurrency];
            let toExchangeRate=jsonData.data[toCurrency];
            const convertedAmount=(amount/fromExchangeRate)*toExchangeRate;
            result.innerHTML=`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
    }
};
fromDropDown.addEventListener("click",convertCurrency);
toDropDown.addEventListener("click",convertCurrency);
document.querySelector("#convert-button").addEventListener("click",convertCurrency);
window.addEventListener("load",convertCurrency);
