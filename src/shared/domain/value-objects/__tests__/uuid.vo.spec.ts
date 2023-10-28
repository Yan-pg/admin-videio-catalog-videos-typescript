import { validate as uuidValidate } from "uuid";

import { InvalidUuidError, Uuid } from "../uuid.vo";

describe("Uuid Unit Test", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  test("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrowError(new InvalidUuidError());

    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should create valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
  });

  test("should throw error when uuid is invalid", () => {
    const uuidFake = "922c12cf-73bf-4238-bb8a-a068cf0c08c4";

    const uuid = new Uuid(uuidFake);
    expect(uuid.id).toBe(uuidFake);

    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
