import { spawn, ChildProcess } from "child_process";
import { Compiler } from "webpack";

export = class ElectronReloader {
  command?: string;
  args?: string[];
  activeProcess?: ChildProcess;
  constructor(command: string, args: string[]) {
    this.assignParameters(command, args);
  }
  apply(compiler: Compiler): void {
    compiler.hooks.afterCompile.tap("electronReloader", () => {
      if (this.activeProcess) this.activeProcess.kill();
      this.activeProcess = spawn(this.command as string, this.args as string[], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      });
    });
  }
  assignParameters(command: string, args: string[]) {
    if (typeof command !== 'string') {
      throw new Error('Your command have to be a string');
    } 
    if (!Array.isArray(args)) {
      throw new Error('Your args have to be contain in array');
    }
    this.command = command;
    this.args = args;
  }
};
