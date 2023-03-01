export function parseArgToBigInt(a) {
    let aBigInt;
    if (typeof a === "bigint") {
        aBigInt = a;
    } else if (typeof a === "string") {
        if (a.match(/\d+n/)) {
            try {
                aBigInt = BigInt(a.slice(0, -1));
            }
            catch (err) {
                throw err;
            }

        } else if (a.match(/\d+$/)) {
            try {
                aBigInt = BigInt(a);
            }
            catch (err) {
                throw err;
            }
        } else {
            throw SyntaxError("Ошибка при парсинге строки")
        }
    } else if (typeof a === "number") {
        aBigInt = BigInt(a);
    } else {
        throw TypeError("Аргумент должен быть строкой, числом или BigInt")
    }
    return aBigInt;
}

export function sumBigInt(a, b) {
    const aBigInt = parseArgToBigInt(a);
    const bBigInt = parseArgToBigInt(b);
    return aBigInt + bBigInt;
}
export function multiplyBigInt(a, b) {
    const aBigInt = parseArgToBigInt(a);
    const bBigInt = parseArgToBigInt(b);
    return aBigInt * bBigInt;
}

export function subtractBigInt(a, b) {
    const aBigInt = parseArgToBigInt(a);
    const bBigInt = parseArgToBigInt(b);
    return aBigInt - bBigInt;
}

export function divideBigInt(a, b) {
    const aBigInt = parseArgToBigInt(a);
    const bBigInt = parseArgToBigInt(b);
    return aBigInt / bBigInt;
}



