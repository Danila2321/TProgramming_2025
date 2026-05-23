import {it, expect} from 'vitest';
import {b, yValues} from './4_zad.js';

    it('y для x=1.28 должен быть вычислен верно', () => {
        const x = 1.28;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[0]).toBeCloseTo(expected, 6);
    });

    it('y для x=1.68 должен быть вычислен верно', () => {
        const x = 1.68;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[1]).toBeCloseTo(expected, 6);
    });

    it('y для x=2.08 должен быть вычислен верно', () => {
        const x = 2.08;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[2]).toBeCloseTo(expected, 6);
    });

    it('y для x=2.48 должен быть вычислен верно', () => {
        const x = 2.48;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[3]).toBeCloseTo(expected, 6);
    });

    it('y для x=2.88 должен быть вычислен верно', () => {
        const x = 2.88;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[4]).toBeCloseTo(expected, 6);
    });

    it('y для x=3.28 должен быть вычислен верно', () => {
        const x = 3.28;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[5]).toBeCloseTo(expected, 6);
    });

    it('y для x=1.1 должен быть вычислен верно', () => {
        const x = 1.1;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[6]).toBeCloseTo(expected, 6);
    });

    it('y для x=2.4 должен быть вычислен верно', () => {
        const x = 2.4;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[7]).toBeCloseTo(expected, 6);
    });

    it('y для x=3.6 должен быть вычислен верно', () => {
        const x = 3.6;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[8]).toBeCloseTo(expected, 6);
    });

    it('y для x=1.7 должен быть вычислен верно', () => {
        const x = 1.7;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[9]).toBeCloseTo(expected, 6);
    });

    it('y для x=3.9 должен быть вычислен верно', () => {
        const x = 3.9;
        const sum = b ** 3 + x ** 3;
        const expected = (1 + Math.sin(sum) ** 2) / Math.sqrt(sum);
        expect(yValues[10]).toBeCloseTo(expected, 6);
    });
