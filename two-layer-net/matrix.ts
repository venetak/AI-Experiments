class Matrix {
    public rows: number
    public columns: number
    public data: number[][] = []

    /**
     * Check if a matrix is compatible for multiplication with another matrix
     * @param other the other matrix
     */
    canMultiplyWith (other: Matrix): boolean {
        return this.columns === other.rows
    }

    multiply (other: Matrix) {
        const dotProduct = []

        for (let rowA = 0; rowA < this.data.length; rowA++) {
            const row = this.data[rowA]
            if (dotProduct[rowA] === undefined) dotProduct[rowA] = []
            for (let colA = 0; colA < row.length; colA++) {
                const rowB = other.data[colA]
        
                for(let colB = 0; colB < rowB.length; colB++) {
                    console.log(row[colA])
                    console.log(rowB[colB])
        
                    console.log(`[${rowA}${colB}]`)
                    if (dotProduct[rowA][colB] === undefined) dotProduct[rowA][colB] = 0
                    dotProduct[rowA][colB] += row[colA] * rowB[colB]
                }
            }
        }

        return dotProduct
    }
}

export default Matrix
