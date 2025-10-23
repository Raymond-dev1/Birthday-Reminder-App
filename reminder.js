
const User = require("./user.models");
const { transporter } = require("./config/mailConfig");


//BIRTHDAY GREETINGS SETUP
const birthdayGreetings = async (recipientEmail, recipientName) => {
  const results = [];
  const message = {
    from: "iziogbaraymond72@gmail.com",
    to: recipientEmail,
    subject: `Happy Birthday ${recipientName}!`,
    text: `Dear ${recipientName},\n\ wishing you a wonderful birthday, Blessings for the year ahead and More Wins \n\  Best wishes, \nRaymond `,
  };

  try {
   await transporter
  .verify()
  .then(() => {
    console.log("Email transporter is ready to send messages");
  })
  .catch((error) => {
    console.log("error in configuring transporter", error);
  });
  
    const info = await transporter.sendMail(message);
    console.log(`Email sent to ${recipientName}`, info.response);

    results.push(info);
    return {
      status: 200,
      success: true,
      message: "Birthday Greetings Sent Successfully",
      results,
    };
  } catch (error) {
    console.error(`Failed to send mail to ${recipientName}`, error);
    throw error;
  }
};

//DB BIRTHDAY CHECK
const sendBirthdayGreetings = async () => {
  try {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    //Main DB check
    const usersWithBirthday = await User.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$dob" }, currentMonth] },
          { $eq: [{ $dayOfMonth: "$dob"}, currentDay] },
        ],
      },
    });
    if (usersWithBirthday.length === 0) {
      console.log("No birthdays today");
      return;
    }

    //extracts the email & username each
    for (const user of usersWithBirthday) {
      const recipientEmail = user.email;
      const recipientName = user.username;

      await birthdayGreetings(recipientEmail, recipientName);
      console.log("birthday greetings sent");

      await new Promise((resolve) => setTimeout(resolve, 1000)); //1 second delay
      console.log(`Email sent to ${recipientEmail}, ${recipientName}`);
    }
  } catch (error) {
    console.error("error sending birthday greetings", error);
    return { status: 500, success: false, message: "internal server error" };
  }
};


// console.log("📅 Birthday scheduler started - running at every 2mins");
// console.log("CTRL + C to stop the process");

// cron-job--Every 7am of every day
// schedule.scheduleJob('0, 7 *  * *',async ()=>{
//     console.log("cron job running at 7am")
//      await sendBirthdayGreetings();
//       console.log('Birthday greetings sent');
// })


module.exports =  {
     sendBirthdayGreetings
}





