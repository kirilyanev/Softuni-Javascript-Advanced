# Vault Safe Mini-Game

A simple mini-game where the player needs to enter a secret combination to unlock a vault safe and reveal the treasure inside.

![Game Preview 1](public/Preview/vault.jpg)
![Game Preview 2](public/Preview/vaultOpen.jpg)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)
- [Commands](#commands)

## Features

- Dynamic generation of random secret combinations.
- Interactive handle rotation mechanism.
- Responsive design for various screen resolutions.
- Animated door opening with a glitter effect on the treasure.
- Error handling with code reset and handle spin animation.

## Requirements

- JavaScript (ES6+)
- TypeScript
- Web browser with CSS3 and HTML5 support

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kirilyanev/DREAMSHOT.git

Navigate to the project directory:

bash
Copy code
cd vault-safe-mini-game
Install the necessary dependencies:

bash
Copy code
npm install
Usage
Open the index.html file in your web browser:

bash
Copy code
open index.html
This will launch the vault safe mini-game.

To interact with the handle of the safe, [describe how the player interacts here].

Follow the instructions on the screen to enter the secret combination.

If you enter the correct combination, the vault door will open, revealing the treasure.

If you make an error, the game will reset, and you'll need to start from the beginning.

Development
To make changes to the game or improve it further, follow these steps:

Make sure you have the project installed and the necessary dependencies installed (as described in the Installation section).

Use your preferred code editor to modify the game code in the src directory.

After making changes, you can build the project (if needed) using:

bash
Copy code
npm run build
To test your changes, open the index.html file in your browser as mentioned in the Usage section.

Commit your changes and push them to your repository:

bash
Copy code
git add .
git commit -m "Describe your changes here"
git push origin your-branch-name
License
This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code for personal or commercial purposes. See the LICENSE file for more details.

Enjoy the game! If you have any questions or need further assistance, feel free to contact [your contact information].

Commands 💻
Command	Description
npm run start	Run dev server
npm run build	Build project for production
npm run preview	Preview production build (must run build before running preview)