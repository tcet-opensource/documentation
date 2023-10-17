---
title: Requirements, Download and Verify
id: requirements-download-verify
sidebar_label: requirements-download-verify
description: A brief overview of requirements-download-verify
keywords: [tcet, open-source, linux]
---

# Requirements, Download, and Verification

## System Requirements

Before you begin your journey with TCET Linux, it's essential to ensure that your system meets the minimum requirements:

- 64-bit processor
- At least 2GB of RAM
- 10GB of free disk space
- An internet connection for updates and software installation

These requirements ensure that TCET Linux runs smoothly on your computer, whether it's a modern system or a resource-constrained machine.

## Downloading TCET Linux

To get started with TCET Linux, you can download the latest ISO image from the TCET Linux website. We recommend the following steps for downloading and creating a bootable USB drive:

1. Visit the TCET Linux website at [URL](insert your download link here).
2. Locate the download section and select the latest TCET Linux ISO image.
3. Download the ISO image to your computer.

## Creating a Bootable USB Drive

Once you have downloaded the TCET Linux ISO image, you'll need to create a bootable USB drive to install TCET Linux on your computer. You can use various tools for this, depending on your current operating system:

- *Windows:* You can use tools like Rufus, Balena Etcher, or Win32 Disk Imager to create a bootable USB drive. Follow the instructions provided by your chosen tool to flash the TCET Linux ISO to the USB drive.

- *Linux:* You can use the 'dd' command to create a bootable USB drive on Linux. Open a terminal and run the following command (replace /dev/sdX with the appropriate drive designation of your USB drive):
  
  ```bash
  sudo dd bs=4M if=/path/to/tcet-linux.iso of=/dev/sdX status=progress