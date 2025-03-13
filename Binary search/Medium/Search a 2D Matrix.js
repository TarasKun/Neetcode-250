const searchMatrix = (matrix, target) => {
    let left = 0;
    let right = matrix.length - 1;
    let targetArr = [];

    while (left <= right) {
        const middle = Math.floor((left + right)/2);
        const matrixMiddleElem = matrix[middle]

        if (matrixMiddleElem[0] > target) {
            right = middle - 1;
            continue;
        }

        if (matrixMiddleElem[matrixMiddleElem.length - 1] < target) {
            left = middle + 1;
            continue;
        }

        targetArr = matrixMiddleElem;
        break;
    }

    let leftIndex = 0;
    let rightIndex = targetArr.length - 1;

    while (leftIndex <= rightIndex) {
        const middle = Math.floor((leftIndex + rightIndex)/2);

        if (targetArr[middle] > target) {
            rightIndex = middle - 1;
            continue;
        }

        if (targetArr[middle] < target) {
            leftIndex = middle + 1;
            continue;
        }

        return true;
    }

    return false;
}

