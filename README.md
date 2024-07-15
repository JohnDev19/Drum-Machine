# Drum Machine

## Project Overview

This project is a Drum Machine web application built as part of the FreeCodeCamp Front End Development Libraries certification. It allows users to play drum sounds by clicking on drum pads or using keyboard keys.

Live Demo: []

## Features

- Interactive drum pads that can be triggered by mouse clicks or keyboard presses
- Visual feedback when drum pads are activated
- Display showing the name of the currently played sound

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Create React App

## User Stories Fulfilled

1. The app has an outer container with id="drum-machine" that contains all other elements.
2. Within #drum-machine, there is an element with id="display".
3. Within #drum-machine, there are 9 clickable drum pad elements, each with:
   - A class name of "drum-pad"
   - A unique id describing the audio clip
   - Inner text corresponding to keyboard keys Q, W, E, A, S, D, Z, X, C
4. Each .drum-pad contains an HTML5 audio element with:
   - A src attribute pointing to an audio clip
   - A class name of "clip"
   - An id corresponding to the inner text of its parent .drum-pad
5. Clicking on a .drum-pad element triggers its audio clip.
6. Pressing the trigger key associated with each .drum-pad triggers its audio clip.
7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed in the #display element.

## Installation and Setup

1. Clone the repository:
   ```
   git clone []
   ```
2. Navigate to the project directory:
   ```
   cd drum-machine
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open http://localhost:3000 to view it in the browser.

## Usage

- Click on the drum pads or press the corresponding keyboard keys to play sounds.
- The name of the played sound will be displayed in the display area.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](insert link) if you want to contribute.

## License

This project is [MIT](insert link) licensed.

## Acknowledgements

- FreeCodeCamp for the project idea and requirements
