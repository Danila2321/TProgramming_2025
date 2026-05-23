import { Cat } from '../lab5/Cat';
import { test, expect } from 'vitest';

test('getName() возвращает имя кошки', () => {
    const cat = new Cat("Мурка", 3, "Сиамская");
    const result = cat.getName();
    expect(result).toBe("Мурка");
});

test('getAge() возвращает возраст кошки', () => {
    const cat = new Cat("Мурка", 3, "Сиамская");
    const result = cat.getAge();
    expect(result).toBe(3);
});
