# News app

Application written in TypeScript, using the redux-toolkit to manage the state of the application, allowing you to search for the latest news - from the selected country. It uses an external free API

## Technologies:
<p>Project is created with:</p>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>TypeScript version: 4.9.5</li>
  <li>React version: 18.2.0</li>
  <li>react-intl version: 6.3.2</li>
  <li>react-router-dom version: 6.9.0</li>
  <li>@reduxjs/toolkit version: 1.9.3</li>
  <li>react-icons version: 4.8.0</li>
  <li>react-device-detect version: 2.2.3</li>
  <li>styled-components version: 5.3.9</li>
</ul>

## Check on your own
https://vekaltor.github.io/news-app/

![image](https://github.com/Vekaltor/news-app/assets/56607344/38afa552-3b95-4d6a-a00d-820f5b9ad8a9)


![image](https://github.com/Vekaltor/news-app/assets/56607344/04e18382-a2b8-4cea-9f7b-45bcc46741f8)


## Setup
To run this project, install it locally using npm:
````
$ cd ../{project-folder}

$ npm install

$ npm start
````

## Features:

### - News pagination
  Thanks to the external API https://newsapi.org, I implemented a pagination display of items (news), when scrolling down,
the application downloads new news and displays them successively below the current ones.


### - News per country
  Thanks to react-router-dom, the user is able to move between news from different parts of the world (country).
  
### - Internalization
  The implemented intl library allows the user to change the language of the application (PL/EN to choose).

### - Layout changer
  The application allows you to change the way the news is displayed, tile or list design.
 
### - POPUP
  When you click on a (news) item, a pop-up opens with more information about that news item.
The popup disables scrolling on the page.
  

