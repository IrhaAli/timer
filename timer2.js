const prompt = require("prompt-sync")({ sigint: true });
const interactiveTimer = function() {
  let condition = false;
  while (!condition) {
    let timer = prompt('Timer set for (in seconds): ');
    if (Number(timer) < 0) {
      console.log("Time travel is not yet possible. A positive number is needed.");
    } else if (Number.isNaN(Number(timer))) {
      console.log("Time is a quantifiable object. Hence, a number must be provided.");
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(timer));
    }
  }
};

interactiveTimer();
// how to catch ctrl + c
// then you have to manually exit of the process (check how to exit a process)