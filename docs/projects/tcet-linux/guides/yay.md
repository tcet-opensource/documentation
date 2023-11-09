---
title: Install AUR Packages
id: yay
sidebar_label: Install AUR Packages
description: Learn how to use YAY to install AUR packages on Arch Linux and TCET Linux.
keywords: [tcet, open-source, linux]
---

YAY is an AUR (Arch User Repository) helper for Arch Linux. It simplifies the process of installing and managing software not available in the official Arch repositories. With a user-friendly interface, YAY streamlines the installation of packages, handling dependencies and updates seamlessly. 
It enhances the Arch Linux experience by providing a convenient way to access a vast array of community-contributed packages.

To provide an efficient, customizable, and user-friendly environment suitable for a diverse range of users, TCET Linux was conceived with several key goals in mind.

# Dependency

Open a terminal and install `git` if not already installed:

```bash
sudo pacman -S git
```
# A. YAY Installation

   1. YAY on Any Arch Linux System 

      1. Clone the `yay` repository:

         ```bash
         git clone https://aur.archlinux.org/yay.git
         ```

      2. Move into the cloned directory:

         ```bash
         cd yay
         ```

      3. Build and install `yay`:

         ```bash
         makepkg -si
         ```

   2. YAY on TCET Linux

      1. Open Terminal:

         ```bash
         install yay
         ```


# B. Install AUR Packages through YAY

Once `yay` is installed, you can use it to easily install packages from the Arch User Repository (AUR). Here's how you can do it:

   1. **Search for Packages:**
      To search for a package in the AUR, use the following command:

      ```bash
      yay -Ss <package_name>
      ```
   
   2. **Install Packages**:
      To install a package from the AUR, use the following command:
   
      ```bash
      yay -S <package_name>
      ```
   
   4. **Remove Packages**:
      To remove a package installed from the AUR, use the following command:
   
      ```bash
      yay -R <package_name>
      ```

# C. Example: Installing `visual-studio-code-bin`

1. **Search for `visual-studio-code` Packages:**
   Search for available `visual-studio-code` packages on the AUR:

   ```bash
   yay -Ss visual-studio-code
   ```
2. **Install visual-studio-code-bin**:
   Choose the `visual-studio-code-bin` package and install it using the following command:

   ```bash
   yay -S visual-studio-code-bin
   ```
3. **Remove visual-studio-code-bin**:
   If you need to remove the `visual-studio-code-bin` package, use the following command:

   ```bash
   yay -R visual-studio-code-bin
   ```
Now you've successfully searched, installed, and removed the visual-studio-code-bin package using `yay` on your Arch Linux or TCET Linux system.
<br />
