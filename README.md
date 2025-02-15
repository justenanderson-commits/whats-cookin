# What's Cookin' Group Project
## Abstract:
This application was a 2-part project. This part is a recipe tracking and meal planning application that allows users to browse, search, and filter recipes and save selected recipes to their profile. Recipe, ingredient, and user data are fetched from an API. 

https://user-images.githubusercontent.com/104015966/200430698-f30e5ae2-7716-44a1-9550-69a2cc81f6ee.mp4

## Installation Instructions:
1. Go to [this repo](https://github.com/justenanderson-commits/whats-cookin) on Github
2. Click Fork > Create New Fork
3. Click Code
4. Copy the SSH url provided by GitHub
5. In the terminal, navigate to the new project repository
6. Type git clone and paste the URL
7. Run `cd whats-cookin`
8. Run `npm install`. Note: Do not run `npm audit fix --force`. This will update to the latest version of packages, which are not wanted. 
9. Run `npm start` to start the program. (`Ctrl + C` will stop it.)
10. In a browser window, navigate to `http://localhost:8080/`.
11. The app should now ready to browse and search for recipes.  

## Context:
The team followed a kanban-like workflow using a Trello board for Part 1 and GitHub Projects for Part 2 and held daily standups. Meetings started by checking in with group mates as humans. Then accomplishments from the day prior were discussed, what needed to be done that day and by whom, and then collaborative debugging help was provided (as needed). Some tasks were completed indivdually, others in pairs, and others as a whole group. The collective estimate is about 100 hours of work time invested over 9 days to create this application's functionality and test suite from scratch using Javascript, html, and css. The Mocha framework and Chai library were used for testing.
For accessability we chose neutral, high-contrast colors (and placed borders around our buttons) to improve the readability for those with some level of visual impairment and conducted our accessibility testing with Lighthouse.

## Contributors:
- [Angie Staffieri](https://github.com/arstaffieri) 
- [Ryan Nagel](https://github.com/Nagel29)
- [Thomas Peterson](https://github.com/thomedpete)
- [Justen Anderson](https://github.com/justenanderson-commits)

## Learning Goals:
- Implement ES6 classes that communicate to each other as needed
- Use object and array prototype methods to perform data manipulation
- Create a user interface that is easy to use and clearly displays information.
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Make network requests to retrieve data
- Work with a local server and make network requests to API endpoints to retrieve and manipulate data.
- Refactor your code to DRY up repetitive logic
- Ensure your app follows best practices for accessibility
- Practice talking about your code and high level technical concepts
- Implement feedback to improve product and process.

## Tech Used:
- GitHub
- Terminal
- VS Code
- Chrome Browser/Dev tools
- Zoom
- JavaScript
- Slack
- Mocha
- Chai
- Webpack
- CodePen
- Google Font API
- GlideJS
- Lighthouse

## Wins and Challenges
Wins
- The group's willingness to support each member's learning was stellar. Any time there was confusion among one or more group members, the collective group would stop to help everyone understand. Pull request reviews became teachable moments to walk through the code, find opportunities for improvement, and plan next steps.

- The GitHub workflow was very successful. The group collectively made enormous strides in fluency with the GitHub workflow and communication tools. One example was when 2 group members worked on different parts of the same file at the same time. Then their branches were merged after resolving the conflicts. The merge branch was then able to be merged into main. 

- Through our iteration and refactoring, we were able to condense the fetch call into a single function using promiseAll. 

Challenges
- We have our mid-mod exams tomorrow and needed to balance studying for those with working on the project. 

- We put a lot of work into finding a color scheme that was pleasing to the eye and provided enough contrast to be readable. We worked especially hard on the "save" and "remove" buttons.

- This is the first time the four of us have split up work rather than done paired programming. We really learned the git workflow doing it this way and got to resolve many merge conflicts. 

### Additional Notes:
- The group opted to embed test data rather than importing it from a module because none of us had experience working with the text editor's ability to collapse code blocks amd wanted to practice using them. 

- GitHub Projects will be used (instead of Trello) to manage the workflow during part 2 of this project.

- We updated the the site to use Comic Sans to improve readability for users with Dyslexia. 

- UI/UX - Used drop down menus for stocking ingredients in the pantry to avoid complications arising from variations in user input.

- BEM naming conventions were used for the html classes and IDs.

- We intentionally left the fetch post on the Scripts.js file (instead of moving it to the API calls file with the other fetch calls) because there was so much DOM manipulation taking place in that method.

- We deviated from the instruction "As a user, I should be able to check my list of recipes to cook and see if my pantry has enough ingredients to cook a recipe" so that a user can check and see if their pantry has enough ingredients for any recipe, not just their saved recipes. We thought this would be more intuitive since a user may not automatically recognize that they need to save a recipe in order to check to see if they have the ingredients to cook it.

- If we had more time to work on this project, we would have improved the layout to create more visual balance, and to display the "shopping list" items (that populate when we click "Cook This Recipe" in a more aesthetically pleasing way and a more obvious location. The recipes would be better displayed as cards (rather than text elements). Also, we would have refactored the fetch post on the scripts.js file and moved it to the apicalls.js file.
