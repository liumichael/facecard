# FaceCard

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 3

 * Start date: FILL IN THE DATE WHEN YOU HAD YOUR FIRST TEAM PLANNING MEETING
 * End date: FILL IN THE DATE WHEN YOU ARE PLANNING TO HAVE YOUR REVIEW MEETING

## Process

(Optional:) Quick introduction

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the **purpose** of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be to-do lists, task boards, schedule(s), etc.
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