---
title: System Maintenance
id: system-maintenance
description: System Maintenance 
sidebar_label: System Maintenance
keywords: [System Maintenance, System Update, Package Upgrade]
---

Here's a **System Maintenance guide for TCET Linux**, including a short guide with a **full system upgrade** command. System maintenance is essential to ensure the *security*, *stability*, and *performance* of your computer. Neglecting maintenance tasks can lead to *security vulnerabilities, system instability, and decreased efficiency.* By regularly maintaining your system, you can enjoy a more reliable and efficient computing experience while **reducing the risk of data loss and security breaches**.


*Remember to back up your important data before performing system maintenance, especially if you are removing packages or making significant changes to your system configuration.*

## Basic System Maintenance Commands

Here are some basic maintenance tasks:

1. **Clean Package Cache**:
   - Over time, your system accumulates **package cache files**. To clean them and free up space, use:
     ```bash
     clr-cache
     ```
     OR
     ```bash
      sudo pacman -Scc
     ```

2. **Remove Unneeded Packages**:
   - Review and **remove any unnecessary packages** to declutter your system:
     ```bash
     autoremove package_name
     ```
    OR
     ```bash
     sudo pacman -Rns package_name
     ```
     As explained in **Alias Commands Section** some packages come with dependencies essential to work them smoothly. Hence **this command removes the package with their required dependencies** from the system. 

3. **Check Disk Space**:
   - Keep an eye on your **disk space usage** with:
     ```bash
     df -h
     ```

4. **System Monitoring**:
   - Check for the applications using more than **required memory, disk space and CPU consumption** and if not needed remove them.
   - To monitor this you can use **system monitor** software installed by default in the TCET Linux system or **htop** command line utility.

## Full System Upgrade

**Performing a full system upgrade** ensures that your TCET Linux system is running the **latest software and security updates**. Here's how to do it:

1. **Open a Terminal**:
   - Launch a terminal emulator on your system.

2. **Run the Upgrade Command**:
   - To perform a full system upgrade, *use the following command*:
     ```bash
     update
     ```
     OR
     ```bash
     sudo pacman -Syyu
     ```
   
The command `sudo pacman -Syyu` is used in Arch Linux-based distributions like TCET Linux for a **full system upgrade**. Here's a breakdown of what each part of the command does:

- `sudo`: This prefix is used to run a command with **superuser (administrator) privileges**. It allows you to execute administrative tasks, like system upgrades.

- `pacman`: This is the **package manage**r used in Arch based distributions. It's used for **installing**, **updating**, and **managing software packages.**

- `-Syyu`: These are options and parameters for the `pacman` command:

  - `-S`: This option specifies that you are **installing** or **upgrading packages**.
  - `-yy`: This option forces a **refresh of the package databases**, ensuring that the package lists are up to date.
  - `-u`: This option tells `pacman` to **upgrade all installed packages** to their latest available versions.


3. **Follow Instructions**:
   - During the upgrade, you may be prompted to **enter password, confirm package installations or resolve conflicts.** Follow the on-screen instructions to proceed.

4. **Reboot Your System**:
   - After the upgrade is complete, it's a good practice to **reboot your system** to ensure that any kernel updates take effect:
     Restart from the power options menu.
     OR
     ```bash
     sudo reboot
     ```

Performing this full system upgrade regularly helps keep your TCET Linux system **secure, stable, and up to date** with the latest features and improvements.


import systemUpdate from "/docs/projects/tcet-linux/assets/systemUpdate.png";

<img src = {systemUpdate} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>System Update</figcaption></b></center>
<br />


:::tip
You can visit to some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />

_The [**System Maintenance**](system-maintenance) was successfully executed! Let's move on and see how we use [**Application Troubleshooting**](application/troubleshoot-application) of **[TCET Linux](https://linux.tcetmumbai.in/)**._