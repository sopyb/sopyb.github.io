# Sopy.one - Sopy's online portfolio

## Table of Contents
- [About](#about)
- [Links](#links)
- [Branding](#branding)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Development](#development)
  - [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [License](#license)
## About
This is the github repo for my online portfolio. It is built using [svelte](https://svelte.dev/) and [vite](https://vitejs.dev/). It is hosted on [github pages](https://pages.github.com/) and it was the first time messing around with a CI/CD pipeline. I used [github actions](https://github.com/features/actions) to build and deploy the site.

Now I finally have a version of the portfolio I don't start hating before I finish working on it. I'm not sure what else I could add, but I'm happy with how it turned out.

## Links
[about](https://sopy.one/#/about) | [projects](https://sopy.one/#/projects) | [contact](https://sopy.one/#/contact)

## Branding
I'm not a designer, but I tried to make the site look nice. I used [Nerd Fonts](https://www.nerdfonts.com/) for the icons and chose a few colors for the site. I also made a custom favicon and a custom scrollbar.

### Dark Mode
| Color                  |   Hex   |      RGB      |
|------------------------|:-------:|:-------------:|
| Background             | #221e24 |  34, 30, 36   |
| Backhround (mid)       | #312B36 |  49, 43, 54   |
| Background (secondary) | #433a4a |  67, 58, 74   |
| Borders                | #675a6e | 103, 90, 110  |
| Text                   | #E1E1E6 | 225, 225, 230 |
| Text (secondary)       | #A6A6B8 | 166, 166, 184 |
| Accent (main)          | #BB78DD | 187, 120, 221 |
| Accent (secondary)     | #678DDA | 103, 141, 218 |
| Star                   | #F2C94C | 242, 201, 76  |
| AboutMe #1             | #678DDA | 103, 141, 218 |
| AboutMe #2             | #BB78DD | 187, 120, 221 |
| AboutMe #3             |  #999   | 153, 153, 153 |
| AboutMe #4             | #67B4DA | 103, 180, 218 |
| AboutMe #5             | #DE78DE | 222, 120, 222 |
| AboutMe #6             |  #CCC   | 204, 204, 204 |
| AboutMe #7             | #ADD6EB | 173, 214, 235 |
| AboutMe #8             | #EBADEB | 235, 173, 235 |
| AboutMe #9             |  #FFF   | 255, 255, 255 |

### Light Mode

| Color                  |   Hex    |      RGB      |
|------------------------|:--------:|:-------------:|
| Background             | #beb5c5  |  34, 30, 36   |
| Backhround (mid)       | #cfc9d4  |  49, 43, 54   |
| Background (secondary) | #dfdbe1  |  67, 58, 74   |
| Borders                | #9f92a5  | 103, 90, 110  |
| Text                   | #1a1a1f  | 225, 225, 230 |
| Text (secondary)       | #464658  | 166, 166, 184 |
| Accent (main)          | #652287  | 187, 120, 221 |
| Accent (secondary)     | #254b98  | 103, 141, 218 |
| Star                   | #FFD700  | 242, 201, 76  |
| AboutMe #1             | #254b98  | 103, 141, 218 |
| AboutMe #2             | #652287  | 187, 120, 221 |
| AboutMe #3             | #666666  | 153, 153, 153 |
| AboutMe #4             | #257298  | 103, 180, 218 |
| AboutMe #5             | #872187  | 222, 120, 222 |
| AboutMe #6             | #333333  | 204, 204, 204 |
| AboutMe #7             | #143d52  | 173, 214, 235 |
| AboutMe #8             | #521452  | 235, 173, 235 |
| AboutMe #9             | #000000  | 255, 255, 255 |

### Dark Mode
| Color               |   Hex    |      RGB       |
|---------------------|:--------:|:--------------:|
| Background          |   #222   |   34, 34, 34   |

## Features
- [x] Sick about me section
- [x] Parallax stolen from [another project](https://github.com/sopyb/sopy.space)
- [x] Project showcase with filters and search
- [x] Contact info
- [ ] Vampire cat missing
- [x] Dark mode... ~~but only dark mode~~ and theme switching
- [x] Responsive design
- [ ] For real where is the cat?
- [x] Custom scrollbars
- [x] Custom favicon... oh I found the cat

## Tech Stack
- [html](https://developer.mozilla.org/en-US/docs/Web/HTML)/[css](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [typescript](https://www.typescriptlang.org/) (& [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript))
- [svelte](https://svelte.dev/)
- [vite](https://vitejs.dev/)
- [github pages](https://pages.github.com/)
- [github actions](https://github.com/features/actions)


## Development
### Prerequisites
- [node](https://nodejs.org/en/) (I use v19.7.0)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (I use npm)
- [git](https://git-scm.com/)

To run the site locally, run the following commands:
```bash
git clone https://github.com/sopyb/sopyb.github.io.git # clone the repo
cd sopyb.github.io # go into the repo
npm install # install dependencies
npm run dev # vite will run the site on localhost:5173 by default
```

## Contributing
If you want to contribute to this project, feel free to make a pull request. I'm kinda outta ideas, but I'm open to suggestions.

## License
You can do whatever you want with my code, but I would appreciate it if you told me you used it in your project so I can like look at your project. >.> I'm no lawyer, but I think this works.