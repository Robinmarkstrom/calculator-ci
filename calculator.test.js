import { add, subtract, multiply, divide } from './calculator.js';

describe('Calculator functions', () => {
    
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(add(1, 2)).toBe(3);
        });
        
        test('should add negative numbers', () => {
            expect(add(-1, -2)).toBe(-3);
        });
        
        test('should handle decimals', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3)
        });
    });
    
    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(subtract(1, 2)).toBe(-1);
        });
        
        test('should handle negative results', () => {
            expect(subtract(1, 3)).toBe(-2);
        });
    });
    
    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(multiply(2, 2)).toBe(4);
        });
        
        test('should multiply by zero', () => {
            expect(multiply(2, 0)).toBe(0);
        });
        
        test('should multiply negative numbers', () => {
            expect(multiply(-2, 2)).toBe(-4);
        });
    });
    
    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(divide(2, 1)).toBe(2);
        });
        
        test('should handle decimals', () => {
            expect(divide(1, 2)).toBe(0.5);
        });
        
        test('should throw error when dividing by zero', () => {
            expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
        });
    });
});