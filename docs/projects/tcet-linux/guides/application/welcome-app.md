---
title: TCET Linux Welcome App
id: welcome-app
description: About TCET Linux welcome app.
sidebar_label: Welcome App
keywords: [Welcome App, Troubleshooting, Autostart, Yad]
---

TCET Linux has a simple welcome app specifically written for [TCET Linux](https://github.com/tcet-opensource/tcet-linux) but it can be used on *Arch Linux and any Arch-based distributions.* This guide will cover the **features and usage of the Welcome App, installation and lastly troubleshooting common issues with the TCET Linux welcome app.**

## Application
The TCET Linux Welcome App is designed to assist users in getting started with the operating system and accessing various helpful features and resources. It provides a convenient interface to access essential functions and information. Here's an overview of the Welcome App's features:

import welcomeApp from "/docs/projects/tcet-linux/assets/welcome-app.png";

<center>
  <img src={welcomeApp} style={{ border: "2px solid gray" }} />
  <b><figcaption>TCET Linux Welcome App</figcaption></b>
</center>

- **Update This PC**

  - Ensure that your system stays up to date by using the **"Update This PC"** feature. This performs the **full system update** for your system.

- **Fix Screen Resolution**

  - For users running TCET Linux, this option helps adjust the screen resolution to **fit your display correctly**.

- **Update Mirrors**

  - Mirrors are servers from which your system downloads software packages. The **"Update Mirrors"** feature helps you select the **fastest and most up-to-date mirrors,** ensuring faster and more reliable package downloads.

- **Arch User Repository (AUR)**

  - Access the Arch User Repository, a **community-driven repository** for Arch Linux packages. Install applications not available in the official repositories using the AUR.

- **Arch Wiki**

  - Visit the Arch Wiki, a valuable resource for **detailed information, tutorials,** and **troubleshooting** related to Arch-based distributions.

- **Join Discord Server**

  - Connect with the **TCET Linux community on Discord.** Interact with other users, seek assistance, and stay updated with discussions and announcements.

- **Contribute to TCET Linux**

  - Interested in contributing to TCET Linux development? This option provides information on how to **get involved with the project.**

- **About Us**

  - **Learn more about TCET Linux,** its development team, and the philosophy behind this Arch-based distribution.

- **Toggle Autostart in This App**

  - This feature allows you to control whether the Welcome App automatically starts when you boot your computer. You can choose to **enable or disable the autostart feature** as per your preference.

By using the Welcome App, you can make the most of TCET Linux and easily access the tools and resources you need for a smooth and efficient computing experience.

## Installation

**For Tcet-Linux**:

You don't need to install the app as it is installed by default. 
But if for reason its not installed, you can install it using the following command:
```bash
install tcet-linux-welcome
```
OR
```bash
sudo pacman -Sy tcet-linux-welcome
```

**For other Arch-based distributions**:

You can go to [Tcet Linux Repo](https://github.com/tcet-opensource/tcet-linux-repo) and download the *.zst* file from there and install it using the following command:

```bash
sudo pacman -U <name of the zst file>
```

## Troubleshoot

The **TCET Linux welcome app** is designed to provide a *helpful introduction* whenever you start your computer. However, like any software, there may be instances where you encounter issues or want to customize its behavior.

### Autostarting the Welcome App

The welcome app is set to **autostart by default,** meaning it displays automatically when you boot up your system. **You can control this behavior:**

1. **Enabling Autostart**:
   - If the welcome app isn't autostarting, you can ensure it's enabled by following these steps:
     - Click on the **TCET Linux Applications Menu**.
     - Navigate to Welcome App
     - In the **TCET Linux Welcome App Click on Toggle Autostart**

2. **Disabling Autostart**:
   - If you prefer not to see the welcome app at startup, you can disable autostart by following these steps:
     - Click on the **TCET Linux menu**.
     - Navigate to **Settings** and select **Session and Startup**.
     - In the **Application Autostart** tab, uncheck **Welcome App**.

### Yad and the Welcome App

The **TCET Linux welcome app is built using Yad and GTK-3.0,** a utility for creating graphical dialogs in shell scripts. When you save your session and shut down or restart, Yad may appear instead of the welcome app. This behavior is expected, as Yad is the underlying tool used to create the welcome app.

### Troubleshooting Common Issues

*While the welcome app generally works smoothly, there may be occasions where you encounter issues.* Here are some steps to troubleshoot common problems:

1. **Welcome App Not Closing**:
   - If the welcome app doesn't close as expected or remains on your screen, you can identify its process and force it to close:
     - Open a terminal.
     - Run the following command to find the process ID (PID) of the welcome app:
       ```bash
       pidof yad
       ```
     - Once you have the PID, terminate the process using the following command:
       ```bash
       killall -9 <PID>
       ```
     Replace `<PID>` with the actual process ID you obtained in the previous step. This will help you to turn off the Yad application.

2. **Welcome App Behavior Issues**:
   - If you encounter any unexpected behavior or errors with the welcome app, it's a good idea to provide detailed information about the issue when seeking help from the TCET Linux community or support channels. Include any error messages to assist with troubleshooting.

By following these troubleshooting steps, you can effectively manage and resolve common issues related to the TCET Linux welcome app. **If you encounter persistent problems or need further assistance, don't hesitate to reach out to the TCET Linux community for support.**

:::tip
1. You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
2. For additional help ask on the **TCET Linux Discussions Channel** group on **[TCET Linux Discord Server](https://discord.gg/r7ZhAREg2M)**.
:::
<br />

_The [**Welcome App**](welcome-app) was successfully executed! Let's move on and see how we can [**Contribute to TCET Linux**](../../contribute-tcet-linux) of **[TCET Linux](https://linux.tcetmumbai.in/)**._
