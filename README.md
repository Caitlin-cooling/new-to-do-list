# To Do List
This is a basic to do list app built using react. A user can currently create a to do and it is then rendered on the page with all of the others that have been created.

This app is a continuation of [to-do-list](https://github.com/Caitlin-cooling/to-do-list), where I got blocked trying so many different things the code base was a mess. I decided that I knew what the issue was (using old versions of Babel causing all sorts of issues) and that it would be easier to cut my losses and start again.

## How to use
1. `git clone https://github.com/Caitlin-cooling/new-to-do-list.git`
2. `cd to-do-list`
3. `npm install` to install dependencies
4. Run `npm run start` to start the webpack server, this will automatically open your browser to the correct page where you can begin creating to dos!

## Dependancies
This app uses the React library, including ReactDOM. It uses Babel to translate the JSX to JS and webpack as the modular bundler. It runs on the webpack dev server.

Style-loader is used as the CSS loader is used to handle CSS and react-datepicker is used for the due date calendar.

## Testing
Tests are written using Jest, and can be run using `npm run test`.

Tests can be found in `tests` folder.

## My Approach to Solving this Problem
This is spiked as it is a learning exercise in React. I plan to complete this again fully test driven.

## Left to do
* I would like to store the to dos so that they are accessible after the session has ended
* I would like to prevent people from creating a due date of the past
* It is super annoying that you have to click on the exact text of the create Button
* I would like a user to be able to tick off to ToDos
* Fix highlighting on buttons and text boxes
