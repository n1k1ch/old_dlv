# Dog Log Viewer

I. Prerequisites
# Run nodejs hello-world
# Add node modules to serve html/css/js content. Run server and check
# Add and run angularjs "hello-world"

II. Basic architecture
# Managing log files
#- Download from server
#- Check - is log file already in database
#- Parse log file and save it to database

# Displaying log information
#- Think - what views do we need
#- For each view ask server for data
#- Data could be saved at client side (local storage) to avoid unnecessary server calls (angular will handle it i believe) ? (+++++)
#- Display data (filter/sort/etc (what "etc" do we need?))


Two additional parts:
# Listen to email server, and download/save/parse log files just when they arrive (by node module)
# Listen to node by angular - to update view when new log file is available


Headaches:
# storing email credentials
#- email login system needed ? (++)
#- run nodejs with parameters ? (+++++)