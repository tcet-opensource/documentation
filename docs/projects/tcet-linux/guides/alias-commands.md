---
title: Alias Commands
id: alias-commands
description: Aliases for commands in TCET Linux
sidebar_label: Alias Commands
keywords: [Alias Commands, Terminal Shortcuts, autoremove, clr-cache, fix-keys, fsh-alias, grep, install, ll,local-install, ls, pkg-info, remove, run-help, search, search-local, sync, unlock, update, version, which-command]
---

Explore the world of TCET Linux! Learn how to **create and remove aliases**, and get familiar with the **default aliases** for an *enhanced user experience*.

### Create Alias

To **create the alias**, use the `alias` command followed by the keyword you want to use with a equal sign (=), and the command you want to associate with the alias, enclosed in single quotes or double quotes. Hence as a result the keyword will get mapped with the commmand. Here's an example for creating an alias for listing files and directories:

```bash
alias LA='ls -la'
```

### Remove Alias
To remove an alias, use the `unalias` command **followed by the alias name** you used to map the command with keyword. For example, to remove the LA alias:

```bash
unalias LA
```

import editAliasCommand from "/docs/projects/tcet-linux/assets/edit-alias-commands.png";

<img src = {editAliasCommand} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>Add & Remove Alias Example</figcaption></b></center>
<br />


## All Alias Commands

Below is the list and documentation of **all the aliased commands installed by default in the TCET Linux**. Some commands use the comman command word sudo and pacmank, the breakdown of the commands are as follows:

- `sudo`: This is used to run the command with superuser privileges, allowing you to install packages system-wide.
- `pacman`: This is the package manager for Arch Linux and its derivatives.

### Autoremove

To **remove packages along with their dependencies** that are no longer required, you can use the following command:

```bash
autoremove package_name
```
OR
```bash
sudo pacman -Rns package_name
```

The `sudo pacman -Rns` command is used to *remove packages and their dependencies, including packages that are no longer required by any other installed packages*. Here's the breakdown of the command:

- `-R`: This flag specifies that you want to remove a package.
- `-n`: This flag tells `pacman` to remove only packages that are no longer required by any other installed packages (orphans).
- `-s`: This flag instructs `pacman` to remove package dependencies as well.

However, **use it with caution** as it may affect your system's stability if you remove packages that are still required for other software to function properly.

### Clear Cache

To **clear the package cache and free up disk space**, you can use the following command:

```bash
clr-cache
```
OR
```bash
sudo pacman -Scc
```

The `sudo pacman -Scc` command is used to clear the package cache on your system, which can help free up disk space. Here's an explanation of the command:

- `-Scc`: These flags together specify that you want to clear the package cache.

Running `sudo pacman -Scc` will prompt you to confirm the removal of all cached package files. *Clearing the cache can be useful to free up disk space but should be done with care, especially if you might need to reinstall packages in the future.*

### Fix Keys

If you encounter **issues with GPG keys**, you can use the following command to reset and populate them:

```bash
fix-keys
```
OR
```bash
sudo rm -rvf /etc/pacman.d/gnupg && sudo pacman-key --init && sudo pacman-key --populate
```

The `fix-keys` command is a sequence of three commands that are used to address problems related to GPG (GNU Privacy Guard) keys in the context of package management. Here's the breakdown of each part of the command:

1. `sudo rm -rvf /etc/pacman.d/gnupg`: This part of the command removes the GPG keyring directory located at `/etc/pacman.d/gnupg`. The `-r` flag indicates recursive removal, the `-v` flag stands for verbose output, and the `-f` flag is used to force the removal without asking for confirmation.

2. `sudo pacman-key --init`: After removing the GPG keyring, this part initializes a new GPG keyring using `pacman-key`, which is a tool for managing PGP keys used in package management.

3. `sudo pacman-key --populate`: Finally, this part of the command populates the new GPG keyring with keys from the keyserver, ensuring that it contains the necessary keys for package verification.

Running this command can help resolve issues related to GPG keys, which are essential for verifying the authenticity of packages during installation or update processes.

### Grep

To **search for text patterns within files while displaying line numbers and colored output**, you can use the following command:

```bash
grep "pattern" file.txt
```
```bash
grep -n --color "pattern" file.txt
```

The `grep` command is used for *text pattern matching in files*. When you run this command, **you can provide additional arguments to specify the pattern you want to search for and the files in which you want to search**. Replace `"pattern"` with the text you want to search for and `"file.txt"` with the name of the file in which you want to search. The command will then display matching lines with line numbers and highlighted text. 

- `-n`: This flag tells `grep` to display line numbers along with the matched lines.
- `--color`: This flag enables colored highlighting for the matched text in the output, making it easier to identify.

### Install

To **install packages from the official repositories**, you can use the following command:

```bash
install package_name
```
OR
```bash
sudo pacman -S package_name
```

The `sudo pacman -S` command is used to **install packages in Arch Linux-based distributions, including TCET Linux**. You can replace `package_name` with the name of the package you want to install.

- `-S`: This flag is used to specify that you want to install a package.

### LL

To list files and directories in a directory with colored output, human-readable file sizes, and details, you can use the following command:

```bash
ll
```
OR
```bash
ls --color=auto -lah
```

The **`ll` command is a variation of the `ls` command used for listing files and directories in a directory**. Running this command in a directory will display a detailed and color-coded list of files and directories, including hidden ones, with human-readable file sizes. Here's an explanation of the flags used:

- `--color=auto`: This flag enables colored output, but it only applies color when the output is directed to a terminal, not to a file or another program.
- `-lah`: These flags are used for listing files and directories with specific details:
   - `-l`: This flag tells `ls` to use a long listing format, displaying additional information such as permissions, ownership, file size, and modification date.
   - `-a`: This flag includes hidden files and directories (those starting with a dot, like `.config`) in the listing.
   - `-h`: This flag makes file sizes human-readable, displaying sizes in a more easily understandable format (e.g., "2.3M" instead of bytes).

### Local Install

To **install local packages (packages not from the official repositories)**, you can use the following command:

```bash
local-install package.tar.zst
```
OR
```bash
sudo pacman -U package.tar.zst
```

The `sudo pacman -U` command is used to **install packages in Arch Linux-based distributions, from local files or URLs**. *You would typically use this command to install packages that you have downloaded manually or obtained from sources other than the official repositories.* For example, to install a package with the filename "package.tar.zst" located in your current directory, you would use the aliased command. Here's a brief explanation of the command:

- `-U`: This flag is used to specify that you want to install a package from a local file or a URL.

### LS

To **list files and directories** in a directory with **colored output** based on file type, you can use the following command:

```bash
ls
```
OR
```bash
ls --color=auto
```

The `ls` command used for listing files and directories in a directory with **colored output**. Running this command in a directory will display a list of files and directories with color-coded formatting based on their types, *making it easier to distinguish between different types of files*. Here's an explanation of the flag used:

- `--color=auto`: This flag enables colored output, but it only applies color when the output is directed to a terminal, not to a file or another program.

### Package Info

**To obtain detailed information about a specific package installed on your system**, you can use the following command:

```bash
pkg-info package_name
```
OR
```bash
sudo pacman -Qi package_name
```

The `sudo pacman -Qi` command is used to **query information about a package**. Replace `package_name` with the name of the package you want to obtain information about. This command will display detailed information about the specified package, including its *version, description, installation status, and more*.

### Remove

**To remove packages from your system**, you can use the following command:

```bash
remove package_name
```
OR
```bash
sudo pacman -R package_name
```

The `sudo pacman -R` command is used to uninstall packages. Replace `package_name` with the name of the package you want to remove. This command will prompt you to confirm the removal of the specified package. After confirmation, the package will be uninstalled from your system. **This command will not remove the dependencies of the package**. **To remove the package with the dependencies use `autoremove` command**.

### Run Help

**To access manual pages for various commands** and get detailed help and documentation, you can use the `man` command.

```bash
run-help command_name
```
OR
```bash
man command_name
```

*Replace `command_name` with the name of the command or utility* for which you want to access the manual page. The `man` command opens a page that displays the manual page, providing comprehensive information about the command's usage, options, and functionality. It's a valuable resource for learning how to use and understand various commands on your TCET Linux system. *You can navigate through the manual page using keyboard commands like arrow keys and the "q" key to exit the pager.*

### Search

To **search for packages available in the official repositories** that match a specific search query or keyword, you can use the following command:

```bash
search search_query
```
OR
```bash
sudo pacman -Ss search_query
```

The `sudo pacman -Ss` command is used to search for packages in Arch Linux-based systems. *Replace `search_query` with the term you want to search for*. This command will display a list of packages that match the *search query, including their names and descriptions.*

### Search Local

**To search for packages installed on your system** that match a specific search query or keyword, you can use the following command:

```bash
search-local search_query
```
OR
```bash
sudo pacman -Qs search_query
```

The `sudo pacman -Qs` command is used to search for installed packages. Replace `search_query` with the term you want to search for. *This command will display a list of installed packages that match the search query, including their names and descriptions.*

### Sync

**Before installing or updating packages, it is recommended to synchronize your package database.** *You can achieve this by using the following command:*

```bash
sync
```
OR
```bash
sudo pacman -Syyy
```

The `sudo pacman -Syyy` command is used to** refresh the package databases with a full refresh.** Here's the breakdown of the command:

- The first `y` refreshes the sync databases, updating the package list from the repositories.
- The second `y` refreshes the package lists again, checking for new versions of packages.
- The third `y` refreshes the package lists a final time, ensuring that all databases are up to date.

*Running this command helps ensure that your system's package information is current, allowing you to install or update packages with the most recent data from the repositories.*

### Unlock

**If you encounter issues related to a locked package database, you can use the following command** to remove the lock:

```bash
unlock
```
OR
```bash
sudo rm /var/lib/pacman/db.lck
```

The `sudo rm /var/lib/pacman/db.lck` command is used to remove the lock file associated with the package database in Arch Linux-based systems, including TCET Linux. The lock file (`db.lck`) is created when a package management operation is in progress, and it prevents multiple package operations from occurring simultaneously to avoid conflicts.

Running this command is a way to unlock the package database if you believe it is locked incorrectly or if a package operation was interrupted or stalled. **Be cautious when using this command and ensure that no other package operations are currently in progress before removing the lock.**

### Update

**To update the package databases and upgrade installed packages to their latest versions**, you can use the following command:

```bash
update
```
OR
```bash
sudo pacman -Syyu
```

The `sudo pacman -Syyu` command is used for **updating the system in Arch Linux-based systems.**

- `-Syyu`: These flags together specify that you want to synchronize the package databases (`-Syy`) and upgrade all installed packages (`-u`).

Running this command will refresh the package databases (`-Syy`) to ensure they are up to date and then upgrade (`-u`) all installed packages to their latest available versions. It's an essential command to keep your system software current and secure.

### Version

To **display version information about your operating system** based on the contents of the `/etc/os-release` file, you can use the following command sequence:

```bash
version
```
OR
```bash
sed -n 1p /etc/os-release && sed -n 7p /etc/os-release && sed -n 8p /etc/os-release
```

The `sed` command is used for stream editing and manipulation. Here's how the command sequence works:

- `sed -n 1p /etc/os-release`: This part extracts and prints the first line of the `/etc/os-release` file, which typically contains the operating system's name and version.

- `sed -n 7p /etc/os-release`: This part extracts and prints the seventh line of the `/etc/os-release` file, which often contains version-specific information.

- `sed -n 8p /etc/os-release`: This part extracts and prints the eighth line of the `/etc/os-release` file, which often contains additional version or build information.

Running this command sequence will provide you with version-related information about your operating system based on the `/etc/os-release` file. *It can be helpful for quickly checking your system's version details.*

### Which Command

**To find the location of a command in your system's PATH**, you can use the `whence` command:

```bash
which-command command_name
```
OR
```bash
whence command_name
```

Replace `command_name` with the name of the command you want to locate. *The `whence` command will display the full path to the executable of the specified command if it exists in your system's PATH.*

import aliasCommands from "/docs/projects/tcet-linux/assets/alias-commands.png";

<img src = {aliasCommands} style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>All Default Installed Alias Commands</figcaption></b></center>
<br />



:::tip
You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />

_The [**Alias Command**](alias-commands) was succesfully executed! Let's move on and see how we do [**System Maintenance**](system-maintenance) of **[TCET Linux](https://linux.tcetmumbai.in/)**._