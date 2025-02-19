// ["neet","code","love","you"] -> 4,4,4,3,#neetcodeloveyou

const encode = (strs) => {
    if (strs.length === 0) return strs;

    let length = '';
    let res = '#';

    for (let i = 0; i < strs.length; i++) {
        length += strs[i].length + ',';
        res += strs[i];
    }

    return length + res;
}

// console.log(encode(["we", "say", ":", "yes", "!@#$%^&*()"]));

// 4,4,4,3,#neetcodeloveyou -> ["neet","code","love","you"]
const decode = (str) => {
    const res = [];
    const sizes = [];
    let i = 0;

    while (str[i] !== '#') {
        let current = '';

        while (str[i] !== ',') {
            current += str[i];
            i++;
        }

        sizes.push(+current);
        i++
    }
    i++;

    // // [ 4, 4, 4, 3 ]
    sizes.forEach((size) => {
        res.push(str.substr(i, size));
        i += size;
    })

    return res;
}

console.log(decode('2,3,1,3,10,#wesay:yes!@#$%^&*()'));

