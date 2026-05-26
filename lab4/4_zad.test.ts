import { describe, expect, it } from 'vitest';
import { calculateY, TaskA, TaskB } from './4_zad';

describe('Задачи А и Б', () => {
    it('calculateY должна возвращать число, не бесконечность', () => {
        const y = calculateY(1.28);
        expect(typeof y).toBe('number');
        expect(isFinite(y)).toBe(true);
    });

    it('TaskA должна возвращать массив строк с результатами', () => {
        const results = TaskA();
        expect(results.length).toBe(6);
        expect(results[0]).toContain('x1 = 1.28');
        expect(results[5]).toContain('x6 = 3.28');
    });

    it('TaskB должна возвращать столько же ответов, сколько было передано x', () => {
        const results = TaskB();
        expect(results.length).toBe(5);
        expect(results[0]).toContain('x1 = 1.1');
        expect(results[4]).toContain('x5 = 3.9');
    });
});