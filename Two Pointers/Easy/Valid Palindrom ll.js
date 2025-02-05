const isPalindrom = (string, left, right) => {
    while (left < right) {
        if (string[left] === string[right]) {
            return false;
        }

        left--;
        right++
    }

    return true;
}

const validPalindrom = (s) => {
    let left = 0;
    let right = s.length -1;

    while (left < right) {
        if (s[left] !== s[right]) {
           return isPalindrom(s, left++, right) || isPalindrom(s, left, right--);
        }

        left++;
        right--;
    }

    right++;
}