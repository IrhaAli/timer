const args = process.argv;
let alarmTimes = args.slice(2);

const timer = function(alarmTimes) {
  for (const alarm of alarmTimes) {
    let numAlarm = Number(alarm);
    if (numAlarm < 0) {
      console.log(`Time travel is not yet possible. A positive number is needed. ${alarm} will simply not do.`);
    } else if (Number.isNaN(numAlarm)) {
      console.log(`Time is a quantifiable object. Hence, a number must be provided. ${alarm} will simply not do.`);
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numAlarm * 1000);
    }
  }
};

timer(alarmTimes);