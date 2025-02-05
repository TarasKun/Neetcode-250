const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[right], s[left]] = [s[left], s[right]];
        left++;
        right--
    }
}