const schedule = require('node-schedule')
const User = require('./user.models')
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "iziogbaraymond72@gmail.com",
    pass:process.env.GOOGLE_PASSWORD
  },
});

//BIRTHDAY GREETINGS SETUP
const sendBirthdayGreetings=async(recipientEmail, recipientName)=>{

    const message ={
        from: "iziogbaraymond72@gmail.com",
        to: recipientEmail, 
        subject: `Happy Birthday ${recipientName}!`
        text:`Dear ${recipientName},\n\ wishing you a wonderful birthday \n\  Best wishes \n\ Raymond `,
    }

    try{
        const info=await transport.sendMail(message)
        console.log(`Email sent to ${recipientName}`, info.response)
        return info :
    }catch(error){
        console.error(`Failed to send mail to ${recipientName}`, error)
        throw error
    }
};


//DB BIRTHDAY CHECK
const checkBirthdays= async()=>{

   const today = new Date();
   const currentMonth =today.getMonth() +1;
   const currentDay = today.getDate();

//Main DB check
    const usersWIthBirthday = await User.find({
        $expr:{
            $and:[
                {$eq: [{ $month: "$dob"},  currentMonth] },
                {$eq: [{ $dayOfMonth: "$dob "}, currentDay] }
            ]
        }
})
    if (usersWithBirthday.length === 0) {
      console.log('No birthdays today');
      return;
    }

    //extracts the email & username each
    for(const user of usersWIthBirthday){
        const recipientEmail= user.email;
        const recipientName=user.username;

    await sendBirthdayGreetings(recipientEmail, recipientName);

    console.log(`Email sent to ${recipientEmail}`)
    }
}




//cron-job--Every 7am of every day
schedule.scheduleJob(* * * * *, ()=>{
    console.log("cron job running at 7am")
      checkBirthdays()
})