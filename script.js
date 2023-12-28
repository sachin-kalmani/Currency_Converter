//Paste Your api url with the key and run it or else it will not run properly.
let api=``;   

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

    //Ajax object is creates
    var xhr=new XMLHttpRequest();
    //sending the request to the api 
    xhr.open("GET",api,true);
    xhr.send()

    //checking the status of the response
    xhr.onreadystatechange=function(){
        //check the status
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
