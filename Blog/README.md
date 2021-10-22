# udacity-blogpost - Project
The blogpost website project of the udacity frontend web developer course.
The project shows a blog-website with an overview of the blogposts and a page where the latest blogpost can be seen in its fullest.
The focus in this project was on creating a godd looking, responsive website with few navigating functions. Thus the text is just an example text and some navigations aren't meaningful, for example every blogpost on the homepage navigates to the latest blogpost. 
The intention was to show my abilities using grid and flex and so on.

## Project Setup
* Open the `index.html` - file in a browser (chrome is recommended)

## What You're Getting
```bash
├── README.md - This file.
├── index.html # Page where it all starts
└── src
    ├── assets # contains everything needed for styling
    │   ├── icons # contains all icons used in this project 
    │   ├── images # contains all images used in this project
    │   └── stylesheets # contains all stylesheets used in this project
    |   |   ├── blogHome.css # contains the specific styles for the blogHome.html page
    |   |   ├── blogPost.css # contains the specific styles for the blogPost.html page
    |   |   ├── commonStyling.css # contains the styles used commonly in the project
    |   |   ├── layout.css # contains the commonly used layout-style
    |   |   ├── main.css # imports all other stylesheets
    |   |   ├── navigation.css # contains the specific styles for the navigation area
    |   |   └── subscribe.css # contains the specific styles for the subscribe.html page
    └── components
    │   ├── blogHome.html # contains an overview of all blogposts 
    │   ├── blogpost.html # contains the content for the latest blogpost
    │   └── subscribe.html # contains a form to subscribe (just for showcase, no real functionality)
