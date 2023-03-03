export function multiply(a, b) {
    let aIsNeg, bIsNeg;
    let aStr, bStr;

    if (a.startsWith("-")) {

        aIsNeg = true;
        aStr = a.slice(1);

    } else {
        aStr = a;
    }
    if (b.startsWith("-")) {

        bIsNeg = true;
        bStr = b.slice(1);

    } else {
        bStr = b;
    }

    return "-".repeat(aIsNeg ^ bIsNeg) + multiplyAbs(aStr, bStr); //Красиво придумал, правда?

}


export function divide(a, b) {
    let aIsNeg, bIsNeg;
    let aStr, bStr;

    if (a.startsWith("-")) {

        aIsNeg = true;
        aStr = a.slice(1);

    } else {
        aStr = a;
    }
    if (b.startsWith("-")) {

        bIsNeg = true;
        bStr = b.slice(1);

    } else {
        bStr = b;
    }
    return "-".repeat(aIsNeg ^ bIsNeg) + divideAbs(aStr, bStr);
}


export function sum(a, b) {
    let aIsNeg, bIsNeg;
    let aStr, bStr;

    if (a.startsWith("-")) {

        aIsNeg = true;
        aStr = a.slice(1);

    } else {
        aStr = a;
    }
    if (b.startsWith("-")) {

        bIsNeg = true;
        bStr = b.slice(1);

    } else {
        bStr = b;
    }


    if (!aIsNeg && !bIsNeg) {

        return clearSum(aStr, bStr);

    } else if (!aIsNeg && bIsNeg) {

        return subtractAbs(aStr, bStr);

    } else if (aIsNeg && !bIsNeg) {

        return subtractAbs(bStr, aStr);

    } else {

        return "-" + clearSum(aStr, bStr);

    }

}


export function subtract(a, b) {

    let aIsNeg, bIsNeg;
    let aStr, bStr;

    if (a.startsWith("-")) {

        aIsNeg = true;
        aStr = a.slice(1);

    } else {
        aStr = a;
    }
    if (b.startsWith("-")) {

        bIsNeg = true;
        bStr = b.slice(1);

    } else {
        bStr = b;
    }

    if (!aIsNeg && !bIsNeg) {

        return subtractAbs(aStr, bStr);

    } else if (!aIsNeg && bIsNeg) {

        return clearSum(aStr, bStr);

    } else if (aIsNeg && !bIsNeg) {

        return "-" + clearSum(aStr, bStr);

    } else {

        return subtractAbs(bStr, aStr);

    }
}


function divideAbs(a, b) {
    if (!isNotBigger(b, a)) {
        return 0;
    }
    let aTmp, counter;
    let result = "";
    let carry = "";
    const diff = a.length - b.length;

    for (let i = 0; i <= diff; i++) {

        if (i > 0) {
            aTmp = carry + a.slice(b.length + i - 1, b.length + i);
        } else {
            aTmp = a.slice(0, b.length);
        }

        carry = "";
        counter = 0;
        while (isNotBigger(b, aTmp)) {

            aTmp = clearSubtract(aTmp, b);
            counter += 1;

        }
        if (counter > 0) {

            result = result + counter;

        } else {

            result = result + "0";

        }

        carry = aTmp != 0 ? aTmp : "";

    }

    return result.replace(/^0+/, "");

}

function subtractAbs(aStr, bStr) { //  a > 0, b > 0



    if (isNotBigger(bStr, aStr)) {

        return clearSubtract(aStr, bStr);

    } else {

        return "-" + clearSubtract(bStr, aStr);

    }

}

function multiplyAbs(aStr, bStr) { //aStr > 0, bStr > 0
    let first, second;

    if (aStr.length >= bStr.length) {

        first = aStr;
        second = bStr;

    } else {

        first = bStr;
        second = aStr;

    }

    let result = "0";

    [...second].reverse().map((element, index) => {
        result = sum(result, clearMultiplyOneDigit(first, element) + "0".repeat(index));
    });

    return result;

}


function clearMultiplyOneDigit(first, second) {

    let mul = '';
    let carry = 0;
    let tmp;
    let firstOne;
    let secondOne = Number(second);
    for (let i = first.length - 1; i >= 0; i--) {
        firstOne = Number(first.charAt(i));


        tmp = firstOne * secondOne + carry;

        if (tmp >= 10) {

            mul = (tmp % 10) + mul;
            carry = Math.floor(tmp / 10);

        } else {

            mul = tmp + mul;
            carry = 0;

        }
    }
    if (carry) {

        mul = carry + mul;

    }

    return mul;

}

function clearSum(aStr, bStr) { //a > 0, b > 0
    let first, second;
    if (aStr.length >= bStr.length) {
        first = aStr;
        second = bStr;
    } else {
        first = bStr;
        second = aStr;
    }

    let sum = '';
    let carry = 0;
    let diff = first.length - second.length;
    let tmp;
    let firstOne;
    let secondOne;
    for (let i = first.length - 1; i >= 0; i--) {
        firstOne = Number(first.charAt(i));
        secondOne = Number(second.charAt(i - diff));

        tmp = firstOne + secondOne + carry;

        if (tmp >= 10) {

            sum = (tmp % 10) + sum;
            carry = Math.floor(tmp / 10);

        } else {

            sum = tmp + sum;
            carry = 0;

        }
    }
    if (carry) {

        sum = carry + sum;

    }

    return sum;

}


function clearSubtract(first, second) {  //a > 0, b > 0, a > b
    if (!isNotBigger(second, first)) {
        throw RangeError(`ошибка в clearSubtract first:${first} >= second:${second}, ${isNotBigger(second, first)}`);
    }
    let substraction = '';
    let carry = 0;
    let diff = first.length - second.length;
    let tmp;
    let firstOne, secondOne;

    for (let i = first.length - 1; i >= 0; i--) {

        firstOne = (Number(first.charAt(i)) % 10);
        secondOne = (Number(second.charAt(i - diff)) % 10);

        if ((firstOne - carry) < secondOne) {

            tmp = 10 + firstOne - secondOne - carry;
            carry = 1;

        } else {

            tmp = firstOne - secondOne - carry;
            carry = 0;

        }
        substraction = tmp + substraction;

    }

    const result = substraction.replace(/^0+/, "");

    return result ? result : "0";

}


function isNotBigger(a, b) {
    const aLength = a.length;
    const bLength = b.length;

    if (a === b) return true;
    if (aLength > bLength) {

        return false;

    } else if (aLength == bLength) {

        for (let i = 0; i < aLength; i++) {
            if (a[i] > b[i]) {

                return false;

            }else if (a[i] < b[i]){

                return true;
                
            }
        }

    }

    return true;

}