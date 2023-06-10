---
title: Header
id: header
description: Header Component in T&P Website
sidebar_label: Header
---
Introducing the Header Component

The Header component represents the top section of the web page and contains the site logo and navigation menu along with other descriptive features. It is a responsive and touch-enabled header which includes data like `ERP`, `Alumini`, `Careers` and `data` present in the `Navaigation bar`. 

### Adding Primary links

 Primary links here typically appear prominently in the website. To add new primary links in the header, we need to ensure that **"Accordian"** and **"MobileNav"** are correctly imported in `index.astro` file. 

**Here's how we can modify or add primary links:**

1. Opening `index.astro` file in our projects `root directory`.

2. To add or edit an object to the primaryLinks array, provide a title of "New Link" and a link pointing to "URL". You can modify the title and link values according to your requirements.

```jsx title="index.astro" 
   {
    title: "Title of New Link",
    link: "URL of New Link",
    }
```
3.  To make sure that the link is imported properly, clearly define it in the `../../env` module.

### Adding Seconadary Links

Secondary Links here are typically part of dropdown menus or nested navigation. `secondaryLinks` array represents the secondary links for header component of the web page to make available the appropriate links and sub-links.

**Here's how we can modify or add secondary links:**

1. To modify or add a `secondaryLink` define a specific object.

2. Upadte the desired properties, such as `title` and `link` just as we did for Primary Links.

3. In secondaryLinks, `subLinks` can also be added as per requirement.

```jsx title="index.astro"
    const secondaryLinks: link[] = [
    // Existing links

  // New Link
  {
    title: " New Link Titke",
    link: "New Link URL",
    subLinks: [
      {
        title: "Sub-Link Title",
        link: "Sub-link URL",
      },
    ],
  },

  // Other existing links
];
```
### Modifying the Header Logo 

The TCET logo is located at the top-left corner of the header component. It can be changed as per the requirements. It is styled using various CSS classes.

**Here's how we can modify or add a New Logo:**

1. The logo  is displayed as an `<img>` element wrapped within an HTML anchor `<a>` element.

2. Inside the anchor element, there is an img element that represents the TCET logo.

3. The img element includes the following attributes:
 * src="/Images/TCET Logo.png": Specifies the image source path.
 * class="object-contain w-14 lg:w-24": Applies the CSS class to image. The `object-contain` class ensures aspect ratio and `w-14 lg:w-24` classes set the width of the image.
 * alt="TCET Logo": It provides an alternative text for the image.

```jsx title="index.astro"
    <a href="/">   
    <img
    src="/Images/TCET Logo.png"
    class="object-contain w-14 lg:w-24"
    alt="TCET Logo"
    />
    </a>
```

### Adding Text

The text element in the Header component is added right in front of the Logos. The text in the Header describes the College's Trust Name, College Name and Affiliation of the Insitute.

**Here's a breakdowm explanation how Text is added in this heder component:**

1. The code is wrapped in an HTML anchor element `(<a>)` with multiple child elements.

2. The anchor `(<a>)` element with the `href` attribute is set to the `root directory (/)`, which means it will link to the **[Home Page](https://tnp.tcetmumbai.in/)** of TNP website. 

3. The code contains the several CSS `class` attributes applied to the anchor element to define the appearnaces and behaviour of the element.

  ```jsx title="index.astro"
      <a href="/" class="w-[72%] xl:w-[40%] md:w-max items-center space-y-1">
  ```
4. Moving on to the child elements of the `(<a>)` element, there is the `paragraph element (<p>)` which has wrapped `Text` under it. 

5. Various classes are applied to it as per requirements such as `text-[1rem]`, `xl:text-2xl`, `self-center`, `font-semibold` & `leading-[1]` which can be modified as per the user. 

6. The `text` inside the `<p>` can be modified. Here, the text used to display is `Thakur College Of Enginnering & Technology`.

```jsx title="index.astro"
    <p class="text-[1rem] xl:text-2xl self-center font-semibold leading-[1] text-[#DC6803] font-title">
       Thakur College Of Enginnering & Technology
    </p>
```
### MobileNav Properties

The MobileNav component is a custom component responsible for rendering a `mobile navigation menu` functionality in T&P web page. The component receives properties which allows for customization and dynamic data integration into the navigation component.

**Here's the explanation of MobileNav Props:**

1. The component has passed some properties using the `JSX syntax`. 

2. Properties passed are as follows:
 * Primary & Seconadary Links data or configuration related to navigation links.
 * client: idle is a custom property handled within the `MobileNav` component.

```jsx title="index.astro"
    <MobileNav
      secondaryLinks={secondaryLinks}
      primaryLinks={primaryLinks}
      client:idle
    />
```
### Navigation Section

The code for this program represents navigation section (Horizontal menu) with a combination of HTML & CSS classes.

**Here's the breakdown explanation of this section:**

1. The snippet defines a `<nav>` element with several CSS classes applied to it. 

2. These classes control the visibility, flex layout, alignment, and spacing of the navigation section based on different sizes of the screen. 

```jsx title="index.astro"
    <nav class="hidden items-center lg:flex ml-auto gap-4 xl:gap-6 2xl:gap-8">
```
3. Inside the `<nav>` element, there is an anchor tag `<a>` that serves as a link. The href attribute specifies the URL it links to `(https://thakureducation.org)`, there is an `SVG icon (<svg>)` element, it defines the appearance of the icon.

4. There is a `<span> element` containing the `text` "thakureducation.org". It has the CSS classes text-xs, xl:text-sm, text-slate-900, and hover:underline applied to it. These classes control the `font size`, `color`, and `hover effect` of the text.

```jsx title="index.astro"
     <a class="flex items-center" href="https://thakureducation.org">
         <!-- SVG icon code -->
        <span class="text-xs xl:text-sm text-slate-900 hover:underline">thakureducation.org</span>
     </a>
```
5. Next code block is JavaScript code using curly braces `{}` to embed dynamic content. It utilizes the primaryLinks array to generate multiple anchor tags dynamically. The content of each anchor tag is the value of `p.title,` which represents the title of the link.

```jsx title="index.astro"
    {
      primaryLinks.map((p) => (
        <a href={p.link} class="text-xs xl:text-sm  text-slate-900 hover:underline">
           {p.title}
        </a>
      ))
    }
```
6. There is another `anchor tag <a>` with the href attribute set to `https://thakureducation.org/`. The `<img>` element is used to represent the inserted image and various CSS elements are applied to it.

7. The `<img>` element also has the CSS classes hidden, lg:block, and w-20 applied to it, controlling its visibility and width on different screen sizes.

```jsx title="index.astro"
    <a href="https://thakureducation.org/">
      <img src="/Images/Thakur Trust.png" alt="Thakur Trust" srcset="" class="hidden lg:block w-20" />
    </a>
```
8. Overall the code of the navigation section represents  anchor tags, SVG icon, text, and image. It has demonstrated the use of CSS classes for styling and dynamic content generation using JavaScript. 

### Secondary Navigation Section

The "Secondary Navigation Section" appears to generate navigation bar with `links and sub-links`, depending on the data in the `secondaryLinks` array. 

**Here's the explanation of this section:**

1. The secondary navigation section is hidden on small screens and only visible on `larger screens (lg:flex)`. It contains a list of `secondaryLinks`.

2. If the link contains a sub-link, it is displayed as an `accordion-style component (Accordian)`, which allows the expanding and collapsing the sub-links.

3. Several CSS class and JavaScript is used to dynamically generate the navigation links. Overall, the header component provides a responsive and interactive navigation menu for the website.

```jsx title="index.astro"
     <div class="hidden lg:flex text-slate-800 justify-evenly py-2 border-b">
    {
      secondaryLinks.map((s) => (
        <span class="flex items-center gap-2">
          {!s.subLinks && <a class="text-xs xl:text-sm   hover:underline" href={s.subLinks?"":s.link}>
            {s.title}
          </a>}
          {s.subLinks && <Accordian title={s.title} client:load links={s.subLinks} />}
        </span>
      ))
    }
  </div>
```

<br />
<br />

:::info
 Check out the official documentation for more information on **[Swiper.js](https://swiperjs.com/get-started)**
:::













    

















