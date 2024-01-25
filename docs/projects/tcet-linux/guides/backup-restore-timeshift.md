---
title: Backup and Restore
id: backup-restore-timeshift
description: Backup and Restore Your TCET Linux System Using Timeshift
sidebar_label: Backup and Restore
keywords: [Backup and Restore, Backup, Restore, Timeshift]
---

Ensuring the safety of your TCET Linux system is paramount, and having a reliable backup solution is the key to a quick recovery in case of unexpected issues. Timeshift, a powerful backup tool, allows you to create snapshots of your system's files and settings, providing an efficient way to revert to a previous state. This guide will walk you through the process of installing, configuring, and using Timeshift for both backup and restoration on TCET Linux.

## Installation of Timeshift on TCET Linux

Before you embark on securing your system with Timeshift, ensure that it is installed. Here are the steps for installing Timeshift on TCET Linux, which is based on Arch Linux.

### For Arch Linux and Derivatives

1. **Enable AUR:**
   - Timeshift is available in the Arch User Repository (AUR). Enable AUR in your package manager, or use an AUR helper like `yay`.
     ```bash
     yay -S timeshift
     ```

2. **Install Timeshift:**
   - Use the AUR helper to install Timeshift on your system.

Now that Timeshift is installed, let's proceed with configuring and using it.

:::tip
You can see how to install yay in your TCET Linux System on **[Install AUR Packages](yay)** of TCET Linux documentation.
:::
<br />

## Configuring Timeshift for Backup on TCET Linux

Follow these detailed steps to set up Timeshift for creating backups on your TCET Linux system.

### 1. Launch Timeshift

- Open Timeshift from your application menu.

### 2. Select Snapshot Type

- Choose between RSync and BTRFS.
  - **RSync:** Recommended for systems using the default EXT4 filesystem.
  - **BTRFS:** Choose this only if your system uses BTRFS with an Ubuntu-type subvolume layout.

### 3. Select Storage Device

- Specify where the backups will be stored.
  - Use your computer's hard disk for automatic backups.
  - Use an external USB disk for manual backups.

### 4. Configure Scheduled Snapshots

- Set up scheduled backups with options like monthly, weekly, daily, etc.
- Specify the number of copies to retain for each type of scheduled backup.

### 5. Select Files/Folders

- Choose which parts of your system to back up.
- By default, user files are not backed up to avoid overwriting changes made after the backup.

### 6. Create the Backup

- After completing the setup, click on the "Create" button to initiate the backup process.
- Monitor the progress through the provided window.

## Advanced Timeshift Usage on TCET Linux

### Handpicking Files and Folders for Backup

- Timeshift allows you to select specific files or folders to include in the backup.
- In Timeshift settings, go to the Filters tab and use the "Add Files/Folders" option to select additional items.

### Backing Up Files with Specific Extensions

- If you want to backup files with specific extensions (e.g., .mp3, .pdf), Timeshift supports this.
- In Timeshift settings, go to the Filters tab, use the "Add" button to provide extensions, and set them to be included in the backup.

## Restoring Your TCET Linux System Using Timeshift

Now, let's explore the process of restoring your TCET Linux system using the previously created Timeshift backups.

### 1. Restoring from the Same OS

- If you can still log into your TCET Linux OS and want to revert to a previous state, launch Timeshift from the menu.
- Select a snapshot from the list and click "Restore."

### 2. Restoring when Unable to Log In

- For systems unable to log into the graphical environment, use a live Linux USB for restoration.

### 3. Install Timeshift in Live USB

- Boot into the live Linux session using a USB drive.
- Install Timeshift in the live session.
  ```bash
  sudo add-apt-repository universe
  sudo apt install timeshift
  ```

### 4. Go through the Setup Wizard

- Launch Timeshift in the live session, select RSync, and choose the backup drive used previously.

### 5. Restore the Backup

- Select the backup to restore and follow the prompts to specify restore paths.
- Let Timeshift install the bootloader again.

### 6. Confirmation and Completion

- Confirm suggested actions, acknowledge data modification warnings, and proceed with the restoration.
- Once completed, reboot the system.

## Conclusion

In conclusion, Timeshift is a powerful tool for creating and restoring backups on your TCET Linux system. Following the steps outlined in this guide will help you safeguard your system against unforeseen issues and provide a straightforward method for recovery. Regularly creating backups is a good practice to ensure the security and stability of your TCET Linux environment.

:::tip
You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />