---
title: About Us
id: about-us
description: About Us Component in T&P Website
sidebar_label: About Us
---
About Training & Placement Cell in TCET

This page describes a brief introduction of what is T&P cell in TCET and how does it helps in bridging the gaps between the students and the industries. It gives us a brief idea about it's functioning. The other important sections in this page involves the Staff section, which gives us the gist about the Training and Placement staff who are working in this department. Moving forward with the page, there is a Contact form provided. This form is enebled for better communication in case of any doubts, queries or suggestions with the T&P cell.

### The Staff Section

File: [Staff.tsx](src/components/About/Staff.tsx)

Description: 
 * This file contains the Staff component and sub-component.
 * The Staff component renders a list of staff members, while the StaffPost component represents an individual staff member's information.

Dependencies: 
 * **React** from "react"
 * **StaffTNP** from "../../env"

The program can be explained as follows:

1. This section of the code imports the necessary dependencies and clearly defines the Staff component. It receives a data prop, which is an array of StaffTNP objects. The component then maps over the data array and makes available a StaffPost component for each staff member.

import React from "react";
import { StaffTNP } from "../../env";

const Staff: React.FC<{
  data: StaffTNP[];
}> = ({ data }) => {
  return (
    <div className="md:flex grid grid-cols-1 md:justify-between pt-4 flex-wrap gap-8">
      {data.map(staff => <StaffPost {...staff}/>)}
    </div>
  );
};

export default Staff;

2. Here, the **StaffPost** component represents an individual staff member's details. It receives the **staffInfo** object as its props, which contains information such as **staffPhoto**, **StaffName**, **designation**, and **experties**. The component provides a div with the staff member's photo, name, designation, and expertise.

const StaffPost = (staffInfo: StaffTNP) => {
  return (
    <div className="border bg-[#f9fafb] rounded-lg p-4 flex flex-col justify-center items-center gap-2">
      <img src={"/Testimonials/" + staffInfo.staffPhoto} alt="staffFoto" className="w-52 rounded-xl"/>
      <div className="font-semibold">{staffInfo.StaffName}</div>
      <div>{staffInfo.designation}</div>
      <div className="bg-[#E4E7EC] px-3 py-2 rounded-lg text-sm w-full text-slate-600 text-center">{staffInfo.experties}</div>
    </div>
  );
};

### The Contact Form Section
 
File: [ContactForm.tsx](src/components/About/ContactForm.tsx)

Description:
 * This file contains the **ContactForm** component, which represents a contact form. 
 * It allows users to enter their contact information and message, and submit the form via email.

Dependencies: **React** from "react"

The program can be explained as follows:

1. **ContactForm Component:** This component is used to represent the form. It allows to enter the contact details along with the message, and submit it.

2. **Form Structure:** It describes the structure and fields of the contact form with their purpose.

example of Form Structure:
The ContactForm component makes available a form with the following fields:
- First Name: Allows users to enter their first name.
- Last Name: Allows users to enter their last name.
- Subject: Allows users to specify the subject of their message.
- Message: Allows users to enter their message.
- Submit Button: Allows users to submit the form.

3. **Form Implementation:** For the ContactForm implementation the HTML structure and CSS classes is used for styling.

**Code:**

import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4"
    action="mailto:tcet.tnp@thakureducation.org" method="GET"
    >
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        <span className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600">First Name</label>
          <input
            placeholder="Eg: John Doe"
            type="text"
            className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3"
          />
        </span>
        <span className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600 ">Last Name</label>
          <input
            type="text"
            className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3"
            placeholder="yeah"
          />
        </span>
      </div>
      <span className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Subject</label>
        <input
          type="text"
          name="subject"
          className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3 placeholder:underline"
          placeholder="Request to..."
        />
      </span>
      <span className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Message</label>
        <textarea
          name="body"
          id="text-area"
          cols={15}
          rows={5}
          className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          placeholder="Enter your message"
        />
      </span>
      <button
          className="flex w-max justify-center items-center bg-blue-500 rounded-lg py-2 px-12 text-white text-base
          hover:bg-blue-400 mt-2"
          placeholder="message"
          type="submit"
        >
          Submit
        </button>
    </form>
  );
};

export default ContactForm;
