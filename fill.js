Bitmap.prototype.fill = function (row, col, new_color) {
    const old_color = this.grid[row][col];
    if (old_color === new_color) return;
    this.setColor(row, col, new_color);
    var queue = [];

    queue.push(row, col);

    while (typeof queue !== 'undefined' && queue.length !== 0) {

        let currentRow = queue.shift();
        let currentCol = queue.shift();
        let neighbors = [
            [(currentRow - 1), currentCol], //up
            [(currentRow + 1), currentCol], //down
            [currentRow, (currentCol - 1)], //left
            [currentRow, (currentCol + 1)], //right
        ];
        for (i = 0; i < neighbors.length; i++) {
            let nextRow = neighbors[i][0];
            let nextCol = neighbors[i][1];
            let next = this.grid[nextRow][nextCol];

            if (next === old_color) {
                this.setColor(nextRow, nextCol, new_color);
                queue.push(nextRow, nextCol);
            } else {
                continue;
            }
        }
    }
}