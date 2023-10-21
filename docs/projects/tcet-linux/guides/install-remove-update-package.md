---
title: Package Management
id: install-remove-update-package
description: Install, Remove & Updation of packages
sidebar_label: Package Management
keywords: [Pacman, yay, Installation, Package manager, Arch User Repository (AUR helper), Uninstallation, Package removal, Package updates]
---

This guide will help you understand how to **install**, **remove**, and **update** packages on your ***TCET Linux system*** and in **Arch based distributions**. This distributions follows a package management system named **pacman**, making it *efficient*, *user-friendly* and *easy* to learn and operate. This distributions follows *rolling releases of applications and packages* hence packages are updated on regular basis hence it is important to *synchronize the package database* and *update the application*. Many times for *troubleshooting* and *system maintenance* you might need to remove a package, hence the guide will also help you there.

## Pacman
Packages in **Arch based distributions** is managed by package manager called pacman. The official releases of packages are published on the pacman package manager. Here `sync`, `install`, `remove`, `autoremove` are the shortcut command that is `alias commands` as mentioned in [**Alias Commands Section**](alias-commands). In the commands mentioned below, `sudo` is used to run the command with *superuser privileges*, allowing you to *install packages system-wide* and `pacman` is the name of the *package manger*. The detailed explanation of this commands are covered in [**Alias Commands**](alias-commands) section of TCET Linux documentation.

### Sync
Before installing any package it is always recommened to **synchronize your package database**. For that use command:
   ```
   sync 
   ```
OR
   ```
   sudo pacman -Syyy
   ```

The command `sudo pacman -Syyy` is used to *refresh the package databases* with a full refresh.
  
### Install
To **install a package** and its necessary depedencies use the following command,
   ```
   install package_name
   ```
OR 
   ```
    sudo pacman -S package_name
   ```

  The command `sudo pacman -S` is used to install packages from the **official repositories** of the applications and packages and also from TCET Linux repositories.

### Remove
To **remove a package** from your package database use command:
   ```
   remove package_name
   ```
OR
   ```
    sudo pacman -R package_name
   ```
   This command `sudo pacman -R` is used to **remove packages** from your system **without removing dependencies installed along with it**.

### Autoremove
*Packages also come with dependencies* on which package relies on in order to function properly. **To remove package with its dependencies** use command:
   ```
   autoremove package_name
   ```
OR
   ```
    sudo pacman -Rns package_name
   ```
The `sudo pacman -Rns` command in TCET Linux, is used to *remove a package along with its dependencies* that are no longer required by any other installed packages.

import installAutoremove from "/docs/projects/tcet-linux/assets/install-autoremove.png";

<img src = {installAutoremove} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Install & Autoremove htop</figcaption></b></center>
<br />
<br />

## YAY AUR Helper
The default package manager in TCET Linux is ***pacman*** but depending on circumstances you might need to install the packages form Arch User Repository (AUR) with AUR helper. There are many AUR helpers to install the AUR packages, but the most popular is **YAY**.

### Installing YAY
It is recommended to synchronize the package database and perform a system upgrade before proceeding further. To install the **yay AUR helper**, we need to install the `git` and `base-devel` group of package on the system. So to install the git and base-devel on the system, use the following command:

```
sudo pacman -S --needed base-devel git
```

import yayStep1BaseDevel from "/docs/projects/tcet-linux/assets/yay-step1-base-devel.png";

<img src = {yayStep1BaseDevel} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Step 1 Base Devel and Git</figcaption></b></center>
<br />

**To install yay on the TCET Linux**, use the following commands:

```
git clone https://aur.archlinux.org/yay-git.git
cd yay-git
makepkg -sri
```

import yayStep2Makepkg from "/docs/projects/tcet-linux/assets/yay-step2-makepkg.png";

<img src = {yayStep2Makepkg} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Step 2 Install YAY</figcaption></b></center>
<br />

### Demo Installation
Hence now we have installed the `yay` AUR helper on the TCET Linux system. **YAY** provide similar flags like Pacman to manage the packages. So to install the packages using the `yay` use `-S` option with `yay` command. That is `yay -S package_name`. This is ***demo installation of Google Chrome*** on TCET Linux. To install the **google-chrome on TCET Linux** with yay, use the following command:

```
yay -S google-chrome
```

import yayInstallChrome from "/docs/projects/tcet-linux/assets/yay-install-chrome.png";

<img src = {yayInstallChrome} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Install Chrome using YAY</figcaption></b></center>
<br />


:::tip
You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />

_The [**Package Management**](install-remove-update-package) was succesfully executed! Let's move on and see how we use [**Alias Commands**](alias-commands) of **[TCET Linux](https://linux.tcetmumbai.in/)**._