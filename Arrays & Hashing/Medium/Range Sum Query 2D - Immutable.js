// Brute force
// Time complexity:O(m*n) for each query.
// Space complexity:O(1)

const NumMatrixBF = function(matrix) {
    this.matrix = matrix;
};

// [ [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5],
// ]
// [2, 1, 4, 3]
// 1) 2 + 0 + 1 // [2, 3] matrix[2][1] + matrix[2][2] + matrix[2][3]
// 2) 1 + 0 + 1 // [3, 3] matrix[3][1] + matrix[3][2] + matrix[3][3]
// 3) 0 + 3 + 0 // [4, 3] matrix[4][1] + matrix[4][2] + matrix[4][3]

NumMatrixBF.prototype.sumRegionBF = function(row1, col1, row2, col2) {
    let res = 0;

    for (let i = row2; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            res += this.matrix[i][j];
        }
    }

    return res;
};

// One Dimensional Prefix Sum
// Time complexity:O(1)
// Space complexity:O(m*n)

class NumMatrix {
    constructor(matrix) {
        this.prefixSum = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0));

        for (let row = 0; row < matrix.length; row++) {
            this.prefixSum[row][0] = matrix[row][0];

            for (let col = 1; col < matrix[0].length; col++) {
                this.prefixSum[row][col] = this.prefixSum[row][col - 1] + matrix[row][col];
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        let res = 0;

        for (let row = row1; row <= row2; row++) {
            if (col1 > 0) {
                res += this.prefixSum[row][col2] - this.prefixSum[row][col1 - 1];
            } else {
                res += this.prefixSum[row][col2];
            }
        }

        return res;
    }
}


