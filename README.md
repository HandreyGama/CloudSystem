## Project Overview
The project consists of a website developed using Flask (Python web framework) and HTML, CSS, JavaScript for styling and functionality. The site offers information about the Cloud System, its solutions, and contact details.

## Folder Structure
```
static: Contains all the static files like images, css, and js.
css: Holds the custom styles for the website.
js: Contains JavaScript code for handling carousel functionality.
templates: Holds the HTML templates used to render the webpages.
index.html
: The main page of the website, including header, footer, and sections showcasing information about the Cloud System, its solutions, and contact details.
main.py
: Flask script that runs the application and serves the HTML pages when requested.
requirements.txt
: Lists all dependencies required for the project to run smoothly.
vercel.json
: Configuration file used by Vercel to build and deploy the project on their platform.
```
## Running the Project
To run this project locally, you will need Python 3.x installed on your machine. Install the required dependencies using pip:

```
pip install -r requirements.txt
```
Then, start the Flask development server by running the following command in the root folder of the project:

```
flask run
```
By default, the app will run on port 5000. Open your browser and navigate to http://127.0.0.1:5000/ to view the website.

To deploy this project on Vercel, you can create an account at https://vercel.com/, install their CLI, and use the following command in the root folder of the project:

```
vercel deploy --prod
```
This will build and deploy the project to Vercel's servers. The live URL of your site can be found in the Vercel dashboard.