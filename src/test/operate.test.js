import operate from '../components/logic/operate';

describe('test function', () => {
  test('expect 5 + 5 to be "10"', () => {
    expect(operate(5, 5, '+')).toBe('10');
  });
  test('expect 12 - 5 to be "7"', () => {
    expect(operate(12, 5, '-')).toBe('7');
  });
  test('expect 5 x 6 to be "30"', () => {
    expect(operate(5, 6, 'x')).toBe('30');
  });
  test('expect 10 ÷ 0 to be "It is not divisable by 0."', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });
});
