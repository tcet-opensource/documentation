

# Activity Dekho

AICTE Dairy - To Help Organize and Maintain your Points

Visit Activity-Dekho(https://github.com/tcet-opensource/Activity-Dekho)

The following is the TCET's Activity-Dekho FOLDER STRUCTURE.


``` bash

├── public
│   └── All static files
│   
└── src
    ├── components
    │   └── All reusable and abstracted components are here
    │   
    ├── firebase
    │   ├── config.ts // contains all config options for firebase
    │   └── firestore
    │       └── collections // contains all collection specific CRUD queries
    │   
    ├── machines
    │   └── xstate Finite State Machines which hold all the logic exist here
    │   
    ├── pages
    │   └── all files here are a page
    │  
    └── utils
        ├── enums.ts //contains all constant grouped types
        ├── types.ts //contains all typescript type definations
        └── utils.ts //contains all dynamic reusable scripts

```
