![img](https://user-images.githubusercontent.com/16986875/70494130-3b0ffa00-1b5e-11ea-986b-1df1f0b89d9a.png)

# Hatchstone Onboarding Platform (HOP)

<img src="https://avatars1.githubusercontent.com/u/16986875?s=460&v=4" width="100"/> | <img src="https://avatars2.githubusercontent.com/u/48897407?s=460&v=4" width="100"/> | <img src="https://avatars3.githubusercontent.com/u/47937400?s=460&v=4" width="100"/> | <img src="https://avatars3.githubusercontent.com/u/48931725?s=460&v=4" width="100"/>
|-----------|-----------|-----------|-----------|
| Chris Staudinger | Dyson Sumsion | Richard Sando | Tom Smith |


## [View Live application](https://hatchstone-onboarding.netlify.com/)

--- 

## GitHub Repository Links:
* [Backend](https://github.com/tomsmi321/hatchstone-backend) 
<br>

* [Frontend](https://github.com/tomsmi321/hatchstone-frontend) 

## Figma Links:
* [Destop/Tablet](https://www.figma.com/file/rTnsMyZVXBHm8ZOPcdiSr1/HatchStone?node-id=0%3A1) <br>

* [Mobile View](https://www.figma.com/file/rTnsMyZVXBHm8ZOPcdiSr1/HatchStone?node-id=62%3A0) <br>

* [Wireframes](https://www.figma.com/file/rTnsMyZVXBHm8ZOPcdiSr1/HatchStone?node-id=224%3A0)


## Table of Contents:

* [Description](#Description:)
    * [About](##About-HOP)
    * [Functionality/Features](##Functionality/Features)
    * [Tech Stack](##Tech-Stack)
    * [Screenshots](##Screenshots)
* [Design](#Design)
    * [Design Process](##Design-Process:)
        * [Desktop](##Desktop)
        * [Mobile](##Mobile)
        * [User Stories](##User-Stories)
        * [Application Architecture](##Application-Architecture-Diagram)
        * [Dataflow Diagram](##Dataflow-Diagram)
* [Project Management](#Project-Management)

---

# **Description:**

## **About HOP**
HOP is a client onboarding platform built for Hatchstone Capital. The application was built in order to streamline the onboarding process for Hatchstone and it's clients. With this software we reduced the amount of manual work involved for Hatchstone and it's clients. Moreover, we increased the speed of the onboarding process, not to mention, creating greater transparency and clarity for Hatchstone to manage their clients' onboarding process. Lastly, the platform creates a significantly better user experience when it comes to onboarding, for both the clients and Hatchstone.

----

## **Functionality/Features**
**Client Platform:**
* Authentication
* Sign up
* Login/signout
* Reset Password
* Upload Documents (drag 'n' drop or file select)
* Create profile
* Edit profile
* In-app messaging (message Hatchstone)
* Email notifications for in-app messages
* View messages/conversations

**Admin Platform:**
* Authentication
* Sign up
* Login/signout
* Create profile
* Edit profile
* View a client
* Download a client's documents
* Approve a client (auto-email notification to client)
* In-app messaging (message clients)
* Email notifications for in-app messages
* View messages/conversations
* Client progress bars 
* Filter clients by progress or alphabetically 

---

## **Tech Stack**
* Frontend:
  * React:
    * Hooks
    * Context
    * Functional & Class Components
    * React Router
    * Styled Components
* Backend:
  * Node
  * Express
  * Express Router
  * Passport
* Database: MongoDB with Mongoose
* Deployment: 
  * Heroku (Backend)
  * Netlify (Frontend)

---

## **Screenshots**

### **Desktop/Tablet:**
<img src="https://media.giphy.com/media/WUsYjcoOshFvVQpVKX/giphy.gif"/>

### **Mobile:**
<img src="https://media.giphy.com/media/VEu3uLETWJhQFlpqoS/giphy.gif"/>


--- 

# **Design**

## Design Process:
It was important that we stayed consistent with Hatchstones current style and branding so that clients have a seemless transition from their website to the Onboarding Platform. We wanted the app to look sleek while having a minimalistic style for clients of all ages to use the app as efficiently as possible.

When it came to the visual branding of the App, we were given all colour and font combination from HatchStone so it was consistent througout all their products.

### **Desktop:**
<img src="https://github.com/tomsmi321/hatchstone-frontend/blob/master/src/assets/assignment-resources/wireframes%20mockups%20prototypes/desktop-mockups-overview.png?raw=true" alt="desktop mockups screenshot">

<img src="https://github.com/tomsmi321/hatchstone-frontend/blob/master/src/assets/assignment-resources/wireframes%20mockups%20prototypes/desktop-prototype-overview.png?raw=true" alt="desktop prototype overview">

### **Mobile:**
<img src="https://user-images.githubusercontent.com/16986875/70595827-6bc46200-1c38-11ea-8f9f-c7f9040023b6.png" alt="mobile mockups screenshot">

<img src="https://user-images.githubusercontent.com/16986875/70595912-a8905900-1c38-11ea-97f0-6258e7942106.png" alt="mobile prototype overview">

## **User Stories:**
<img src="https://github.com/tomsmi321/hatchstone-frontend/blob/master/src/assets/assignment-resources/user%20stories/user-stories-client.png?raw=true">

<img src="https://github.com/tomsmi321/hatchstone-frontend/blob/master/src/assets/assignment-resources/user%20stories/user-stories-admin.png?raw=true">

## **Application Architecture Diagram:**
<img src="https://user-images.githubusercontent.com/16986875/70491713-26c7ff00-1b56-11ea-9d75-2f14b96e583f.png" alt="application architecture diagram"/>

## **Dataflow Diagram:**
<img src="https://github.com/tomsmi321/hatchstone-frontend/blob/master/src/assets/assignment-resources/dataflow%20diagram/Hatchstone%20DFD.jpeg?raw=true"/> <br >

---

<br>

# **Project Management**

## **Using Agile Methodologies:**
We had agreed to complete this project using the Agile methodology, we concluded it made the most sense to implement scrum over kanban. Since Trello is more of a kanban board than a scrum board we decided to split tasks up in sprints on Atlassian's JIRA. This made it easy for all to see what needed to be done. All tasks would begin in the "To Do" area and once one of us had decided to work on it, it would move to the "In Progress" area. When we believed we had finsihed it would then move to "In Test" and once testing was complete and we were totally happy with it, we would then moved it to "Done".

<img src="https://user-images.githubusercontent.com/16986875/70493855-47e01e00-1b5d-11ea-984f-1218132f4138.png" alt="jira-backlog-screenshot">

<img src="https://user-images.githubusercontent.com/16986875/70493941-955c8b00-1b5d-11ea-8078-9c4a74951acd.png" alt="jira-epics-agile-screenshot">

<img src="https://user-images.githubusercontent.com/16986875/70493995-c1780c00-1b5d-11ea-9a75-cfe7e935f232.png" alt="sprint 1 start">

<img src="https://user-images.githubusercontent.com/16986875/70494024-e40a2500-1b5d-11ea-93d3-b2c1441f2052.png" alt="sprint 1 nearly finished">

<img src="https://user-images.githubusercontent.com/16986875/70494059-fd12d600-1b5d-11ea-8909-70a4c782fd34.png" alt="sprint 1 nearly finished">

<br>

## **Code Review**
We as a group have made Pull Requests (PR) to have the code reviewed by at least one other group member before merging to Master.

<img src="https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Screen+Shot+2020-01-22+at+8.03.02+pm.png">

<img src="https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/github+review.png">

## **Client Communication**
During the initial stages of talking to Hatchstone about the application they wanted, we had meetings to discuss the app in detail, followed up by emails to confirm details, illustrate our progress and discuss feedback.

Email correspondance:
<img src="https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Screen+Shot+2020-01-22+at+8.21.31+pm.png">

<img src="https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Screen+Shot+2020-01-22+at+8.21.55+pm.png">

---
