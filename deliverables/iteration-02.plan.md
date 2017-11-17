
# FACECARD

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 02

 * Start date: Oct. 20, 2017
 * End date: Nov. 16, 2017

## Process

(Optional:) Quick introduction

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.
 
We generally have 2 meetings a week held on Discord voice chat. One meeting on Friday and one on Saturday. The Friday meeting allows us 
to update other members of the group about our progress. This allows us to determine the current status of the application 
and help determine our goals for the next week. During our Satuday meeting, we actively discuss our goals for the next week. We discuss what each member will implement and how they will implement it.

planned events:

-Saturday October 14: Discord
	We discuss what we have to implement and how we will do so for the next week. Our goal for this week was to hard code HTML/CSS 		pages so we can have a general idea of what the end product will look like

-Friday October 20: Discord
	We discuss Our progress for this week. Most of us met the tasks discussed on Saturday of the previous week.
	
-Saturday October 21: Discord
	We discuss what we have to implement and how we will do so for the next week. We decided to move a lot of the hard coded HTML
	elements to JavaScript, so that we can prepare pre-made JavaScript objects for when a backend is implemented.
	
-Friday November 3: Discord
	We discuss Our progress for this week. Most of us had completed their tasks discussed on Saturday of the previous week.
	
-Saturday November 4: Discord
	We discuss what we have to implement and how we will do so for the next week. We discussed how many of the features needed to be
	implemented so we can demo the general functionality of the app. We also decided to implement a backend using nodejs for proper linking between pages.
	
-Friday November 10: Discord
	We discuss Our progress for this week. Most of us had completed their tasks discussed on Saturday of the previous week.
	
-Saturday November 11: Discord
	We discuss what we have to implement and how we will do so for the next week. We decided to focus on the production of the demo 	video. Script writing, recording and editing would be done for the next week.
	
- Thursday November 16: Discord
	One last meeting before deliverable to ensure all our parts are known and will be completed.

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
 
 Our Git workflow works as follows:
- Each member has their own branch to work on. They are free to make commits and push to it.
- When a member feels their work is ready to be merged with the main branch, they will make a pull request and message
	on Facebook messenger
- At least 2 other members will do a checkout of the requested branch. They will test the changes on their machine to ensure that
	the code will not break existing workor create. The two other members also must have different machines to ensure the change
	works on different subsystems (Mac or Windows)
- When at least 2 people confirm that the pull request is safe, our product owner merges the pull request with the main branch
- Then every other member will update their branch with the new changes from main.


We decided to follow this workflow because it ensures changes made by the individual will not break the main branch. Before adopting
this workflow, we ran into issues where the changes made only worked on the PR owner's computer. This lead to the program breaking
for other members of the group, forcing us to roll back the main branch. After adopting this method, this became a non-issue.

## Product

#### Goals and tasks

## Product

#### Goals and tasks

The goals and tasks of this iteration include implementing the features that were described in the deliverable video. We have hard coded some of the final features in the application demo in order to simulate how the final product is to look and behave. Currently, the SQL processor we will be using is MongoDB – This may change after some experimentation. During this iteration, each member will be working on one or more of the following features (note that all features will require HTML to implement):  

1) Make the website abstract in terms of profile, group, decks, quiz, duel etc.

Currently, our web application only demonstrates how it is supposed to behave given that the information has been specified and created by users. Our views and pages are not abstract in a sense that users can insert desired information. For example, the group page that is seen (BIO100) is hard coded and needs to be turned into an abstract page where users can create, modify, and adjust announcements, decks and group name. We will achieve this by using JavaScript in order to allow users to enter their desired information. There are similar issues within the profile, deck and quiz page. We will use SQL in order to keep track of the information. 

2) Create deck and cue card

Cue cards are not yet an abstract type such that users can create customized cards and decks with desired information on the front and back. We will be implementing this feature using JavaScript, and SQL in order to receive the information from the user, and store it on the database so that it can be loaded at a different time of usage.

3) Feedback 

Feedback was described in one of our user stories – Users do not know if their cue cards contain valid information or not when they are studying alone. An important feature of FaceCard is for users and teacher to be able to offer feedback on incorrect cards, or “verify” cue cards if they are correct. This feature is to be implemented using JavaScript, and SQL. 

4) Edit cue cards

After receiving feedback, users may wish to edit their cue cards in order to update it with new and correct information. This can be implemented using SQL by modifying the information in the database correlating to that specific cue card.

5) Reminders/joining groups 

Users may often forget to review and study on a daily basis. This problem can be solved by FaceCard sending customized notifications to the user if they have not studied or used the app in a certain amount of time. This can be implemented using a SQL database that stores when the user has last reviewed their cards. The programmer can then calculate the amount of time that has elapsed, and send notifications to the user accordingly. In addition, users can send group invites to other users, and users can choose to decline or accept the invitation – This must also be implemented using SQL. 

6) Progress report

Users can easily forget which cue cards they have failed on, especially if they have been stumbling on many. The progress report can report to the user which cue cards that they have gotten incorrect the most times, and therefore need the most review on. This can be helpful and beneficial to the user as they will be aware on which facts and cards that they may need to study harder for. This can be implemented using SQL where entries of cue cards is stored with number of incorrect answers given to the card.   

7) Log in 

As demonstrated, FaceCard offers users an option to create and log into their personal account, where they can view decks, groups, and edit a profile that is specific to themselves. This has not yet been implemented and will be implemented using a SQL database, where users can enter their information, have it recorded, and be able to log into their account in order to load their specifics. 
 
Other goals and tasks that are not as important as the above include the following: 
1. Mounting the website onto an online source, such as herokuapp, so that users online are able to access the website 
2. Creating a broader web application to cater to students outside of biology
3. Complete and perfect most, if not all, of the features that we have described in the video in full 
4. Emphasize on consistency so the web application looks professional and does not differ between pages

#### Artifacts

The artifacts that we will produce in order to present the project idea include the following (not ordered based on importance) 

1) Code 

Code is very important to the project as the developers need to work with one another’s code in order to keep the web application consistent and looking professional (i.e. displays of the same deck should not look different varying across pages). At the end of the iteration, we look to have a large portion of the code for the final project to be complete.

2) Website mounting

We plan to mount parts of our website online so we can see how it differs from the code that we have produced and tested on our own machine. This will allow the developers to minimalize the differences seen between the mock ups and the website that we have mounted online. We plan on using herokuapp for mounting our website. 

3) Interactive mock up

This is useful as it gives us a general idea of how the website is supposed to behave in the real world, before it is mounted to a server online and available for public use. The interactive mock-up is meant to simulate a user-level experience so the developer can easily and readily identify problems or issues with the website that need to be changed (i.e. font size, typos, etc).  
