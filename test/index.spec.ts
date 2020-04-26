import ElectronReloader from "../src/index";

describe("Electron Reloader", () => {
  it("should be a instance of a function", () => {
    expect(ElectronReloader).toBeInstanceOf(Function);
  });
});
