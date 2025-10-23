const schedule = require("node-schedule");
const {sendBirthdayGreetings} = require("./reminder")

const scheduleJob =()=>{

const birthdayJob =schedule.scheduleJob("0, 7 *  * *", async () => {
  try {
    console.log("cron job running 7am daily");
    await sendBirthdayGreetings();
    console.log("cron job executed at:", new Date().toLocaleTimeString());
  } catch (error) {
    console.error("error executing cron", error);
    throw error;
  }
});
 
return birthdayJob;
}

module.exports = {
    scheduleJob
}