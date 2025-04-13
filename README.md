# soardatathon2025

To access our website:

# intall node.js and react
 winget install Schniz.fnm
 
# Download and install Node.js:
fnm install 22

# Verify the Node.js version:
node -v

# access the app directory
cd my-app

# run the website on computer
npm start

Data source summary:
Fault line is a platform advocating for those struggling with mental health problems and issues of violence. We used 3 datasets from the LA County Department of Public Health: “Median Household Income” (https://ph-lacounty.hub.arcgis.com/search?q=chp%20median%20income), “Violent Crime Rate” (https://ph-lacounty.hub.arcgis.com/search?q=chp%20violent%20crime), “Adults with Diagnosed Depression” (https://ph-lacounty.hub.arcgis.com/datasets/lacounty::adults-with-diagnosed-depression/about). Each dataset had a number of different variables such as age, cities, etc.

Data vsualization and cleaning process:
We did our data cleaning and visualization on RStudio. First, we imported the data and noticed several discrepancies such as columns with null values, misspellings, and inconsistent titles. These errors were consistent with all three datasets. After the cleaning process, we began to visualize data. We made a number of graphs, analyzing all the variables in relation to other variables. We chose to use scatter plots as our values were all numerical. We also conducted statistical analysis for each of our graphs; we used linear regression, correlation coefficient, and r-squared, and more. In the end, we realized that our correlation coefficient was the best fit for both the models.

Website:
For our website, we started building the home page before creating a basic layout for the data pages and resources pages. We had to gather all the website hyperlinks, effectively communicate and design the page to best display the data, format the images, and make it aesthetically pleasing to viewers. We also added a written out analysis of the two graphs separately and then a summary of both.
