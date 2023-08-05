class Matrix {
    public rows: number
    public columns: number
    public data: number[][]

    constructor (data: number[][]) {
        this.data = data
    }

    /**
     * Check if a matrix is compatible for multiplication with another matrix
     * @param other the other matrix
     */
    canMultiplyWith (other: Matrix): boolean {
        return this.columns === other.rows
    }

    multiply (other: Matrix) {
        const dotProduct = []

        // TODO: fix, it is ugly
        for (let j = 0; j < this.data.length; j++) {
            for (let r = 0; r < this.data.length; r++) {
                const row = this.data[j]
                for (let c = 0; c < row.length; c++) {
                    if (Number.isNaN(dotProduct[j][r])) dotProduct[j][r] = 0
                    dotProduct[j][r] += row[c] * other.data[c][r]
                }
            }
        }
    }
}
