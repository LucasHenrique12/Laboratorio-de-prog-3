function selectionSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Encontrar o índice do menor elemento a partir de i
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (compare(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }

        // Trocar o elemento atual com o menor elemento encontrado
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Exportando a função
export { selectionSort };