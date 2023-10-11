---
title: Troubleshoot Welcome App
id: troubleshoot-welcome-app
description: Troubleshooting common issues with the TCET Linux welcome app.
sidebar_label: Troubleshoot Welcome App
keywords: [Welcome App, Troubleshooting, Autostart, Yad]
---

The **TCET Linux welcome app** is designed to provide a *helpful introduction whenever you start your computer.* However, like any software, there may be instances where you encounter issues or want to customize its behavior. In this guide, **we'll cover common troubleshooting scenarios and how to manage the welcome app.**

### Autostarting the Welcome App

The welcome app is set to **autostart by default,** meaning it displays automatically when you boot up your system. **You can control this behavior:**

1. **Enabling Autostart**:
   - If the welcome app isn't autostarting, you can ensure it's enabled by following these steps:
     - Click on the **TCET Linux Applications Menu**.
     - Navigate to Welcome App
     - In the **TCET Linux Welcome App Click on Toggle Autostart**

2. **Disabling Autostart**:
   - If you prefer not to see the welcome app at startup, you can disable autostart by following these steps:
     - Click on the **TCET Linux menu**.
     - Navigate to **Settings** and select **Session and Startup**.
     - In the **Application Autostart** tab, uncheck **Welcome App**.

### Yad and the Welcome App

The **TCET Linux welcome app is built using Yad,** a utility for creating graphical dialogs in shell scripts. When you save your session and shut down or restart, *Yad may appear instead of the welcome app. This behavior is expected, as Yad is the underlying tool used to create the welcome app.*

### Troubleshooting Common Issues

*While the welcome app generally works smoothly, there may be occasions where you encounter issues.* Here are some steps to troubleshoot common problems:

1. **Welcome App Not Closing**:
   - If the welcome app doesn't close as expected or remains on your screen, you can identify its process and force it to close:
     - Open a terminal.
     - Run the following command to find the process ID (PID) of the welcome app:
       ```bash
       pidof yad
       ```
     - Once you have the PID, terminate the process using the following command:
       ```bash
       killall -9 <PID>
       ```
     Replace `<PID>` with the actual process ID you obtained in the previous step. This will help you to turn off the Yad application.

2. **Welcome App Behavior Issues**:
   - If you encounter any unexpected behavior or errors with the welcome app, it's a good idea to provide detailed information about the issue when seeking help from the TCET Linux community or support channels. Include any error messages to assist with troubleshooting.

By following these troubleshooting steps, you can effectively manage and resolve common issues related to the TCET Linux welcome app. **If you encounter persistent problems or need further assistance, don't hesitate to reach out to the TCET Linux community for support.**



<img src = "https://user-images.githubusercontent.com/53911515/266057292-11aabf1b-a8f2-46b4-b18e-3ba81a4f60e9.png" style={{ border: "2px solid gray" }} />

<br />
<center><b><figcaption>TCET Linux Welcome App</figcaption></b></center>
<br />


:::tip
1. You can visit on some learning resources listed on **[Resource Page](/docs/projects/tcet-linux/resources.md)** of TCET Linux documentation.
2. For additional help ask on the **TCET Linux Discussions Channel** group on **[TCET Linux Discord Server](https://discord.gg/r7ZhAREg2M)**.
:::
<br />

_The [**Troubleshoot Welcome App**](troubleshoot-welcome-app) was successfully executed! Let's move on and see how we can [**Contribute to TCET Linux**](../../contribute-tcet-linux) of **[TCET Linux](https://linux.tcetmumbai.in/)**._