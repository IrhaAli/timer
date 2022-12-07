const args = process.argv;
let alarmTimes = args.slice(2);
for (alarm of alarmTimes) {
  if (Number(alarm) < 0) {
    console.log("Time travel is not yet possible. A positive number is needed.");
  } else if (Number.isNaN(Number(alarm))) {
    console.log("Time is a quantifiable object. Hence, a number must be provided.");
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(alarm) * 1000);
  }
}

// FIX THIS ISSUE: ALARM SOUND NOT WORKING