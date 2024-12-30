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

# Define Email parameters
GMAIL_USERNAME = os.getenv("GMAIL_USERNAME")  # Your Gmail address
GMAIL_PASSWORD = os.getenv("GMAIL_PASSWORD")  # Your App Password
T0_EMAIL_ADDRESS = "enochpark89@gmail.com"

# Check the Gmail credentials
if not GMAIL_USERNAME or not GMAIL_PASSWORD:
    raise ValueError("GMAIL_USER and GMAIL_PASS environment variables not set.")

# Create message container
msg = MIMEMultipart()
msg["From"] = GMAIL_USERNAME
msg["To"] = T0_EMAIL_ADDRESS
msg["Subject"] = "The backup is now completed."

body = """
Thank you! The Backup is now complete.
"""

# Attach the body with the msg instance
msg.attach(MIMEText(body, "plain"))

## Send an email from SMTP

# try - except for error checking

try:
    # Create SMTP session.
    server = smtplib.SMTP("smtp.gmail.com", 587)
    # start TLS for security
    server.starttls()
    # Authentication
    server.login(GMAIL_USERNAME, GMAIL_PASSWORD)
    # Email content
    text = msg.as_string()
    # Sending the mail
    server.sendmail(GMAIL_USERNAME, T0_EMAIL_ADDRESS, text)
    # Terminating the session
    server.quit()

except Exception as e:
    print(f"Failed to send email. Error: {e}")
