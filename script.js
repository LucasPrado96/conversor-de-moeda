const buttonConvert = document.querySelector('.button-convert')
const convertOption = document.querySelector('.option-convertido')


function converter(){
    const inputValor = document.querySelector('.inputvalor').value;
    const valueToConvert = document.getElementById('valorConverter')
    const valueConverted = document.getElementById('valorConvertido')
    const dolarToday = 4.95;
    const euroToday =  5.37;
    const libraToday = 6.27;
    const bitcoinToday = 310.482;
    
    valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
       }).format(inputValor)

    if(convertOption.value == 'dolar'){
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
           }).format(inputValor / dolarToday);
    }

    if(convertOption.value == 'euro'){
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
           }).format(inputValor / euroToday);
    }

    if(convertOption.value == 'bitcoin'){
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValor/bitcoinToday);
    }

    if(convertOption.value == 'libra'){
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB',{
            style: 'currency',
            currency: 'GBP'
        }).format(inputValor/libraToday);
    }

}

function chanceimg(){
    const flagCurrency = document.getElementById('us-img')
    const nameCurrency = document.getElementById('name-currency')

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
        nameCurrency.innerHTML = 'Libra esterlina';
        flagCurrency.src = './libra.png'
    }

  
   
}

buttonConvert.addEventListener('click', converter);
convertOption.addEventListener('change', chanceimg);