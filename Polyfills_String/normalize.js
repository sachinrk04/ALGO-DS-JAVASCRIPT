// Diif- 
// The normalize() method returns the Unicode Normalization Form of the string.

String.prototype.myNormalize = function (form) {
    if (typeof form !== 'string') {
        form = 'NFKD';
    }
    if (!['NFC', 'NFD', 'NFKC', 'NFKD'].includes(form)) {
        throw new Error('Invalid normalization form');
    }
    return this.replace(/[\u0300-\u036f]/g, function (match) {
        return match.myNormalize(form);
    });
}

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);