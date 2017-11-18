# FaceCard


## Iteration 02 - Review & Retrospect

 * When: November 16, 2017
 * Where: Online (discord)

## Process - Reflection

There was definitely some pressure to get the product finished within the constrained amount of time. But the weekly meeting, feedback on each other’s work, efficiently splitting up the work between teammates helped us to push forward the work and successfully manage to come up with the demo product for deliverable 2 with the set deadline.

#### Decisions that turned out well

1.	Assigning each other’s work in team
Since this project is involving many team members, assigning each other’s work and collaborating with each other is one of the most important aspects. We made sure to initially identify which features and functions we need to implement for the upcoming demo and assigned each other work. We deliberately implemented our own assigned work and set the deadline. None of our team members failed to finish their own task within the set deadline. We also made sure to ask each other questions if there any difficulties along the way. Therefore, we were able to efficiently manage our own task.

2.	Discord Pin
       We initially figured Trello would be a very nice way to manage our work and set up our goals and tasks. However, we haven’t really integrated Trello to our project to the extent. This has caused team members to ask other team members what their tasks were. Eventually, along the development process, we have found a way to make sure everyone can remind themselves easily of their task. We decided to use discord pin to make announcements to every teammate and let them know individual’s task. Discord pin is very efficient because it is fast and convenient for scrum master to let other teammates any specific information that we should know of during the development.

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

1.	Git workflow: No Pull Request
At the beginning of our development phase, we didn’t use pull request, but instead we pushed our own work directly to the master branch. This has caused the repo’s server to temporarily break and not being able to render the website. We decided to make sure that we make a pull request to merge our work instead of directly pushing our work.

2.	Brainstorming/Mockup on design
The front-end of the product turned out well because it clearly showed the purpose and various features of the website. It is also visually appealing considering the phase of the development. However, one thing that we have missed during the development is actual sketch and detailed brainstorming of how our website to look visually. We made specific plans on functions and features of the website but we didn’t plan thoroughly out the visual aspect of the website. This helped each team member have their own choice on how the website could look and gives us opportunity to become creative on our own, but we also could have saved time in terms of design.

Use of branches and merge requests?

   Each team member has his or her own branch to commit and push their work. After they complete their own assigned task, a team member gets to make a pull request for their work to be merged.
   After other team members test out the branch and see if the team member successfully implemented the task and it didn’t break any existing work, they decide to merge the requests. We specifically agreed to make sure that at least three people test out the work and agree with the pull request being merged to the master branch.

#### Planned changes

## Product - Review

#### Goals and/or tasks that were met/completed:

 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.

* Skeleton of the features of our website, features are hardcoded:
    * [`page to create and login to accounts`](/views/login.ejs and /views/user.ejs)
    * [`page to create cue cards`](/views/cue_card_back.ejs and /views/cue_card_front.ejs) 
    * [`page to create quizzes`](/views/quiz.ejs)
    * [`page to join groups with users and share cue cards and quizzes`](/views/group.ejs)
* [`Demo video`](/deliverable/demo.avi)


#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

* Database and SQL
    * focus was placed on implementing the front end rather than worrying about the backend
    * time restrictions prevented us from implmenting backend as well 
* Feedback - ability to add feedback on cue cards, informing users of its correctness
    * prioritized features that were more integral to the FaceCard application
    * wanted to make sure other features could be used in the demo video


## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.

* Workflow
    * Due to problems encounted by pushing directly on master, we have decided to enforce the use of branches and pull-requests when implementing the features of our application. Pull-requests should be only made when a feature is implemented on a branch correctly, and ready to be tested on master. At least two members, one using a mac, and one using windows should approve of the merge-request before it is accepted. Master should always contain a working version of our application. 

* Backend
    * We have decided to use mongoDB as our SQL processor. Using this database, we plan to implement our previously hardcoded features to work as intended. Users should be able to create accounts, create and join groups, share cue cards, and create quizzes. Groups, cue cards and quizzes should be linked to user accounts which can be accessed using the id and password created in the account creation proccessor. 
