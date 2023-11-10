---
title: Installation in VM
id: installation-in-vm
sidebar_label: Installation in VM
description: A brief overview of Installation in VM
keywords: [tcet, open-source, linux]
---

# Installing TCET Linux on a Virtual Machine

In this guide, we'll walk you through the steps to download and install TCET Linux on a Virtual Machine (VM). TCET Linux is a customizable Linux distribution based on Arch Linux, suitable for a wide range of use cases. By running it on a VM, you can explore its features without affecting your primary operating system.

## Prerequisites

Before you begin, make sure you have the following:

- A Virtual Machine software (e.g., VirtualBox, VMware, or Hyper-V) installed on your host machine.
- The TCET Linux ISO image downloaded from the TCET Linux website.

## Steps to Install TCET Linux on a Virtual Machine

1. *Create a New Virtual Machine:*

   - Open your Virtual Machine software (e.g., VirtualBox).
   - Click on "New" to create a new virtual machine.
   - Choose a name for your VM (e.g., "TCET Linux").
   - Select the appropriate Type and Version (e.g., "Linux" and "Arch Linux 64-bit" if available).
   - Allocate at least 2GB of RAM to the VM.
   - Create a new virtual hard disk with a minimum of 20GB of space.

2. *Configure VM Settings:*

   - Select your TCET Linux VM in the VM manager.
   - Go to "Settings."
   - In the "System" tab, under the "Processor" tab, assign multiple CPU cores if available.
   - In the "Storage" tab, under "Controller: IDE," add the TCET Linux ISO as a bootable CD/DVD.

3. *Start the Virtual Machine:*

   - Start the VM and it will boot from the TCET Linux ISO you attached.
   - You'll see the TCET Linux boot menu. Select "Boot TCET Linux" to begin the installation process.

4. *Follow the Installation Process:*

   - The TCET Linux installer will guide you through the installation process.
   - Choose your preferred language and keyboard layout.
   - Select the "Disk Setup" option to partition your virtual hard disk. You can choose to use the entire disk or create custom partitions.
   - When prompted, choose the desktop environment and software packages you want to install.

5. *Configure Network and User:*

   - Set up your network connection. You can configure both wired and wireless connections during the installation.
   - Create a user account and set a password for it.

6. *Complete the Installation:*

   - Let the installer complete the installation process. It will install the selected packages and set up the system.

7. *Eject the ISO and Reboot:*

   - Once the installation is complete, the VM will prompt you to remove the ISO from the virtual CD/DVD drive.
   - Eject the TCET Linux ISO and reboot the VM.

8. *Log In:*

   - After rebooting, you'll be presented with the login screen.
   - Log in with the username and password you set during the installation.

9. *Post-Installation Setup:*

   - After logging in, follow the post-installation instructions to update the system and configure any additional settings.

Congratulations, you've successfully installed TCET Linux on a Virtual Machine! You can now explore and customize your TCET Linux environment according to your needs and preferences.

## Troubleshooting

If you encounter any issues during the installation or have questions about using TCET Linux on your VM, you can refer to the troubleshooting section in the TCET Linux documentation or seek assistance from the TCET Open Source's Discord Server.
