# BASIC STRUCTURE

This code sample in React JS is to show how to use "react-router-dom" to add navigation bar to first page of react web application and redirect to other pages of website. 

### AIM :
The question is " How to redirect to other pages from first page of website?" and the condition is "The first page and other pages should be independent which means anything shown on first page must not be presented on another page. Also, a navigation bar must come only on the pages I want."

### How to do?

First you need to create a basic default react app. For this, Write the code below:
> npx create-react-app projectname

Check if it is running or not by writing the code below.
> npm start

If the default react app runs fine, let's proceed.<br/>
To achieve the aim, first you need to install "react-router-dom".
>npm install "react-router-dom"

Now when react-router-dom in installed we can use it in our code. I have created 4 .js files which are named as Home, About, Navigation and First Page.  These files are added in the components folder and used as components in the project.

The code is given in the files named as "App.js" and components folder.

1. First Page : It is the first default page that will be shown to users.
![image](https://user-images.githubusercontent.com/63490144/122632731-5adc9280-d0f2-11eb-8315-d827d3e694d8.png)

2. Home Page: This is just a random page created to see how to show independent fresh page where no code of "first page" or "App.js" is shown.
![image](https://user-images.githubusercontent.com/63490144/122632743-692aae80-d0f2-11eb-8446-59486f9274c5.png)

3. About Page: This page was written to see how to add navigation component to web page separately.
![image](https://user-images.githubusercontent.com/63490144/122632749-76479d80-d0f2-11eb-9b71-89bbb1e76ebe.png)


4. Navigation.js: This is navigation bar component added to pages as per will.
![image](https://user-images.githubusercontent.com/63490144/122632765-85c6e680-d0f2-11eb-8d8b-ae42905e1d90.png)


#### Folder Structure
![image](https://user-images.githubusercontent.com/63490144/122632827-df2f1580-d0f2-11eb-9eaf-729c1c6998f6.png)


### Reference Site:
1. [Blog by golangprograms](https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html)
2. [ReactJS | Router by Geeks For Geeks](https://www.geeksforgeeks.org/reactjs-router/)




