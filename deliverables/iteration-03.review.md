#FaceCard

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 03 - Review & Retrospect

 * When: FILL IN THE DATE WHEN YOU ACTUALLY HAD YOUR REVIEW MEETING
 * Where: PHYSICAL LOCATION AND/OR ONLINE

## Process - Reflection

(Optional) Short introduction

* [`Demo video`](https://)

#### Decisions that turned out well

<!-- List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s). -->

#### Decisions that did not turn out as well as we hoped

<!-- List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).-->


#### Planned changes

<!-- List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change. -->


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

* Create User [`decks`](/controllers/main.controller.js#L272-L324) and [`cuecards`](/controllers/main.controller.js#L403-L422)  
	* Users can now create decks and cuecards
	* Cuecards are linked to their respective decks and created after creating a deck

* Create groups, [`group-decks`](/controllers/main.controller.js#L381-L401) and [`group-cuecards`](/controllers/main.controller.js#L326-L379) 
	* Users can now create and join groups 
	* Members of a group share access to a pool of cuecards 
	* Cuecards accessible by the group are either created inside of the group or users can share existing cuecards with the group

* Invite to [`groups`](/controllers/main.controller.js#L545-L574)
	* Members of a group can send invitations to users of FaceCard 
	* Users receive invites in their notifications and can accept or decline invitations

* Consistent [`front-end`](/views)
	* Front-end is now more visually fluent. Navbars are now all consistent and utilize bootstrap 4.0+


#### Goals and/or tasks that were planned but not met/completed:
<!--
 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?
-->

* Modify/delete cue cards and add annoucements
	* We found difficulties in modifying data on the database and the time cost to fix these issues exceeded the time we had available. 

* Spaced repitition
	* We wanted to focus on the implementation of FaceCard's main features of cuecard creation and user interaction. 
	* Without a clear understanding of how we wanted to implement the algorithm, we decided to delay this feature. 

* Quiz and Comments
	* Due to time restraints, we could not finish implementing thses features and decided to cut it from this deliverable.

* Duels
	* Ultimately, this feature was not as vital to our MVP as quiz or comments so we decdied to cut it out. 


## Meeting Highlights
<!--
Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.
-->
* Basic Quality of Life Changes
	* We plan to implement basic features that we could not implement in this deliverable; such as modifying and deleting cue cards, and adding annoucements. 
	By implementing theses features, user experience should significantly improve due to the reduction of clutter and easier access to important information. 

* Space repitition
	* Alongside the sharing and group aspect of our website, this feature represents the core identity of our application. We plan on implementing this feature
	by utilizing the already completed notifications utility and combining it with an algorithm that keeps track of the users performance and time interval between attempts. 