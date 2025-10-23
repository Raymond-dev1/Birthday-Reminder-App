
// const { transporter, Ttransporter } = require("./config/mailConfig");
// const User = require("./user.models");

//TESTING
// const sendEmailTest = async () => {
//   try {
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const currentDay = today.getDate();

//     //Main DB check
//     const usersWithBirthday = await User.find({
//       $expr: {
//         $and: [
//           { $eq: [{ $month: "$dob" }, currentMonth] },
//           { $eq: [{ $dayOfMonth: "$dob" }, currentDay] },
//         ],
//       },
//     });
//     if (usersWithBirthday.length === 0) {
//       console.log("No birthdays today");
//       return;
//     }

//     //extracts the email & username each
//     const results = [];
//     for (const user of usersWithBirthday) {
//       const recipientEmail = user.email;
//       const recipientName = user.username;
//       console.log("Recipient Email:", recipientName);

//       const message = {
//         from: "Raymond",
//         to: recipientEmail,
//         subject: `Happy Birthday ${recipientName}!`,
//         text: `Dear ${recipientName},\n\n wishing you a wonderful birthday \n\n Best wishes \n\n Raymond `,
//       };

//       const info = await Ttransporter.sendMail(message);

//       console.log("mail:", info);
//       console.log("Test email sent:", info.messageId);
//       console.log(
//         `📬 Preview: https://ethereal.email/message/${
//           info.messageId.split("@")[0]
//         }`
//       );

//       results.push(info);
//     }

//     return {
//       status: 200,
//       success: true,
//       message: "Test email sent successfully",
//       results,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: 200,
//       message: "Failed to send test email",
//     };
//   }
// };

// schedule.scheduleJob("* * * * *", () => {
//   console.log("cron job running every minute");
//   sendEmailTest();
//   console.log("test email sent N");

// });
