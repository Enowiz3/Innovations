import tkinter
import customtkinter
from pytube import YouTube

# System Settings:
customtkinter.set_appearance_mode("System")
customtkinter.set_default_color_theme("blue")

# Our app frame
app = customtkinter.CTk()
app.geometry("720x480")
app.title("Youtube Downloader")

# Adding UI Elements
title = customtkinter.CTkLabel(app, text="Insert a youtube link")
title.pack(padx=10, pady=10)
button = customtkinter.CTkButton(app, fg_color="red")  # single color name
button.pack(padx=10, pady=10)
# Link input

# Run app
app.mainloop()
