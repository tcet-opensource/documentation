---
sidebar_position: 1
title: Getting Started
id: getting-started
sidebar_label: Getting Started
---

Basic Document on how to get started with the Docs Site.

## Steps to run the site on your local system: 
These are the steps you need to follow to get this site on your local system.

### Install Git in your computer
Follow these steps to install git in your computer.
1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Click on Windows. Download should start.
3. Go to downloads and install the package.

### Clone the repo
Open Git Bash in any folder and paste the following command

```bash
git clone -b experiment https://github.com/tcet-opensource/documentation.git
```

### Install NodeJS

1. Go to [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Select <b>Current</b>.
3. Download the 64-bit .msi version. Follow the steps and install NodeJS.

:::note

It is important to have NodeJS in your system

:::

### Open the folder in VS Code
1. Install [VS Code](https://code.visualstudio.com/docs/?dv=win32user) if not installed. 
2. Open Windows Terminal in the folder you have cloned the repo, as done in [step 2](#clone-the-repo).

### Install Important Packages/Dependencies

Install Docusaurus

```bash
npm install docusaurus
```

### Run the site live locally + making changes

You can run the site by running the following command in VC Code terminal.
```bash
npm run start
```

You can make changes to your respective files and changes will be shown once you have saved the file.