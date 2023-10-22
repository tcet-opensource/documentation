---
title: Troubleshoot Installation
id: troubleshoot-installation
sidebar_label: Troubleshoot Installation
description: A brief overview of Troubleshoot Installation
keywords: [tcet, open-source, linux]
---
# Troubleshooting Installation in TCET Linux

This section provides guidance on identifying and resolving common installation-related problems in TCET Linux. If you encounter issues during the installation process, follow these steps to troubleshoot and overcome them.

## Installation Process Issues

### 1. Booting from USB Drive

*Problem:* You're unable to boot from the USB drive containing the TCET Linux installation image.

*Solution:*

- Ensure that your BIOS/UEFI settings are configured to boot from a USB drive. Access the boot menu during startup and select the USB drive as the boot device.

- Verify that the TCET Linux installation image on the USB drive is correctly created. Use tools like Rufus on Windows or dd on Linux to create a bootable USB drive.

- You can usually access the boot menu by pressing one of the function keys (F10, F11, F9, etc.) during the initial stages of your computer's startup. The specific key might vary depending on your laptop manufacturer, so consult your laptop's manual or look for on-screen prompts.

### 2. Installation Hangs or Freezes

*Problem:* The installation process freezes or hangs at a certain point, and progress is halted.

*Solution:*

- Check your system's hardware compatibility with TCET Linux. Ensure that your CPU, RAM, and other components meet the minimum requirements.

- Test the installation media for errors or corruption. The ISO image may be damaged. You can verify the integrity of the image using checksums. TCET Linux provide checksums (MD5, SHA1, or SHA256) on their download pages. Compare the checksum of your downloaded ISO file with the provided checksum to ensure it's not corrupted.

- Try booting into the "safe mode" or "nomodeset" option if available. This can help bypass hardware-related issues. These modes use generic drivers and minimal settings, which can be useful if your hardware is causing compatibility issues.


### 3. Disk Space Insufficient

*Problem:* The installation process reports insufficient disk space.

*Solution:*

- Confirm that you have at least 10GB of free disk space on the target drive. If not, free up space or select a different drive with sufficient space for installation.

- During the installation process, you can choose to manually partition the disk. Ensure that you allocate sufficient space for the root partition ("/"), home partition and any other necessary partitions.

## Post-Installation Issues

### 1. Unable to Log In

*Problem:* After installation, you are unable to log in with the provided credentials.

*Solution:*

- Double-check the username and password you entered during the installation process. Ensure that the Caps Lock key is not enabled.

- If you suspect a password issue, you can reset the password from a recovery mode or using the Live USB environment.

### 2. Internet Connection Not Working

*Problem:* You do not have an internet connection after installing TCET Linux.

*Solution:*

- Verify your network hardware. Ensure that your Ethernet or Wi-Fi adapter is recognized and functioning correctly.

- Check your network settings in the system preferences or use the ip command in the terminal to diagnose network issues.
  
1. Check Network Manager status.

  ```bash
  sudo systemctl status NetworkManager.service
  ```

2. If status is inactive then enable and start Network Manager.

  ```bash
  sudo systemctl enable NetworkManager.service
  sudo systemctl start NetworkManager.service
  ```

:::tip
1. If you choose manual partitioning, ensure you have knowledge about partitioning and correctly set up boot, root, home, and swap partitions.
2. Make sure you are using the latest TCET Linux ISO for installation. Downloading the latest ISO ensures that you benefit from the most recent updates, bug fixes, and improvements.
:::

These troubleshooting steps should help you resolve common installation issues in TCET Linux. If you encounter complex or unique problems, consider seeking assistance from the TCET Linux community forums or discord channel for more personalized help and solutions.
