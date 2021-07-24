function splitTableItems<T>(data: T[], initialValue: { [key: string]: T[] }, prop: keyof T): { [key: string]: T[]; } {
    data.reduce((acc, curr) => {
        if (curr[prop]) {
            acc[Object.keys(initialValue)[0]].push(curr)
            return acc
        }
        acc[Object.keys(initialValue)[1]].push(curr)
        return acc
    }, initialValue)

    return initialValue
}

export default splitTableItems
