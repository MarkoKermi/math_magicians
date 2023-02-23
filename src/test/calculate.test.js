import calculate from '../components/logic/calculate';

describe('testing calculate function', () => {
  test(' return {total: null, next: null, operation: null} when buttonName is AC',
    () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });
  test('return total: 8,next: null,operation: null;} when buttonName is =', () => {
    const obj = {
      total: 6,
      next: 4,
      operation: '-',
    };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });
});
