const buttonConvert = document.querySelector('.button-convert')
const convertOption = document.querySelector('.option-convertido')
const toConvert = document.querySelector('.convert1')




    

async function converter(){

    const currencyData = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL')
    const data = await currencyData.json()
    
   
    const inputValor = parseFloat(document.querySelector('.inputvalor').value);
    const valueToConvert = document.getElementById('valorConverter')
    const valueConverted = document.getElementById('valorConvertido')
    const dolarToday = parseFloat(data.USDBRL.high);
    const euroToday =  parseFloat(data.EURBRL.high);
    const libraToday = parseFloat(data.GBPBRL.high);
    const bitcoinToday = parseFloat(data.BTCBRL.high);
    const realToday = 1;
    
    valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
       }).format(inputValor)

       const rates = {
        'real': realToday,
        'dolar': dolarToday,
        'euro': euroToday,
        'libra': libraToday,
        'bitcoin': bitcoinToday
    };

    const fromCurrency = toConvert.value;
    const toCurrency = convertOption.value;

    if(fromCurrency !== toCurrency){
        const convertedValue = inputValor * (rates [fromCurrency] / rates[toCurrency]);

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: toCurrency === 'real' ? 'BRL' : toCurrency === 'dolar' ? 'USD' : toCurrency === 'libra' ? 'GBP' : 'BTC'
        }).format(convertedValue);
    } 



    // if(convertOption.value == 'dolar'){
    //     valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
    //         style: 'currency',
    //         currency: 'USD'
    //        }).format(inputValor / dolarToday);
    // }

    // if(convertOption.value == 'euro'){
    //     valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
    //         style: 'currency',
    //         currency: 'EUR'
    //        }).format(inputValor / euroToday);
    // }

    // if(convertOption.value == 'bitcoin'){
    //     valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
    //         style: 'currency',
    //         currency: 'BTC'
    //     }).format(inputValor/bitcoinToday);
    // }

    // if(convertOption.value == 'libra'){
    //     valueConverted.innerHTML = new Intl.NumberFormat('en-GB',{
    //         style: 'currency',
    //         currency: 'GBP'
    //     }).format(inputValor/libraToday);
    // }

    
    

}

function chanceimg(){
    const flagCurrency = document.getElementById('us-img')
    const nameCurrency = document.getElementById('name-currency-converted')


    if(convertOption.value == 'dolar'){
        nameCurrency.innerHTML = 'Dolar'
        flagCurrency.src ='./us.png'
    }
    if(convertOption.value == 'euro'){
        nameCurrency.innerHTML = 'Euro'
        flagCurrency.src ='./euro.png'
    }

    if(convertOption.value == 'bitcoin'){
        nameCurrency.innerHTML = 'Bitcoin'
        flagCurrency.src = './bitcoin.png'
    }
    
    if(convertOption.value == 'libra'){
        nameCurrency.innerHTML = 'Libra Esterlina';
        flagCurrency.src = './libra.png'
    }

    if(convertOption.value == 'real'){
        nameCurrency.innerHTML = 'Real';
        flagCurrency.src = './br.png'
    }
   
}

function chanceimgToConvert(){
    const flagCurrency = document.getElementById('br-img')
    const nameCurrency = document.getElementById('name-currency-toConvert')

    if(toConvert.value == 'dolar'){
        nameCurrency.innerHTML = 'Dolar'
        flagCurrency.src ='./us.png'
    }

    if(toConvert.value == 'real'){
        nameCurrency.innerHTML = 'Real'
        flagCurrency.src = './br.png'
    }
    
    if(toConvert.value == 'euro'){
        nameCurrency.innerHTML = 'Euro'
        flagCurrency.src ='./euro.png'
    }

    if(toConvert.value == 'libra'){
       nameCurrency.innerHTML = 'Libra Esterlina';
        flagCurrency.src = './libra.png'
    }

    if(toConvert.value == 'bitcoin'){
        nameCurrency.innerHTML = 'Bitcoin'
        flagCurrency.src = './bitcoin.png'
    }

}


buttonConvert.addEventListener('click', converter);
convertOption.addEventListener('change', chanceimg);
toConvert.addEventListener('change', chanceimgToConvert);





