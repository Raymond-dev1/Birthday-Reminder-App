const mongoose = require("mongoose");
const { sendEmailTest } = require("./testReminder");
const schedule = require("node-schedule");
require("dotenv").config();

const test = async () => {
    try{
  await mongoose.connect(process.env.MONGO_URI);{

  }
  console.log("Connected to MongoDB for testing.");

   schedule.scheduleJob("* * * * *", async () => {
    console.log("cron job executed at:", new Date().toLocaleTimeString());
    try {
    await sendEmailTest();
    console.log("Test email function executed");
    }catch (error){
        console.error("Error running cron job", error);
    }
});

  console.log("📅 Scheduler started - running every minute")
  console.log('CTRL + C to stop the process');

}catch (error){
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
}
};

test();
