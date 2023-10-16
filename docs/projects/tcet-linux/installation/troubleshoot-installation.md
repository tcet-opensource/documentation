# Troubleshooting Installation in TCET Linux

This section provides guidance on identifying and resolving common installation-related problems in TCET Linux. If you encounter issues during the installation process, follow these steps to troubleshoot and overcome them.

## Installation Process Issues

### 1. Booting from USB Drive

*Problem:* You're unable to boot from the USB drive containing the TCET Linux installation image.

*Solution:*

- Ensure that your BIOS/UEFI settings are configured to boot from a USB drive. Access the boot menu during startup and select the USB drive as the boot device.

- Verify that the TCET Linux installation image on the USB drive is correctly created. Use tools like Rufus on Windows or dd on Linux to create a bootable USB drive.

### 2. Installation Hangs or Freezes

*Problem:* The installation process freezes or hangs at a certain point, and progress is halted.

*Solution:*

- Check your system's hardware compatibility with TCET Linux. Ensure that your CPU, RAM, and other components meet the minimum requirements.

- Test the installation media for errors or corruption. The ISO image may be damaged. You can verify the integrity of the image using checksums.

- Try booting into the "safe mode" or "nomodeset" option if available. This can help bypass hardware-related issues.

### 3. Disk Space Insufficient

*Problem:* The installation process reports insufficient disk space.

*Solution:*

- Confirm that you have at least 10GB of free disk space on the target drive. If not, free up space or select a different drive with sufficient space for installation.

- During the installation process, you can choose to manually partition the disk. Ensure that you allocate sufficient space for the root partition ("/") and any other necessary partitions.

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

- If using Wi-Fi, ensure that you have entered the correct Wi-Fi password.

### 3. Installation Errors

*Problem:* You encountered errors during the installation process, such as package download failures.

*Solution:*

- Ensure that your internet connection is stable and not interrupted during the installation. A stable connection is crucial for downloading packages.

- Try running the following command to update the package database and system after installation: sudo pacman -Syu.

- If specific packages fail to install, you can manually install them using the pacman package manager after the installation is complete.

These troubleshooting steps should help you resolve common installation issues in TCET Linux. If you encounter complex or unique problems, consider seeking assistance from the TCET Linux community forums or support channels for more personalized help and solutions.