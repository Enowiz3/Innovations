"""
Prerequisite:
1. Logged into the Gmail
2. Generated the app Password
"""

# Sending Emails Using Python's smtplib and email libraries

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv, dotenv_values

load_dotenv()
print(os.getenv("MY_EMAIL"))


"""
# Define Email parameters
EMAIL_ADDRESS = os.getenv("GMAIL_USER")  # Your Gmail address
EMAIL_PASSWORD = os.getenv("GMAIL_PASS")  # Your App Password


# Email content
TO_ADDRESS = "enochpark89@gmail.com"  # Recipient's email address
SUBJECT = "Backup Completed Successfully"
BODY = 
Hello,

This is a notification to inform you that the backup process has completed successfully.

Best regards,
Your Backup System
"""
