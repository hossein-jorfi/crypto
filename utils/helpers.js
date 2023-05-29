const formatPrice = price => {
     if (price < 0.01) {
          return price.toFixed(8).replace(/\.?0+$/, '');
     } else {
          return price.toFixed(2);
     }
}

function formatCryptoPrice(price) {
     // if (price > 0) {
     //      return price.toFixed(1)
     // } else if (price < 0) {
     //      return price.toFixed(1)
     // }
     if (price >= -2 && price <= 2 ) {
          const rounded = (+price).toFixed(8); // Round the price to 8 decimal places
          const trimmed = rounded.replace(/\.?0+$/, ''); // Remove trailing zeros
     
          return trimmed;
     } else {
          return price.toFixed(1)
     }
}

const dollerChange = (percentChange, currentValue) => {
     const decimalValue = percentChange / 100;
     const dollarChange = decimalValue * currentValue;
     return dollarChange;
}

export { formatPrice, formatCryptoPrice, dollerChange };