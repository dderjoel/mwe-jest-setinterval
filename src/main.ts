import Subject from "./subject.class";

const subj = new Subject();

process.on("exit", (exitcode: number) => {
  if (exitcode == 0) {
    process.stdout.write(`\nDone Success. :)\n`);
  } else {
    process.stderr.write(`\nDone with code: ${exitcode}\n`);
  }
  subj.persist();
  process.stdout.write("exiting.");
  process.exit(exitcode);
});

process.on("SIGINT", (signal: "SIGINT") => {
  process.stdout.write(`\ncaught ${signal}`);
  process.exit(13);
});

process.on("SIGTERM", (signal: "SIGTERM") => {
  process.stdout.write(`\ncaught ${signal}`);
  process.exit(13);
});

subj.doWork("peanut");
