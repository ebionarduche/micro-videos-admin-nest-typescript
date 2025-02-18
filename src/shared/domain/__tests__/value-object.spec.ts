import { ValueObject } from "../value-object";

 
class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly value: string, readonly value2: number) {
    super();
  }
}
describe('ValueObject Unit Tests', () => {
  test('should be equals', () => {
    const value = new StringValueObject('test');
    const value2 = new StringValueObject('test');
    expect(value.equals(value2)).toBeTruthy();

    const complexValue = new ComplexValueObject('test', 1);
    const complexValue2 = new ComplexValueObject('test', 1);
    expect(complexValue.equals(complexValue2)).toBeTruthy();

  })

  test('should not be equals', () => {
    const value = new StringValueObject('test');
    const value2 = new StringValueObject('test2');
    expect(value.equals(value2)).toBeFalsy();

    const complexValue = new ComplexValueObject('test', 1);
    const complexValue2 = new ComplexValueObject('test', 2);
    expect(complexValue.equals(complexValue2)).toBeFalsy();
  })

  test('should not be equals when null', () => {
    const value = new StringValueObject('test');
    expect(value.equals(null as any)).toBeFalsy();
  })
});