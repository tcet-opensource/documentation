---
title: Companies
id: companies
description: Companies Component in T&P Website
sidebar_label: Companies
keywords: [astrojs, open-source, docs]
---

The **Companies** page of the website gives you information about various companies that visit the institute for the placement procedure. It is accesible through the Placement section on the navigation bar of the [**TNP Website**](https://tnp.tcetmumbai.in/).

### Adding Comapny Card to the page

**How to add the Company Card to the page**

1. Opening `ComapnyCard.tsx` file in our projects root directory.

2. The `CompanyCard` component is defined as a functional component that accepts two props: `img` and `name`.

    ```jsx title="CompanyCard.tsx" {4-11} showLineNumbers
    const CompanyCard: React.FC<{} & CompanyCardType> = ({ img, name }) => {
        return (
            <div className="flex flex-col items-center justify-center gap-3">
            <img src={"/InternshipHero/" + img} alt="company-logo" />
            <p className="lg:text-base text-xs text-center text-slate-600">{name}</p>
        </div>
        );
    };
    ```
3. An `<img>` element is added to display the company logo. The `alt` attribute is set to "company-logo" for accessibility purposes. The `name` prop is used to populate the content of the `<p>` element.

4. The companies section is divided into different sub sections including Super Dream Companies, Dream Companies, Normal and Core Companies. The company card is added to the page as per the category of the company.

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

**On executing the above steps, the Company cards look like this:**

import CompanyCard_img from "F:/documentation/docs/projects/tnp-website/assets/CompanyCard_img.png";

<img src={CompanyCard_img} style={{ border: "2px solid gray" }} />

<br />
<br />