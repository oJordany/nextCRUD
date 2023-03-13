<div align="center">

  <a href="https://ojordany.github.io/nextCRUD/"><img width="175px" src="https://user-images.githubusercontent.com/84668196/224700290-5b96b40f-7169-40ac-81ff-12d45b88a85b.png">

  <h1>nextCRUD</h1>
  
  <strong>A small customer registration application built with NextJS and Firebase.</strong>
  
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/license/ojordany/nextCRUD?style=social"></a>
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/stars/ojordany/nextCRUD?style=social"/></a>
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/forks/ojordany/nextCRUD?style=social"/></a>
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/issues/ojordany/nextCRUD?style=social"/></a>
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/repo-size/ojordany/nextCRUD?style=social"/></a>
  <a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/commit-activity/w/ojordany/nextCRUD?style=social"/></a>
</div>

<h2></h2>
<h2>&#x2714 List of Contents</h2>
<ul type="pointer">
  <li><a href="#about">About</a></li>
  <li><a href="#usage">Using Local Backend</a></li>
  <li><a href="#result">Result</a></li>
  <li><a href="#requirements">Requirements</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#authors">Author</a></li>
</ul>

<h2></h2>
<h2><a name="about">&#x1F4D6 About</a></h2>
<p>➥This project was developed as part of my studies on NextJS.</p>
<p>➥It is a simple CRUD system using a form and a table of registered customers with navigation between components done by changing states.</p>
<p>➥In addition, this application uses hooks to better organize the logic of the components.</p>
<p>➥However, the backend project was developed just for testing using Firebase.</p>
<p>➥Therefore, it is still not possible to persist data in Firestore database.</p>
<p>➥For that you can create your own firestore database following the <a href="#usage">Using Local Backend</a> section.</p>
<p>➥So the link to github pages is just to view the frontend of the project.</p>

<h2></h2>
<h2><a name="usage">👨‍💻 Using Local Backend</a></h2>

➥First download the files from that repository

➥To use your own backend, create your firestore database pelo [firebase](https://console.firebase.google.com/?pli=1.)

➥Then go to your project settings and get your API_KEY, AUTH_DOMAIN and PROJECT_ID data and insert it into a .env.local file with the following format:

~~~
NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxx
~~~

➥Then, run the following command: ```npm install```

➥Then, run the following command: ```npm run build```

➥Then, run the following command: ```npm start```

➥Then, with your own firebase data you can create your own entries.

<h2></h2>
<h2><a name="result">&#x1F50E Result</a></h2>
<span><br/>➥ See the frontend project by clicking here.<a href="https://ojordany.github.io/nextCRUD/" alt='next'><img align="center"src="https://cdn.discordapp.com/attachments/897609680073941012/963207775045971988/pngwing-edit.png" alt="clique-cursor" width="60px"></a></span>

![image](https://user-images.githubusercontent.com/84668196/224709189-7ef00bb4-900a-4deb-a1b1-7d8b18c0751f.png)
![image](https://user-images.githubusercontent.com/84668196/224709364-61f27ce9-6f5e-4f65-bb8f-bf9e5d8f21a3.png)

<h2></h2>
<h2><a name="requirements">&#x2699 Requirements</a></h2>

~~~json
"dependencies": {
    "firebase": "^8.8.0",
    "next": "13.2.3",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
"devDependencies": {
    "@types/node": "18.14.6",
    "@types/react": "^18.0.28",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.7",
    "typescript": "^4.9.5"
  }
~~~

<h2></h2>
<h2><a name="license">&#x1F4DC License</a></h2>

<div align="center"><a href="https://github.com/oJordany/nextCRUD/"><img src="https://img.shields.io/github/license/ojordany/ReactRegistrationSystem?style=social"></a></div>

~~~
MIT License

Copyright (c) 2022 Luiz Jordany de Sousa Silva

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
~~~

<h2></h2>
<h2><a name="authors">&#x1F465 Author</a></h2>
<!-- Jordany's Profile-->
<a href="https://github.com/oJordany/ReactRegistrationSystem"><img src="https://user-images.githubusercontent.com/84668196/178501845-e4b3b3a0-02e4-46ff-8447-ddf8e0a962e7.png" width="180px" height="180px" align="left"></a> 
<h1>Luiz Jordany de Sousa Silva</h1>
<strong>Computer Science Student | Developer | intern at SEDEPTI-BC-UFPA</strong>
<br/><br/>
<a href="https://instagram.com/ojordany/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
•
<a href = "mailto:jordanyluiz@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
•
<a href="https://www.linkedin.com/in/luiz-silva-759a491b9" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  
<br/><br/><br/>
