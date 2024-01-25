---
title: Reset Password
id: reset-password
description: Reset Password for my main user
sidebar_label: Reset Password
keywords: [User Management, Reset User, Reset User Password, Reset Password, Password Reset, Root User, TCET Linux]
---

If you've forgotten the root password on your TCET Linux system, you can reset it using the following steps. This guide is tailored for in-drive installations of TCET Linux.

### Steps to Reset Root Password

1. Reboot or Power On TCET Linux:

    - Reboot or power on your TCET Linux system. During the boot process, the first entry in the GRUB bootloader menu will be selected by default.

2. Interrupt the Boot Process:

    - Interrupt the booting process by pressing the 'e' key on the keyboard. This allows you to make changes to the boot entry.


3. Modify Boot Entry:

    - Locate a line that begins with:

  ```plaintext
  linux          /boot/vmlinuz-linux
  ```

    - Navigate to the end of this line, which ends with 'quiet'. Append the parameter `init=/bin/bash` to the end of the line.

  Example:

  ```plaintext
  linux          /boot/vmlinuz-linux init=/bin/bash
  ```

4. Boot into Single-User Mode:

    - Press `Ctrl + X` to boot into single-user mode with the root filesystem mounted with read-only (ro) access rights.

5. Remount Root Filesystem:

    - Remount the root filesystem with read and write rights:

  ```bash
  mount -n -o remount,rw /
  ```


6. Reset Root Password:

    - Use the `passwd` command to reset the root password:

  ```bash
  passwd
  ```

    - Specify your new root password and confirm it. If the process is successful, you will see the output: 'password updated successfully'.


7. Save Changes and Restart:

    - Run the following command to save the changes and start TCET Linux:

  ```bash
  exec /sbin/init
  ```

That's it! You've successfully reset the root password on your TCET Linux system. You should now be able to log in with the new root password.


If you encounter any issues or have further questions, feel free to seek assistance on the TCET Linux Discord server or refer to additional resources on the TCET Linux documentation.


:::tip
1. You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />

_The [**Reset Password Guide**](reset-password) was succesfully explained! Let's move on and see how we use [**Package Management**](install-remove-update-package) of **[TCET Linux](https://linux.tcetmumbai.in/)**._
