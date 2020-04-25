import { spawn, ChildProcess } from "child_process";
import { Compiler } from "webpack";

export default class ElectronReloader {
  command: string;
  args: string[];
  activeProcess?: ChildProcess;
  constructor(command: string, args: string[]) {
    this.command = command;
    this.args = args;
  }
  apply(compiler: Compiler): void {
    compiler.hooks.afterCompile.tap("electronReloader", () => {
      if (this.activeProcess) this.activeProcess.kill();
      this.activeProcess = spawn(this.command, this.args, {
        shell: true,
        env: process.env,
        stdio: "inherit",
      });
    });
  }
}
