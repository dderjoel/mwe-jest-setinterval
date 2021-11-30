import Subject from "../src/subject.class";

describe("subject test suite", () => {
  jest.spyOn(console, "log").mockImplementation();
  it("should exit on invalid input", (done) => {
    const spyExit = jest.spyOn(process, "exit").mockImplementation(((
      nu: number
    ) => {
      expect(nu).toEqual(100);
      spyExit.mockRestore();
      done();
    }) as any);

    expect(() => new Subject().doWork("")).not.toThrow();
  });
  it.skip("should work on valid input", (done) => {
    const spyExit = jest.spyOn(process, "exit").mockImplementation(((
      nu: number
    ) => {
      expect(nu).toEqual(1);
      spyExit.mockRestore();
      done();
    }) as any);

    expect(() => new Subject().doWork("valid")).not.toThrow();
  });
});
