#FaceCard

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 03 - Review & Retrospect

 * When: FILL IN THE DATE WHEN YOU ACTUALLY HAD YOUR REVIEW MEETING
 * Where: PHYSICAL LOCATION AND/OR ONLINE

## Process - Reflection

* [`Demo video`](https://)

#### Decisions that turned out well

<!-- List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s). -->

1. Team Meeting & Assigning each other work in team

It hasn't been long time since we have finished deliverable 2, and deadline for finishing deliverable 3
was approaching faster than we expected. We still had a lot of things to implement in our website, such
as setting up the MongoDB database and making the website functional with the database so it was crucial that each member deliberately does all work for the website to successfully function. We had many meetings to make sure everyone knew what they were doing with their own assigned tasks, and asked each other a lot of questions through various forms such as Facebook Messenger and Discord Chat whenever we were stuck on some problems regarding our tasks. Since not a lot of team members were directly experienced with Node.js framework we are using in our project, there was initially some difficulties along the way, but we successfully managed to finish a lot of tasks in short period of time.

2. Time management

Since there were still a lot of things to implement and we had constrained amount of time, we had to make
sure that we finish our own task as soon as possible, just to make sure we can give each other feedback in
case our own work is not what our team members agree on, in terms of design and functions of the website.
We were very successful in our time management with our project even though each team member was very busy
with his or her own work in other courses. For example, if we promised each other to finish our task within 2 days, everyone ensured to complete it within 2 days. No one procrastinated nor slacked on their work Since
everyone knew this is one of the most important milestones in our project and things need to be done before
actual final demo and deliverable 3.


#### Decisions that did not turn out as well as we hoped

<!-- List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).-->

1. More constructive brainstorming on design

The front-end of the product is visually appealing, but considering the phase of the development, we still
have a lot of things to improve. It clearly shows the purpose and features of the website to us, but since
we haven't got any constructive, honest feedback from other potential users, we don't know how the interface of the website serves to other potential users. We could have done more constructive brainstorming and mockup on the design of the website, but since we were so busy working on back-end side of the website, we weren't able to focus as much on the visual aspect of the website. Some team members did make some commits to improve the design of the website. However, there are definitely more improvement needed in order to make sure that the buttons and input fields in the website successfully deliver the purpose of the websites to those who will potentially use the website.

2. Git workflow: Use of branches

Previously...
When we were working on the website for deliverable 2, each team member had his or her own branch to commit and push their work. After they complete their own assigned task, a team member made a pull request for their work to be merged. After other team members tested out the branch and saw if the team member successfully implemented the task and it didn’t break any existing work, they decided to merge the requests.

We made sure to use small pull requests and regularly made a merge requests. But this time, when we were
working on our tasks for deliverable 3, we instead decided to go with another git workflow. What we did was we had this huge pull requests with branch named as 'databases', and everyone pushed their own work to the branch. This was decision that turned out very efficient, but at the same time, there were definitely some problems. Since we were so busy handling our own tasks and this was the only branch used for implementing everything we need for this deliverable, other work that was not necessarily related to 'database', such as improving interface of the website, was also pushed to this branch. This is not a good way of handling our workflow, because if we want to revert this merged pull requests, then other work that we pushed to this branch and was also not necessarily related to 'database', will also be reverted.

#### Planned changes

<!-- List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change. -->
1. More small and frequent pull requests rather than huge pull requests

As mentioned above, one huge pull requests won't help us if we want to revert the pull request. Therefore, it is crucial that we use small and frequent pull requests in stead of huge chunk of one PR.

2. More frequent feedback on each other's work

Each person succesfully managed to finish their own work but we have to give honest feedback on each other work as soon as possible so that we can give out the best product for the final demo in the future.

## Product - Review

#### Goals and/or tasks that were met/completed:
<!--
 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.
-->

* Connect front end of website to a database [`controller`](/controllers/main.controller.js) [`router`](/router/main.router.js) [`models`](/models)
	* Used mongodb with mongoose for object modeling
	* Pages are now linked together and accessed through user accounts

* Create decks and cuecards [`create-deck`](/controllers/main.controller.js#L272-L324) [`create-card`](/controllers/main.controller.js#L403-L422)
	* Users can now create decks and cuecards
	* Cuecards are linked to their respective decks and created after creating a deck

* Create groups [`create-deck`](/controllers/main.controller.js#L381-L401) [`create-card`](/controllers/main.controller.js#L326-L379)
	* Users can now create and join groups
	* Members of a group share access to a pool of cuecards
	* Cuecards accessible by the group are either created inside of the group or users can share existing cuecards with the group

* Invite to groups [`controller`](/controllers/main.controller.js#L545-L574)
	* Members of a group can send invitations to users of FaceCard
	* Users receive invites in their notifications and can accept or decline invitations

* Consistent front-end [`views`](/views)
	* Front-end is now more visually fluent. Navbars are now all consistent and utilize bootstrap 4.0+


#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

Modify cue cards
	Cue cards cannot be modified after creation.

Spaced repitition
	We have not established an algorithm that notifies users on which cuecards to study based on the principle of spaced repitition

Add annoucements
	Group owners cannot yet add annoucements to the grouppage.

Quiz
	Users cannot create or use multiple choice quizes.

Comments
	Users cannot add comments for cuecards or decks.

Duels
	Users cannot perform "time attack duels" against one another.


## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.
