# Binary Frontend

## Contribution guidelines

### Prerequisites
 - [Node.js](https://nodejs.org/en/) (v20 or higher)
 - [pnpm](https://pnpm.io/) (v8 or higher)
 - [Git](https://git-scm.com/)
 - [VSCode](https://code.visualstudio.com/) (recommended)

### Vscode extensions
 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
 - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
 - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
 - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Getting started
 - Clone the repository using `git clone git@github.com:BinarySUST/web-frontend.git`
 - Install dependencies using `pnpm install`
 - Run the development server using `pnpm dev`
 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project structure
  - `./app` - controls the nextjs routing and layout of the project
  - `./components` - contains all the components common across the project
  - `./modules` - contains all the features in a module based structure
  - `./utils` - contains all the utility functions
  - `./styles` - contains all the global styles with scss and tailwind 


### Adding a new feature/fixing a bug

> [!CAUTION]
> Please make sure you are working on a new branch and not on the `main` branch. Please do not push directly to the `main` branch. Always create a pull request.

  - git pull the latest changes from the `main` branch
  - Create a new branch using `git checkout -b <feature/issue/hotfix>/<module-name>/<branch-name>`
    - For example, if you are working on the `login` module and you are adding a new feature, you can create a branch named `feature/login/google-login`
    - If you are working on the `login` module and you are fixing a small bug, you can create a branch named `hotfix/login/login-spelling`
    - If you are working on the `login` module and you are fixing an issue, you can create a branch named `issue/login/button-loading-state`
  - Make your changes
  - Commit your changes using `git commit -m "<commit-message>"`
  - try to follow the [conventional commit](https://www.conventionalcommits.org) and [angular commit](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) format for commit messages, we will add a commit message linting system later
  - Push your changes using `git push -u origin <branch-name>` (you only need to use `-u` for the first time to create a remote branch)
  - Create a pull request from your branch to the `main` branch
  - Wait for the pull request to be reviewed and merged

