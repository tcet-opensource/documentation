---
title: Companies
id: companies
description: Companies Component in T&P Website
sidebar_label: Companies
keywords: [company-card, details, category]
---

The **Companies** page of the website gives you information about various companies that visit the institute for the placement procedure. It is accesible through the Placement section on the navigation bar of the [**TNP Website**](https://tnp.tcetmumbai.in/).

### Adding Company Card to the page

**How to add the Company Card to the page**

1. Opening `CompanyCard.tsx` file in our projects root directory.

2. The `CompanyCard` component is defined as a functional component that accepts two props: `img` and `name`.

    ```jsx title="CompanyCard.tsx" {4-5} showLineNumbers
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

4. The companies section is divided into different sub sections including **Super Dream Companies**, **Dream Companies**, **Normal** and **Core Companies**. The company card is added to the page as per the category of the company.

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

**On executing the above steps, the Company cards look like this:**

import CompanyCard_img from "/docs/projects/tnp-website/assets/CompanyCard_img.png";

<img src={CompanyCard_img} style={{ border: "2px solid gray" }} />

<br />
<br />

### Adding Read More Button

**How to display the company in the  ReadMore section**

1. Opening `ReadMore.tsx` file in our projects root directory.

2. The `ReadMore` component is defined as a functional component that accepts two props: `companies` (an array of CompanyCardType) and `title` (a string representing the section title). The `useState` hook is imported which determines whether the "Read More" section is expanded or collapsed.

    ```jsx title="ReadMore.tsx" {2-3,5} showLineNumbers
    const ReadMore: React.FC<{
        companies: CompanyCardType[];
        title: string;
    }> = ({ companies, title }) => {
        const [readMore, setReadMore] = useState(false);
    }
    ```
3. A `<button>` element is added and it has a click event handler attached to the `onClick` attribute, which toggles the `readMore` state when clicked. Inside the `<button>` element, there is a text label "Read More" and an SVG icon representing an arrow.

    ```jsx title="ReadMore.tsx" {3,6-8,10-15,18-20} showLineNumbers
    return (
    <div>
      <button
        className="w-max py-2 px-4 flex text-slate-600 gap-x-2 items-center border rounded-full 
      bg-gray-50 hover:bg-gray-100 active:bg-gray-50 transition-all ml-auto mr-8 mb-4"
        onClick={() => setReadMore(!readMore)}
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6  text-slate-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    // Other parts of the code
    )
      ```

4. A grid layout is used to display the company cards. The grid is responsive and adapts the number of columns based on screen size. The `companies` prop is mapped over to render multiple `CompanyCard` components, passing the `name` and `img` props.

    ```jsx title="ReadMore.tsx" {11,15-17} showLineNumbers
    // Code from last section
    {readMore && (
        <>
          <div
            onClick={() => setReadMore(false)}
            className="w-screen h-screen bg-black bg-opacity-60 fixed transition-opacity top-0 left-0 "
          />
            // Styling
            <div className="pb-4 lg:pb-6 xl:pb-10 ">
              <h1 className=" text-2xl 2xl:text-3xl text-center font-title">
                {title}
              </h1>
            </div>
            <div className="grid max-h-[70%] overflow-scroll grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-around gap-6 xl:gap-12">
              {companies.map((c) => (
                <CompanyCard name={c.name} img={c.img} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    ```

5. Save the changes.

6. Run `yarn dev` on the terminal to see the changes made in your local environment.

:::tip
  Similar steps were carried out for adding multiple categories of  **[Companies](#adding-company-card-to-the-page)**. 
::: 


**On executing the above steps, the Read More Section look like this:**

import ReadMore_img from "/docs/projects/tnp-website/assets/ReadMore_img.png";

<img src={ReadMore_img} style={{ border: "2px solid gray" }} />

<br />
<br />

### Adding Company Details 

**How to add the company details**

1. Opening `index.astro` file in the `Companies` component in  our projects root directory.

2. The `Props` interface is defined, which specifies the prop types expected by the component. It is used to edit properties such as `companies` (an array of CompanyCardType), `title` (a string representing the section title), `subtitle` (an optional string for a subtitle), and `background` (a string representing the background color).

    ```jsx title="index.astro" {2-4,6} showLineNumbers
    interface Props {
        companies: CompanyCardType[];
        title: string;
        subtitle?: string;
        // readMore?: boolean;
        background: string;
    }
    const { companies, title, subtitle, background } = Astro.props;
    ```

3. The `strippedCompanies` array is mapped over to render `CompanyCard` components, passing the `img` and `name` props. Conditional rendering is used to display the `ReadMore` component if the companies array length is greater than 12. The `title` and `companies` props are passed to the `ReadMore` component.

    ```jsx title="index.astro" {2-3,8-9} showLineNumbers
    {
      strippedCompanies.map((d) => {
        return <CompanyCard img={d.img} name={d.name} />;
      })
    }
    </div>
    {
        companies.length > 12 && (
        <ReadMore title={title} client:load companies={companies} />
        )
    }
    ```

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

_The [**Companies**](companies) section was succesfully executed! Let's move on and see how we created the [**Top Recruiters**](top-recruiters) section of the **[TNP Website](https://tnp.tcetmumbai.in)**._
