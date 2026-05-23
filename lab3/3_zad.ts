const CalculateY = (x: number) => {
    const sum = 2.5 ** 3 + Math.pow(x, 3);
    return (1 + Math.sin(sum) ** 2) / Math.cbrt(sum);
};

console.log("Задача А");
console.log("   x    |     y");
console.log(`  1.28  | ${CalculateY(1.28).toFixed(6)}`);
console.log(`  1.68  | ${CalculateY(1.68).toFixed(6)}`);
console.log(`  2.08  | ${CalculateY(2.08).toFixed(6)}`);
console.log(`  2.48  | ${CalculateY(2.48).toFixed(6)}`);
console.log(`  2.88  | ${CalculateY(2.88).toFixed(6)}`);
console.log(`  3.28  | ${CalculateY(3.28).toFixed(6)}`);

console.log("\nЗадача Б");
console.log("   x    |     y");
console.log(`  1.1   | ${CalculateY(1.1).toFixed(6)}`);
console.log(`  2.4   | ${CalculateY(2.4).toFixed(6)}`);
console.log(`  3.6   | ${CalculateY(3.6).toFixed(6)}`);
console.log(`  1.7   | ${CalculateY(1.7).toFixed(6)}`);
console.log(`  3.9   | ${CalculateY(3.9).toFixed(6)}`);