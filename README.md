# Team21-TFF-Foundation-for-Children-NEW

# Description of the Project
TFF Foundation for Children web application aims to improve the idea of Football School of TFF. This application will create a source of information for students and contribute to have a better knowledge of football besides by making them to follow their development efficiently. Students will be selected assigned to some teachers and their football school calendar will be determined by them, especially when an individual student have special needs (for example, extra trainings for running). There will be skill sets and measurements to be determined by the teachers. Teachers will evaluate the performance of each student and the long run performance analysis of each student will be introduced to them. Students will be offered to events frequently which will be organized by teachers. The announcements also will be
made through the system. 
The frontend of TFF Foundation for Children was built with React.js and the backend was built with Javascript, express.js and MongoDB.

# User Documentation
   ### How to install or run the project
   To install the code, you can clone a repository from GitHub.com to your local computer to make it easier to fix merge conflicts, add or remove files, and push        larger commits. When you clone a repository, you copy the repository from GitHub.com to your local machine. Please follow [this link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)                            for further assistance. 
   <br />
   You can also access the project through our remote server by clicking [here](https://frontend-tfffc.vercel.app/).
   <br />
   ### How to report a bug
   You can inform us about any bug by creating an issue. Click [here](https://github.com/SU-CS308-22FA/Team21-TFF-Foundation-for-Children-NEW/issues).
   ### Known bugs
   Some of the pages of the project absent in the link. But you can access them by checking the student-applies-eventss branch.
   A Student applies for events, the events are added to the database but they couldn't be fetched.
   
   
# Developer Documentation
   ### How to obtain the source code
   You can obtain the souce code by opening git bash where you want to download the project and pasting this:
   "git clone https://github.com/SU-CS308-22FA/Team21-TFF-Foundation-for-Children-NEW.git".
   
   #### How to set up the project
   ##### Run these on the terminal to set up backend:
   	 cd backend
       npm install
   ##### Run these to set up frontend:
       cd frontend
       npm install
   ##### Run these to start backend:
       cd backend
       npm run dev
   ##### Run these to start frontend:
       cd frontend
       npm start
   ### The layout of the directory structure
   The backend folder includes controllers, Data Access, models, routes, server.js, and package.json file.
   The frontend folder includes public folder and source files. Source files include components, context, helpers,        hooks,        images and pages.
   ### The API Documentation
   
   Follow this [link](https://docs.google.com/document/d/e/2PACX-1vSqfLWR0hk5RT7aSSKlmuzUKv9t6kWk1XmvHh8UxuT7wU5En5WGVmMyD5dM4lIYzje8KrkQbMG4SiS0/pub).
   <br />
   
   ### The Code Documentation
   Follow this [link](https://docs.google.com/document/d/e/2PACX-1vSpyxwfpNJ9Dx5MdCeeBII8AHnLhDKPaB_mb1mX2fkJ4cTWWJXdWA9chI63jFQ5uc1N5Wb-BB717cZF/pub).



       
   ### How to build and deploy the software
   ##### The client-side of the web-app can be built by:
      cd frontend
      npm install -g serve
      serve -s build
   ##### And then can be executed by:
      npm run build
