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

2. Navigate to the project directory:

   ```bash
   cd vault-safe-mini-game

3. Install the necessary dependencies:

   ```bash
   npm install
   
## Usage

1. Open the index.html file in your web browser:

   ```bash
   open index.html
   
This will launch the vault safe mini-game.

2. To interact with the handle of the safe, [click left/right side of the screen to rotate the handle].

3. The secret combination is logged in the browser console.

4. If you enter the correct combination, the vault door will open, revealing the treasure.

5. If you make an error, the game will reset, and you'll need to start from the beginning.

## License
This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code for personal or commercial purposes. See the LICENSE file for more details.

Enjoy the game!

### Commands 💻

| Command           | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run start`   | Run dev server                                                       |
| `npm run build`   | Build project for production                                         |
| `npm run preview` | Preview production build (must run `build` before running `preview`) |
