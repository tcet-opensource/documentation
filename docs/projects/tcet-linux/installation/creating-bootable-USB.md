---
title: Steps to create bootable pendrive
id: creating-bootable-USB
description: Installation Steps of Tcet Linux using a Bootable Drive
sidebar_label: Creating Bootable USB
keywords: [Installation Steps, Installation, Steps, Guide, linux guide, bootable drive]
---

Welcome to the TCET Linux Installation guide! This comprehensive walkthrough will assist you in installing [TCET Linux](https://github.com/tcet-opensource/tcet-linux/releases/) using a bootable pendrive. Follow this guide on the [TCET Linux Website](https://linux.tcetmumbai.in/) for a seamless installation experience.

You can use tools like Rufus, Balena Etcher, or Win32 Disk Imager to create a bootable USB drive. Follow the instructions provided by your chosen tool to flash the TCET Linux ISO to the USB drive.

Here's an example with Rufus

### Step 1: Download TCET Linux

Download the latest version from our [official website](https://linux.tcetmumbai.in/#download).

import tldown from "/docs/projects/tcet-linux/assets/tldown.png";


<center>
<img src = {tldown} style={{ border: "2px solid gray" }} />


<b><figcaption>Download TCET Linux</figcaption></b></center>
<br />


### Step 2: Prepare the Bootable USB Stick with Rufus

1. Download and install [Rufus](https://rufus.ie/) on your Windows PC.


import rufusdown from "/docs/projects/tcet-linux/assets/rufusdown.png";


<center>
<img src = {rufusdown} style={{ border: "2px solid gray" }} />


<b><figcaption>Download Rufus</figcaption></b></center>
<br />


2. Open Rufus, granting necessary permissions.

import rufusprom from "/docs/projects/tcet-linux/assets/rufusprom.png";


<center>
<img src = {rufusprom} style={{ border: "2px solid gray" }} />


<b><figcaption>Rufus Window</figcaption></b></center>
<br />


3. Select your USB device under "Device" and choose the TCET Linux ISO by clicking on `SELECT`.


import rufuspromfinal from "/docs/projects/tcet-linux/assets/rufuspromfinal.png";


<center>
<img src = {rufuspromfinal} style={{ border: "2px solid gray" }} />


<b><figcaption>Rufus ISO Selection</figcaption></b></center>
<br />

4. Configure the settings: 
   - Ensure the partition scheme is MBR for compatibility with both BIOS and UEFI systems.
   - Click `START`.

import isofinal from "/docs/projects/tcet-linux/assets/isofinal.png";


<center>
<img src = {isofinal} style={{ border: "2px solid gray" }} />


<b><figcaption>Rufus Settings</figcaption></b></center>
<br />


5. Choose DD mode in the pop-up menu and click `OK`. Be aware that all data on the USB will be erased.

:::note
    Ensure you select the correct drive to avoid data loss.
:::

### Step 3: Boot from USB

1. Insert the USB into your computer and restart.
2. Access the BIOS menu (usually Delete, Escape, F9, or F10) before the Windows OS loads.
3. Under "Boot Options," select "TCET Linux" and press Enter.
4. If the screen freezes, wait for about 5 minutes; you should reach the login page.

### Linux Users

For Linux users, employ the 'dd' command in the terminal:

```bash
    sudo dd bs=4M if=/path/to/tcet-linux.iso of=/dev/sdX status=progress
```

After completing the bootable pendrive installation, your USB is ready. Proceed to the next section to learn how to install TCET Linux using a virtual machine.

Explore the potential of [TCET Linux](https://linux.tcetmumbai.in/) and enjoy a seamless open-source experience!

_After successfully implementing the **[bootable pendrive installation](creating-bootable-USB)** of **[TCET Linux](https://linux.tcetmumbai.in/)**, we were ready with a bootable drive. Next, we will be seeing how we can do partitioning of the drive._