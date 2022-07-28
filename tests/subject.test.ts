import Subject from "../src/subject.class";

describe("subject test suite", () => {
  let logSpy: jest.SpyInstance;

  beforeAll(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation();
  });

  it("should exit on invalid input", (done) => {
    jest.useFakeTimers();
    jest.spyOn(process, "exit").mockImplementation(((nu: number) => {
      expect(nu).toEqual(100);
      done();
    }) as any);
    new Subject().doWork("");
    jest.runAllTimers();
  });

  ["many", "different", "valid", "inputs"].forEach((input) => {
    it("should run on valid input", (done) => {
      jest.useFakeTimers();
      jest.spyOn(process, "exit").mockImplementation(((nu: number) => {
        expect(nu).toEqual(input.length);
        done();
      }) as any);
      new Subject().doWork(input);
      jest.runAllTimers();
    });
  });
  afterAll(() => {
    logSpy.mockRestore();
  });
});
