// Hash Set with encoded strings solution
// Time complexity: O(1)
// Space complexity: O(1)

const isValidSudoku = board => {
    const seen = new Set();
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;
            
            const rowKey = `row ${r} ${val}`;
            const colKey = `col ${c} ${val}`;
            const boxKey = `box ${Math.floor(r / 3)}-${Math.floor(c / 3)} ${val}`;
            
            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                return false;
            }
            
            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }
    
    return true;
};

// Rows, Columns and Boxes arrays of sets solution
// Time complexity: O(1)
// Space complexity: O(1)

const isValidSudokuSets = board => {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;
            
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
                return false;
            }
            
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIdx].add(val);
        }
    }
    
    return true;
};
