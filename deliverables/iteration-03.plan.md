﻿# FaceCard

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.



## Iteration 3

 * Start date: Nov 18, 2017
 * End date: Nov 29, 2017

## Process

There are not much changes on our processes compared to last time

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.

#### Roles & responsibilities

Product Owner: Zhen Bang Liu (liumichael)
* Has a vision of the end product and decides on the direction of the project. Creates tasks that the team needs to complete to move in the direction of the project. Responsible for merging pull requests after making sure the code in the pull request works in everyone members' machines.


Scrum Master: Bryan Tung (BryanTung97)
* The scrum master facilitates the project in order to ensure that each individual is completing their tasks as required by taking requests from the product owner. This is to allow smoother progression.

Development Team: Hyewon Choi (jenachoi), Eric Hu (EricHu214), Zhen Bang Liu (liumichael), Bryan Tung (BryanTung97), Chris Wan (wanchris)
* The development team is responsible for developing, debugging and implementing the program and frameworks of the product. Each member will be assigned specific tasks based on their skill set (i.e. backend, frontend) in order to promote efficiency.

Deliverable specific responsibilities
* For this deliverable, Zhen is responsible for implementing The database implementation and integration of the cue-card decks with features such as create decks, create cue-cards in a deck, and display cue-card deck given an id. He is also responsible for writing the script for the video along with Chris.

* Bryan is responsible for developing the feature to create groups and add members to a group along with Eric. He is also responsible for editing the video.

* Jenna is responsible for developing features for displaying the proper username based on login, populating the notification center populating the group list of a user and populating the decks the user have. She is also responsible for the screen recording of the video.

* Eric is responsible for developing features like add members to a group along with Bryan, show group members in the group, show shared decks in the group, and display group name on the group page. He is also responsible for doing the voice-over for the video.

* Chris is responsible for developing the ability to fetch and add announcements to a group, populate members in a group, and delete decks. She is also responsible for writing the script for the video along with Zhen.

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the **purpose** of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

We generally have 2 meeting a week held on Discord voice chat. One meeting on Friday and one on Saturday. The Friday meeting allows us
to update other members members of the group about our progress. This allows us to determine the current status of the application
and help determine our goals for the next week. During our Satuday meeting, we discuss our goals for the next week. What each member
will implement and how they will implement it. For this specific deliverable, some extra meetings were made. We had started implementing the back-end of our application, and since most of the members lacked previous experience in back-end development, some extra events were needed to ensure everyone was working at the same pace.

planned events:

- Saturday November 18: Discord

We decided that it was time to implement the back-end. Since most of the members had no experience with back-end development, we the next week would be spent understanding the basis of NodeJs and Mongoose database

- Friday November 24: Discord

We discuss our learnings of back-end development for the week. Many of our members still had some confusion with back-end development, so we planned extra time for our meeting on Saturday for members to teach each other how to develop back-end. We also discussed our roles in this sprint in this meeting.

- Saturday November 25: Discord

on top of our usual planning meeting, we devoted a lot of time in this meeting to teach each other back-end development. We also took this time to develop a schema for the database and discuss how each member will use the schema to implement certain features. We also planned another meeting on Sunday to ensure everyone was on the same page

- Sunday November 26: Discord

We further discussed our progress on the back-end. We also needed to redesign our schema since our schema was designed around a relational database, where as Mongoose, the database we were using, was not relational. We assigned each other the tasks for the demo features for the next few days and we also discussed our plans for making the demo video, and decided that most of our roles would be the same as before. We also set a deadline of Tuesday to have all our demo features done for the video.

- Wednesday November 29: Discord

A quick meeting to ensure everything was ready for recording. Also ensuring everyone knows their part for the deliverable.


#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be to-do lists, task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?


   * TaskLists:

    - Nov. 24:
        - Zhen: getting cuecard info from the database and creating the page, create cuecards and decks and pushing to the database
        - Chris: Fetching the announcments from the database and making the announcments, making announcments and pushing to database
        - Jenna: populates the user decks from the database, display proper username based on login, show groups list on the side of user page
        - Bryan: Adding group and adding to the database for new group, add members (just front end for now), search for a user and add them
        - Eric: sharing, show group members, show group decks, show group name

    - Nov. 26:
        - Zhen: add cuecard to deck
        - Bryan and Eric: add members of group
        - Jenna: populate notifications
        - Chris: populate members of a group and ability to delete decks
        - +++ everyone refine front end if have time

    - Nov. 26:
        - Deliverable and Video roles as before

   * We have a google docs of our script which we use to coordinate between the script writers and screen recorders for the video.

#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.

 Our Git workflow works as follows:
- Each member has their own branch to work on. They are free to make commits and push to it.
- When a member feels their work is ready to be merged with the main branch, they will make a pull request and message on Facebook messenger
- At least 2 other members will do a checkout of the requested branch. They will test the changes on their machine to ensure that the code will not break existing work. The two other members also must have different machines to ensure the change works on different subsystems (Mac or Windows)
- When at least 2 people confirm that the pull request is safe, our product owner merges the pull request with the main branch
- Then every other member will update their branch with the new changes from main.
- If a member needs help with implementing their part, they will create a new branch with "test" appended to the end. They will ask on messenger for assistance and the the other members can checkout that branch and attempt to work on it together.


We decided to follow this workflow because it ensures changes made by the individual will not break the main branch. Before adopting this workflow, we ran into issues where the changes made only worked on the PR owner's computer. This lead to the program breaking for other members of the group, forcing us to roll back the main branch. After adopting this method, this became a non-issue.

The test branch was brought up when we started developing the backend. Since most of the members are new to NodeJS and backend developement in general, some assistance was needed from other members to help debug certain problems.

## Product

#### Goals and tasks

1) Delete function

A user may realize after creating a deck that they have inputted the wrong information, or added a duplicate of a deck that may already exist. This will result in confusion towards the rest of the group and the incorrect cards may mislead other users, resulting in the group studying false facts. In order to avoid this scenario, we are planning on implementing a delete decks within groups, where users are able remove decks these various reasons. The tasks that we will have to complete in order to achieve this goal is to implement a delete function that will take in the id (key) of the deck, and remove it from the database so that it can no longer be viewed by other users. The delete button and pop up prompt to delete the deck has already been implemented. The removal function must be implemented in the database controller.
Programs and languages used: HTML, JavaScript, MongoDB

2) Progress report

A user may want to see which cards that they have done well on, and which cards that they have stumbled on. Upon finishing answering a card, the user can select a number from 1 (poor) to 5 (excellent) indicating how poorly or how well they believed they have performed on the card. In order for users to view their progress report, their input, and the average of their input, per card, must be stored and calculated in the database. The rating has already been implemented, but the calculation and displaying of the average rating for the cards have not been implemented.
Programs and Languages used: HTML, JavaScript, MongoDB  

3) Spaced repetition notification (ties in with progress report)

Users may forget to come back to review their cards. Spaced repetition relies on users coming back after certain intervals of time to test their knowledge in order to aid with memorization of the fact. This method of studying will fail if the user cannot remember which cards they have done poorly on. Based on the average rating of the cue cards (as selected by the user after they test themselves using the card), FaceCard will alert the user through notifications that it is time to review a certain card. This relies on the progress report to be completed. Notifications will be sent periodically, with these periods of time depending on the average rating of the card. For example, a user would receive a notification to study a certain card after 1 day if they have an average rating of 1 on the card, but receive a notification to study another card after 5 days for a card rated 5.
Programs and Languages used: HTML, JavaScript, MongoDB  

4) Front end and Consistency

We will work on making our website more consistent (i.e. headers and buttons will not vary across pages) for a cleaner and more professional look. This can be done through comparison between the physical appearance of pages and the comparison of code.
Programs and Languages used: HTML, JavaScript

#### Artifacts

The artifacts that we will produce in order to present the project idea include the following (not ordered based on importance)

1) Code

Code is very important to the project as the developers need to work with one another’s code in order to keep the web application consistent and looking professional (i.e. displays of the same deck should not look different varying across pages). At the end of the iteration, we look to have a large portion of the code for the final project to be complete.

2) Website mounting

We plan to mount our website online so we can see how it differs from the code that we have produced and tested on our own machine. This will allow the developers to minimize the differences seen between the mock ups and the website that we have mounted online. We plan on using herokuapp for mounting our website.

3) Interactive mock up

This is useful as it gives us a general idea of how the website is supposed to behave in the real world, before it is mounted to a server online and available for public use. The interactive mock-up is meant to simulate a user-level experience so the developer can easily and readily identify problems or issues with the website that need to be changed (i.e. font size, typos, etc).  
