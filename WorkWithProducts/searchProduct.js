export function productFilter(arr, string) {
    const filters = parseInputString(string);
    return arr.filter(product => compareWithFilters(product, filters));
}


function compareWithFilters(product, filters) {
    const operators = {
        '=': (a, b) => a === b,
        '>': (a, b) => a > b,
        '<': (a, b) => a < b,
        '>=': (a, b) => a === b || a > b,
        '<=': (a, b) => a === b || a < b,
        'contains': (a, b) => a.includes(b),
        'starts': (a, b) => a.startsWith(b),
        'ends': (a, b) => a.endsWith(b),
    };
    return filters.reduce(
        (acc, filter) =>
            acc && operators[filter.operator](product[filter.key](), filter.value), true
    );
}


function parseInputString(string) {
    const keys = {
        'name': 'getName',
        'price': 'getPrice',
        'quantity': 'getQuantity',
        'description': 'getDescription',
    };
    const splitInputStrings = string.split("&");
    const arrayFilters = [];
    try {
        splitInputStrings.forEach(x => {
            const filterString = x.split("-");
            if (filterString[1].match(/^[=><]/)) {
                arrayFilters.push({
                    key: keys[filterString[0]],
                    operator: filterString[1].slice(0, filterString[1].search(/\d/)),
                    value: Number(filterString[1].slice(filterString[1].search(/\d/))),
                });
            } else {
                arrayFilters.push({
                    key: keys[filterString[0]],
                    operator: filterString[1],
                    value: filterString[2],
                });
            }
        });
    } catch (err) {
        throw SyntaxError("Error while parsing filter string: " + err);
    }
    return arrayFilters;
}


