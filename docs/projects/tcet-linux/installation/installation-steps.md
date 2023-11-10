---
title: Installation Steps
id: installation-steps
description: Installation Steps of TCET Linux.
sidebar_label: Installation Steps
keywords: [Installation Steps, Calamares Installer]
---

## **Welcome Screen**

   Launch the installer by searching for 'Install TCET Linux.' The installer will greet you with a user-friendly interface.

import installWelcome from "/docs/projects/tcet-linux/assets/installWelcome.png";

<img src = {installWelcome} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Welcome Page</figcaption></b></center>
<br />

## **Set Your Location**

   Select your location by clicking on the timezones on the map. If you have an internet connection, this should happen automatically.


import installLocation from "/docs/projects/tcet-linux/assets/installLocation.png";

<img src = {installLocation} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Location Page</figcaption></b></center>
<br />

## **Choose Keyboard Layout**

   Keyboard layout is automatically mapped by location. Verify the layout in the text box or make adjustments as needed.

import installKeyboard from "/docs/projects/tcet-linux/assets/installKeyboard.png";

<img src = {installKeyboard} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Keyboard Page</figcaption></b></center>
<br />

## **Storage Partitioning**

   - **Automatic Setup (Recommended):**
   
     The installer defaults to an automatic setup, creating a Fat32 EFI System Partition and a root partition with the ext4 filesystem. This is recommended for most users.

   - **Manual Partitioning (Advanced):**
   
     For advanced users who want complete control over their disk partitions.

     - **Select Disk:**
       Choose the disk where TCET Linux will be installed. This could be your SSD or HDD.

     - **Existing Partitions:**
       If there are existing partitions, you'll see them listed. Decide whether to modify, delete, or keep them.

     - **Create Partitions:**
       - **EFI System Partition (ESP):**
         - Size: Typically around 300MB.
         - Filesystem: FAT32.
         - Mount Point: /boot/efi.
         
       - **Root Partition (/):**
         - Size: Allocate a sufficient amount, at least 20GB.
         - Filesystem: ext4.
         - Mount Point: /.
         
       - **Swap Partition (optional):**
         - Size: Recommended to be equal to or double your RAM.
         - Filesystem: Swap.
         
       - **Home Partition (optional):**
         - Size: As per your storage needs.
         - Filesystem: ext4.
         - Mount Point: /home.

     - **Filesystem and Mount Points:**
       Assign a filesystem (e.g., ext4) and mount points for each partition.

     - **Finalize and Apply:**
       Confirm your choices and apply the changes. Double-check to avoid data loss. 

import installPartition from "/docs/projects/tcet-linux/assets/installPartition.png";

<img src = {installPartition} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Partition Page</figcaption></b></center>
<br />

## **User Details**

   Enter your desired username for the login screen. Set the administrator account password (root user). Opt for different passwords for enhanced security or keep them the same for convenience.

import installUser from "/docs/projects/tcet-linux/assets/installUser.png";

<img src = {installUser} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>User Page</figcaption></b></center>
<br />

## **Summary**

   Review a detailed summary of your choices. Confirm that the partitioning details match your preferences before proceeding.

import installSummary from "/docs/projects/tcet-linux/assets/installSummary.png";

<img src = {installSummary} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Summary Page</figcaption></b></center>
<br />

## **Installation Process**

   The installation will take approximately 5-10 minutes, depending on your SSD/HDD speed. The progress bar will keep you informed. Sit back, relax, and maybe grab a cup of coffee!

import installInstall from "/docs/projects/tcet-linux/assets/installInstall.png";

<img src = {installInstall} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Installation Process Page</figcaption></b></center>
<br />

## **Installation Complete**

   Once done, you'll receive a notification. Restart your system to boot into your freshly installed TCET Linux. Welcome to a new and exciting computing experience!

import installFinish from "/docs/projects/tcet-linux/assets/installFinish.png";

<img src = {installFinish} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Finish Page</figcaption></b></center>
<br />

:::tip
1. You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
2. For additional help ask on the **TCET Linux Discussions Channel** group on **[TCET Linux Discord Server](https://discord.gg/r7ZhAREg2M)**.
3. You can see how we can resolve any issues while installation in [**Troubleshoot-Installation**](troubleshoot-installation) section for **[TCET Linux](https://linux.tcetmumbai.in/).
4. You can also read the installation steps guide in our website **[TCET Linux](https://linux.tcetmumbai.in/#installation).
:::
<br />

_The [**Installation Steps**](installation-steps) was successfully executed! Let's move on and see how we can resolve any issues in [**Troubleshoot-Installation**](troubleshoot-installation) section for **[TCET Linux](https://linux.tcetmumbai.in/)**._
