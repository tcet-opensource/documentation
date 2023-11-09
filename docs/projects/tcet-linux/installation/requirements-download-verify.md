---
title: Requirements Download & Verify
id: requirements-download-verify
sidebar_label: Requirement Download Verify
description: A brief overview of Requirements Download Verify
keywords: [Open Source, TCET Linux, Requirements, Download, Verify, Checksum, SHA256SUM ]
---

## System Requirements

Before you begin your journey with TCET Linux, it's essential to ensure that your system meets the minimum requirements:

- 64-bit processor
- At least 2GB of RAM
- 15GB of free disk space
- An internet connection for updates and software installation

These requirements ensure that TCET Linux runs smoothly on your computer, whether it's a modern system or a resource-constrained machine.

## Downloading TCET Linux

To get started with TCET Linux, you can download the latest ISO image from the TCET Linux website. We recommend the following steps for downloading and creating a bootable USB drive:

1. Visit the TCET Linux website at **[TCET Linux Website](https://linux.tcetmumbai.in/)**.
2. Locate the download section and select the latest TCET Linux ISO image.
3. Download the ISO image to your computer.

## Verify
### Step 1: Verify the Integrity of the TCET Linux ISO

Before proceeding with the installation, it's crucial to verify the integrity of the downloaded TCET Linux ISO file.

- Here *IMAGE:* Refers to the downloaded ISO file (iso-name.iso in Step 1).
- The verification is performed to guarantee the integrity of the downloaded file and to prevent potential corruption during the download process.
- TCET Linux provides a unique checksum for each OS release, enhancing security and ensuring that users have an authentic and unaltered file.

Follow these steps based on your operating system:

*Windows:*

1. Open the Windows Terminal (PowerShell) in the directory where the ISO file is located.

2. Type the following command and press Enter:
   ```powershell
   certutil -hashfile iso-name.iso sha256
   ```

*MacOS:*

1. Open the Terminal in the directory where the ISO file is located.

2. Type the following command and press Enter:
   ```bash
   shasum -a 256 iso-name.iso
   ```

*Linux:*

1. Open the Terminal in the directory where the ISO file is located.

2. Type the following command and press Enter:
   ```bash
   sha256sum iso-name.iso
   ```

### Step 2: Compare the Hash Value

After running the verification command, compare the returned hash value with the provided SHA256SUM below. Ensure that they match to confirm the authenticity of your download.

The Updated SHA256SUM for TCET Linux ISO is provided on the **[TCET Linux Website Verify Section](https://linux.tcetmumbai.in/#verify)** of the **[TCET Linux Website](https://linux.tcetmumbai.in/)**.


By following these steps and confirming the match of the hash values, you can proceed with confidence, knowing that your TCET Linux installation file is genuine and secure. If the hash values do not match, consider re-downloading the ISO file to avoid potential issues during installation.


:::tip
1. You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
:::
<br />

_The [**Requirements Download & Verify**](requirements-download-verify) was succesfully executed! Let's move on and see how we can [**Install In Drive**](installation-in-drive) of **[TCET Linux](https://linux.tcetmumbai.in/)**._
