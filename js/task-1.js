"use strict"

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } 

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}