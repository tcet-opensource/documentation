---
title: Getting Started
id: getting-started
sidebar_label: Getting Started
---

:::warning minimum hardware requirements

Operating System development and testing is a resource intensive process. We recommend doing this on computers with atleast the following specifications:

- A 4C, 8T CPU, with each core running at 3.5 Ghz and above.
    1. Intel CPUs - 8th Gen core-i5 and above recommended
    2. AMD CPUs - Zen 2 3000 series (AMD Ryzen 5 and above recommended)
- 8 GB of RAM and above. We recommend setting up `SWAP` space for 8GB. We also recommend dual-channel memory if possible on your system. Overclock if possible.
- Proper cooling for the CPU. Liquid cooling if possible or a good air-cooler. Stock coolers are discouraged.
- Alot of disk space. Atleast 50GB.

:::

To start with development of TCET Linux, you need to have the following on your computer:

- Arch Linux or it's derivative distribution that contain the official Arch repositories and use the EXT4 filesystem - TCET Linux, ALG, EndeavourOS, ArcoLinux are recommended options. (Manjaro and Garuda are discouraged)
- Essential Packages - `archiso, base-devel, git, pacman-contrib`
- Properly configured Git version control system



## Local Setup
### Install packages
Install required packages:

```bash
sudo pacman -Sy archiso git base-devel pacman-contrib
```

### Clone repositories
Clone the following repositories:
- TCET Linux ISO Profile: 
    ```bash
    git clone https://github.com/tcet-opensource/tcet-linux.git
    ```

- TCET Linux Settings
    ```bash
    git clone https://github.com/tcet-opensource/tcet-linux-settings.git
    ```

- Package Repository
    ```bash
    git clone https://github.com/tcet-opensource/tcet-linux-applications.git
    ```

- PKGBUILDs
    ```bash
    git clone https://github.com/tcet-opensource/tcet-linux-pkgbuild.git
    ```

- Installer Config
    ```bash
    git clone https://github.com/tcet-opensource/tcet-linux-installer-config.git
    ```

### Setup alias for resuable command
1. Open your `~/.bashrc` or `~/.zshrc` depeding on your shell. Enter the following alias into this file.

```bash
alias makeiso="sudo mkarchiso -v ."
```

2. Then evaluate your shell config. 
```bash
source ~/.bashrc
```

or

```bash
source ~/.zshrc
```