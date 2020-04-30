import ElectronReloader from "../src/index";
import child_process, { ChildProcess } from 'child_process';
import { Compiler } from "webpack";

const spawnOptions = { shell: true, env: process.env, stdio: "inherit" }

const compilerMock = { hooks: { afterCompile: {} } } as Compiler

compilerMock.hooks.afterCompile.tap = (name: any, fn: Function) => { fn() };

describe("Electron Reloader", () => {
    let spySpawn: unknown;
    beforeEach(() => {
      spySpawn = jest.spyOn(child_process, 'spawn').mockReturnValue({kill: () => true} as ChildProcess);
    })
  it("should be a instance of a function", () => {
    expect(ElectronReloader).toBeInstanceOf(Function);
  });
  it("should throw an error if command isn't a string", () => {
      const instance = () => new ElectronReloader(null as any, []);
      expect(instance).toThrowError('Your command have to be a string');
  });
  it("should throw an error if args isn't an array", () => {
      const instance = () => new ElectronReloader('npm', 'TEST' as any);
      expect(instance).toThrowError('Your args have to be contain in array');
  });
  it("should call spawn method with the arguments provided", () => {
      const instance = new ElectronReloader('npm', ['run', 'electron:start']);
      instance.apply(compilerMock)
      expect(spySpawn).toHaveBeenCalledWith('npm', ['run', 'electron:start'], spawnOptions);
  });
  it("should assign spawn process to activeProcess property", () => {
      const instance = new ElectronReloader('npm', ['run', 'electron:start']);
      instance.apply(compilerMock)
      expect(instance.activeProcess).toHaveProperty('kill');
  });
  it("should kill activeProcess and create a new spawn process", () => {
      const instance = new ElectronReloader('npm', ['run', 'electron:start']);
      instance.apply(compilerMock)
      const spyActiveProcess = jest.spyOn(instance.activeProcess as ChildProcess, 'kill');
      instance.apply(compilerMock)
      expect(spyActiveProcess).toHaveBeenCalled();
  });
});
