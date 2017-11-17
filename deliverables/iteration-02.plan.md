# FACECARD

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration XX

 * Start date: FILL IN THE DATE WHEN YOU HAD YOUR FIRST TEAM PLANNING MEETING
 * End date: FILL IN THE DATE WHEN YOU ARE PLANNING TO HAVE YOUR REVIEW MEETING

## Process

(Optional:) Quick introduction

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.

## Product

#### Goals and tasks

The goals and tasks of this iteration include implementing the features that were described in the deliverable video. We have hard coded some of the final features in the application demo in order to simulate how the final product is to look and behave. Currently, the SQL processor we will be using is MongoDB – This may change after some experimentation. During this iteration, each member will be working on one or more of the following features (note that all features will require HTML to implement):  

1. Make the website abstract in terms of profile, group, decks, quiz, duel etc.
Currently, our web application only demonstrates how it is supposed to behave given that the information has been specified and created by users. Our views and pages are not abstract in a sense that users can insert desired information. For example, the group page that is seen (BIO100) is hard coded and needs to be turned into an abstract page where users can create, modify, and adjust announcements, decks and group name. We will achieve this by using JavaScript in order to allow users to enter their desired information. There are similar issues within the profile, deck and quiz page. We will use SQL in order to keep track of the information. 

2. Create deck and cue card
Cue cards are not yet an abstract type such that users can create customized cards and decks with desired information on the front and back. We will be implementing this feature using JavaScript, and SQL in order to receive the information from the user, and store it on the database so that it can be loaded at a different time of usage.

3. Log in 
As demonstrated, FaceCard offers users an option to create and log into their personal account, where they can view decks, groups, and edit a profile that is specific to themselves. This has not yet been implemented and will be implemented using a SQL database, where users can enter their information, have it recorded, and be able to log into their account in order to load their specifics. 

3. Feedback 
Feedback was described in one of our user stories – Users do not know if their cue cards contain valid information or not when they are studying alone. An important feature of FaceCard is for users and teacher to be able to offer feedback on incorrect cards, or “verify” cue cards if they are correct. This feature is to be implemented using JavaScript, and SQL. 

4. Edit cue cards
After receiving feedback, users may wish to edit their cue cards in order to update it with new and correct information. This can be implemented using SQL by modifying the information in the database correlating to that specific cue card.

5. Reminders/joining groups 
Users may often forget to review and study on a daily basis. This problem can be solved by FaceCard sending customized notifications to the user if they have not studied or used the app in a certain amount of time. This can be implemented using a SQL database that stores when the user has last reviewed their cards. The programmer can then calculate the amount of time that has elapsed, and send notifications to the user accordingly. In addition, users can send group invites to other users, and users can choose to decline or accept the invitation – This must also be implemented using SQL. 

6. Progress report
Users can easily forget which cue cards they have failed on, especially if they have been stumbling on many. The progress report can report to the user which cue cards that they have gotten incorrect the most times, and therefore need the most review on. This can be helpful and beneficial to the user as they will be aware on which facts and cards that they may need to study harder for. This can be implemented using SQL where entries of cue cards is stored with number of incorrect answers given to the card.   

7. Log in 
As demonstrated, FaceCard offers users an option to create and log into their personal account, where they can view decks, groups, and edit a profile that is specific to themselves. This has not yet been implemented and will be implemented using a SQL database, where users can enter their information, have it recorded, and be able to log into their account in order to load their specifics. 
 
Other goals and tasks that are not as important as the above include the following: 
1. Mounting the website onto an online source, such as herokuapp, so that users online are able to access the website 
2. Creating a broader web application to cater to students outside of biology
3. Complete and perfect most, if not all, of the features that we have described in the video in full 
4. Emphasize on consistency so the web application looks professional and does not differ between pages

#### Artifacts

The artifacts that we will produce in order to present the project idea include the following (not ordered based on importance) 

1. Code 
Code is very important to the project as the developers need to work with one another’s code in order to keep the web application consistent and looking professional (i.e. displays of the same deck should not look different varying across pages). At the end of the iteration, we look to have a large portion of the code for the final project to be complete.

2. Website mounting
We plan to mount parts of our website online so we can see how it differs from the code that we have produced and tested on our own machine. This will allow the developers to minimalize the differences seen between the mock ups and the website that we have mounted online. We plan on using herokuapp for mounting our website. 


3. Interactive mock up
This is useful as it gives us a general idea of how the website is supposed to behave in the real world, before it is mounted to a server online and available for public use. The interactive mock-up is meant to simulate a user-level experience so the developer can easily and readily identify problems or issues with the website that need to be changed (i.e. font size, typos, etc).  