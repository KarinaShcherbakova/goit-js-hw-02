function getShippingCost (country) {
    let result;

    switch (country.toLowerCase()) {
        case "china": 
            result =  `Shipping to ${country} will cost ${100} credits`;
            break;
        case "chile": 
            result =  `Shipping to ${country} will cost ${250} credits`;
            break;
        case "australia": 
            result =  `Shipping to ${country} will cost ${170} credits`;
            break;
        case "jamaica": 
            result =  `Shipping to ${country} will cost ${120} credits`;
            break;
        default: 
            result =  'Sorry, there is no delivery to your country';
    }

    return result;
}

console.log(getShippingCost("AustRalia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("GErmany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"