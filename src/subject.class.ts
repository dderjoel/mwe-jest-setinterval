import { writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
export default class Subject {
  private counter = 0;
  public doWork(inputdata: string): void {
    if (!inputdata) {
      process.exit(100); // exit if no input was given
    }
    setInterval(() => {
      this.counter++;
      if (this.counter > 10e2) {
        process.exit(0);
      }
      if (this.counter % 10e1 == 0) {
        console.log(this.counter);
      }
    }, 0);
  }
  public persist(): void {
    const data = JSON.stringify(this.counter);
    const path = join(tmpdir(), basename(__filename));
    writeFileSync(path, data);
    console.log(`Persisted to ${path}`);
  }
}
