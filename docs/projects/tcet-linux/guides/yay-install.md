---
title: Yay Install
id: yay-install
sidebar_label: how to set up yay
description: How to install yay and packages through yay
keywords: [tcet, open-source, linux]
---

`yay` is an AUR (Arch User Repository) helper for Arch Linux. It simplifies the process of installing and managing software not available in the official Arch repositories. With a user-friendly interface, `yay` streamlines the installation of packages, handling dependencies and updates seamlessly. It enhances the Arch Linux experience by providing a convenient way to access a vast array of community-contributed packages.: to provide an efficient, customizable, and user-friendly environment suitable for a diverse range of users. TCET Linux was conceived with several key goals in mind:

# Dependency

Open a terminal and install `git` if not already installed:

```bash
sudo pacman -S git
```

# 1. Yay on Any Arch Linux System

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

---

# 2. Yay on Tcet Linux

Open Terminal:

```bash
install yay
```

<br />
