export const xValues = [1.28, 1.68, 2.08, 2.48, 2.88, 3.28, 1.1, 2.4, 3.6, 1.7, 3.9];
export const yValues: number[] = [];

export const calculateY = (x: number): number => {
    const sum = 2.5 ** 3 + x ** 3;
    return (1 + Math.sin(sum) ** 2) / Math.cbrt(sum);
};

for (let i = 0; i < xValues.length; i++) {
    yValues.push(calculateY(xValues[i]));
}

export const TaskA = (): string[] => {
    const results: string[] = [];
    for (let i = 0; i < 6; i++) {
        results.push(`x${i + 1} = ${xValues[i]} -> y = ${yValues[i].toFixed(6)}`);
    }
    return results;
};

export const TaskB = (): string[] => {
    const results: string[] = [];
    for (let i = 6; i < xValues.length; i++) {
        results.push(`x${i - 5} = ${xValues[i]} -> y = ${yValues[i].toFixed(6)}`);
    }
    return results;
};

console.log("=== Задача А ===");
TaskA().forEach(line => console.log(line));

console.log("\n=== Задача Б ===");
TaskB().forEach(line => console.log(line));