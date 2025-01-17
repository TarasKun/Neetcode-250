const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
            continue;
        }

        if (numbers[left] + numbers[right] < target) {
            left++;
            continue;
        }

        return [left + 1, right + 1]
    }
}
