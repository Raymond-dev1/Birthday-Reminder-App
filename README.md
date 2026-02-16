## Birthday-Reminder-App 

An automated email notification system that sends personalized birthday greetings to users. Built with Node.js and MongoDB, this app runs a daily cron job to check for birthdays and deliver timely email celebrations.

# Features

- Automatic daily birthday checks 
- Configurable cron job scheduling
- MongoDB integration for user data storage
- Simple and Lightweight Express server


# Technologies 

- Node.js - Runtime environment
- MongoDB - Database for user storage
- Nodemailer - Email delivery service
- Express - Web framework
- node-cron - Job scheduling

# Prerequisites

Before running this application, ensure you have:

- Node.js (v14 or higher) installed
- MongoDB installed and running locally, or a MongoDB Atlas account
- SMTP email credentials (Gmail, SendGrid, etc.)

# Database Schema 

The app expects user models with the following structure :
{
    username: 
    email,
    dob,
    createdAt.
}

# Installation 

- Node latest version installed 
- npm install 
- configure environment variables- (Refer to .env.example)
- npm run dev

# Description 

1. The cron job automatically checks for birthdays daily at the scheduled time
2. Users with matching birthdays receive personalized email greetings
3. Check the console logs for execution confirmations and any errors

# Project Purpose

This project was built to explore real-world applications of cron-jobs in Node.js .
- Query databases on a schedule [7am daily] . 
- Fetches celebrating user(s).
- Send email greeting(s) programmatically. 

