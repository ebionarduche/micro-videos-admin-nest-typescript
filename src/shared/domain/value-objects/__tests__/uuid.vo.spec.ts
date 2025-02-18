import { InvalidUuidError, Uuid } from "../uuid.vo";

describe('UUID  Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
  test('should throw error when invalid uuid', () => {
    expect(() => {
      new Uuid('invalid-uuid');
    }).toThrowError(new InvalidUuidError());

    expect(validateSpy).toHaveBeenCalledTimes(1) 
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();  
    expect(uuid.id).toBeDefined();
    expect(validateSpy).toHaveBeenCalledTimes(1) 

   })

  test('show accept a valid uuid', () => {
    const validUuid = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
    const uuid = new Uuid(validUuid);
    expect(uuid.id).toBe(validUuid)
    expect(validateSpy).toHaveBeenCalledTimes(1) 

  })
});