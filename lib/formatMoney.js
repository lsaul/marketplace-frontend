const formatMoney = (amount = 0) => {
    const options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }

    //check if it's a clean dollar amount ie. no cents
    if (amount % 100 === 0){
        // if it's clean set the fraction digit format to zero
        options.minimumFractionDigits = 0;
    }

    const formatter = Intl.NumberFormat('en-US', options);

    return formatter.format(amount / 100);
}

export default formatMoney;