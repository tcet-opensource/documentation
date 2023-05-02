---
title: ISO Profile
id: iso-profile
sidebar_label: ISO Profile
description: ISO Profile of TCET Linux
keywords: [tcet, open-source, linux]
---

The following is the TCET Linux ISO profile directory structure.


``` bash
├── airootfs
│   ├── etc
│   │   └── Live ISO Configuration
│   ├── root
│   └── usr
│       └── Live ISO binaries, scripts & libraries
├── bootableusb.sh ## script to create a bootable USB
├── cleanup.sh ## script to cleanup work folders
├── efiboot
│   └── loader
│       ├── entries
│       │   └── 01-archiso-x86_64-linux.conf
│       └── loader.conf
├── grub
│   └── grub.cfg ## UEFI/GPT Systems
├── LICENSE
├── packages.x86_64
├── pacman.conf
├── profiledef.sh ## profile definition script
├── README.md
├── services.sh ## script to enable systemd services
└── syslinux
    ├── archiso_head.cfg
    ├── archiso_pxe.cfg
    ├── archiso_pxe-linux.cfg ## Legacy/MBR Systems
    ├── archiso_sys.cfg
    ├── archiso_sys-linux.cfg
    ├── archiso_tail.cfg
    ├── splash.png
    └── syslinux.cfg
```