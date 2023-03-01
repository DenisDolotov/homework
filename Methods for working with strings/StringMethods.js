export function capitalizeFirstLetter(string) {
    if (typeof string === "string") {

        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    } else {

        throw TypeError("Argument is not a string");

    }
}


export function normalizeSpaces(string) {
    if (typeof string === "string") {

        return string
            .replace(/(?<marks>(\.{3})|(\?!)|([\.\u2026\,;!?:]))/g, "$<marks> ")
            .replace(/ +(?<marks>(\.{3})|(\?!)|([\.\u2026\,;!?:]))/g, "$<marks> ")
            .replace(/ +/g, " ")
            .trim();

    } else {

        throw TypeError("Argument is not a string");

    }
}


export function countWords(string) {
    if (typeof string === "string") {
        const onlyWordsString = clearStringFromMarks(string);

        if (!onlyWordsString) {
            return 0;
        }

        return onlyWordsString.split(" ").length;

    } else {

        throw TypeError("Argument is not a string");

    }
}


export function countUniqueWords(string) {

    if (typeof string === "string") {

        const onlyWordsString = clearStringFromMarks(string);

        if (!onlyWordsString) {
            return 0;
        }

        const arr = onlyWordsString.split(" ");
        const mapOfWordCount = new Map();
        const result = [];

        arr.forEach(
            x => mapOfWordCount.set(x.toLowerCase(), arr.reduce(
                (count, item) => count += (x.toUpperCase() === item.toUpperCase()) ? 1 : 0, 0)
            )
        );

        mapOfWordCount.forEach((value, key) => result.push(`${key} - ${addSuffixToCount(value)}`));

        return result.join(", ");

    } else {

        throw TypeError("Argument is not a string");

    }
}



function addSuffixToCount(x) {

    const suffixes = ['', '', 'а', 'а', 'а', '', '', '', '', ''];

    return `${x} раз${9 < x && x < 20 ? "" : suffixes[x % 10]}`;

}

function clearStringFromMarks(str) {

    return normalizeSpaces(str).replace(/[\.\u2026\,;!?:-]/g, "").replace(/ +/g," ");

}