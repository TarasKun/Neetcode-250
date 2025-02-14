const calPoints = function(operations) {
    let record = [];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "C":
                record.pop();
                break;
            case "D":
                record.push((record[record.length - 1] || 0) * 2);
                break;
            case "+":
                record.push((record[record.length - 1] || 0)  + (record[record.length - 2] || 0))
                break;
            default:
                record.push(+operations[i]);
        }
    }

    return record.reduce((a, b) => a + b, 0);
};