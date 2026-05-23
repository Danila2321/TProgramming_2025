export const b = 2.5;
export const xValues = [1.28, 1.68, 2.08, 2.48, 2.88, 3.28, 1.1, 2.4, 3.6, 1.7, 3.9];
export const yValues: number[] = [];

for (let i = 0; i < xValues.length; i++) {
    const sum = b ** 3 + xValues[i] ** 3;
    yValues.push((1 + Math.sin(sum) ** 2) / Math.sqrt(sum));
}

for (let i = 0; i < 6; i++) {
    console.log(`${xValues[i]} -> ${yValues[i].toFixed(6)}`);
}

console.log("\n=== Задача Б ===");
for (let i = 6; i < xValues.length; i++) {
    console.log(`${xValues[i]} -> ${yValues[i].toFixed(6)}`);
}