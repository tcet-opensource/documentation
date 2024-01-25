---
title: Drive partitioning Guide
id: partitioning
description: Explanation for partitioning of drive
sidebar_label: Drive partitioning Guide
keywords: [Partitioning guide, Partition, guide, linux]
---


Partitioning your drive is a crucial step when installing TCET Linux alongside Windows. This guide will walk you through the process of partitioning your drive to create space for TCET Linux while preserving your existing Windows installation.

## Prerequisites

Before you begin, ensure you have:

- **Backup:** Create a backup of important data on your Windows machine to avoid data loss.

## Steps to Partition Drive for TCET Linux on Windows

1. **Create Backup:**
   - Before making any changes, back up your important data to prevent potential data loss during the partitioning process.

2. **Open Disk Management:**
   - Press `Win + X` and select "Disk Management" from the menu.
   - Or you can do right click on This PC and click on manage and go to Disk Management.

3. **Shrink Existing Partition:**
   - Right-click on the partition you want to shrink (usually C:), and select "Shrink Volume."
   - Enter the amount of space to shrink (15 GB atleast is recomended). This will create unallocated space for TCET Linux.

4. **Create a New Partition:**
   - Right-click on the unallocated space and select "New Simple Volume."
   - Follow the wizard, assigning a drive letter or path and formatting the partition (choose NTFS).

5. **Format the New Partition:**
   - Right-click on the newly created partition and select "Format."
   - Choose the file system as NTFS, set a volume label (e.g., TCET-Linux), and perform a quick format.

6. **Boot from TCET Linux USB:**
   - Restart your computer with the TCET Linux USB drive inserted.
   - Enter the BIOS/UEFI settings to set the USB drive as the first boot device.
   - If your system has to option of secure boot then turn it off.

7. **Start TCET Linux Installer:**
   - Once the system boots from the USB drive, select "Boot TCET Linux" from the menu.

8. **Follow Installation Steps:**
    - During installation, choose the option to install TCET Linux alongside Windows.
    - Select the partition you created for TCET Linux when prompted.

9. **Complete the Installation:**
    - Let the installer complete the initiate process.

10. **Installation Setup:**
    - Follow installation instructions to set up your system.

_Congratulations! You've successfully done [**partitioning of your drive**](partitioning). Let's move on and see how we can proceed with [**Installer**](installation-steps) of **[TCET Linux](https://linux.tcetmumbai.in/)**._