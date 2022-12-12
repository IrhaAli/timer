// Another method: `put it inside of event listener to listen to keyboard input (look at snake exc).
const interactiveTimer = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Handles the following user input: ctrl + c, b, 1, ... , 9 seconds
const handleUserInput = function (timer) {
  let numTimer = Number(timer);
  if (timer === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  } else if (numTimer < 0) {
    console.log("Time travel is not yet possible. A positive number is needed.");
  } else if (Number.isNaN(numTimer)) {
    (timer === 'b') ? process.stdout.write('\x07') : console.log("Time is a quantifiable object. Hence, a number must be provided.");
  }
  else if (1 <= numTimer && numTimer <= 9) {
    console.log(`Setting timer for ${timer} seconds.`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numTimer * 1000);
  } else {
    console.log(`Timer must be between 1 and 9 seconds`);
  }
};

interactiveTimer();