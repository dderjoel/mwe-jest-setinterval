## Reproduce
```
git clone https://github.com/dderjoel/dderjoel/mwe-jest-setinterval
cd jest-setinterval
npm install
npm test
```

As stated in the [Stackoverflow question](https://stackoverflow.com/questions/70165786/jest-test-call-to-process-exit-in-endless-setinterval-0-using-singletons):
Jest will then complain that logs were attempted after the test.

## Why SetInterval?
`npm start` and then send `SIGINT` via <kbd>Ctrl</kbd>+<kbd>C</kbd> and see how it persist the current state in the subject.

## Problem
I want to test is the Subject validates correctly, but I am unable to spy on `process.exit()` apparently.

