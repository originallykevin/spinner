const arr = ['\r|   ', '\r/   ', '\r-   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r|   ', '\n']

let count = 0;
for (const spin of arr) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, count += 123);
};