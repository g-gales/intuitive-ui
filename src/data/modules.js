import {
  StandardLayoutDemo,
  UnusualLayoutDemo,
  ConsistentLabelsDemo,
  VagueLabelsDemo,
  ActiveStateDemo,
  NoHighlightDemo,
  GoodSearchDemo,
  BadSearchDemo,
} from "./quizzes/quizzes";

import {
  HierarchyAnimation,
  ResponsiveDemoAnimation,
  InteractiveCueAnimation,
  AccessibilityAnimation,
} from "./animations/animations";

const moduleData = [
  {
    id: "standards",
    title: "Use Common Standards",
    image: "standards.png",
    imageFull: "standards-full.png",
    alt: "Infographic #1: Use common design standards featuring common navigation icons like hamburger menus or a search magnifying glass.",
    summary: "Learn how to incorporate common navigational standards!",
    content: {
      main: "There are many standard practices when it comes to web navigation that we've come to depend on. Users rely on muscle memory and common design conventions to help guide them. Elements like placing a logo in the top-left that links to the homepage, using top horizontal menus or sidebars, and including icons with labels are all common standards that most sites implement today that create a predictable pattern for users.",
      secondary:
        "While creating customized iconography and styling can be enticing and eye-catching, don't try and reinvent the wheel. If there are too many specialized navigation systems on your site, users will often find themselves in a lot of confusion and frustration without a step-by-step guide. Some of the most common navigational practices include; a horizontal header bar complete with navigation links, dropdown or hamburger menu navigation for different types of content, or vertical sidebars to highlight the site's pages at a glance.",
    },
    quiz: {
      prompt:
        "Click the design that follows common web standards for a simple web page.",
      options: [
        {
          component: StandardLayoutDemo,
          correct: true,
          feedback:
            "Correct! This layout follows web standards like a horizontal top header containing navigation links, and horizontal bottom footer.",
        },
        {
          component: UnusualLayoutDemo,

          correct: false,
          feedback:
            "Not quite. This layout has its navigation items at the bottom, uses uncommon and non-descriptive language, and doesn't differentiate between navigation sections and main content.",
        },
      ],
    },
  },
  {
    id: "specific",
    title: "Be Specific & Consistent",
    image: "specific.png",
    imageFull: "specific-full.png",
    alt: "Infographic #2: Be Specific & Consistent featuring a 3X3 grid of identical buttons with one highlighted in a different color.",
    summary:
      "Learn how consistency and specificity can enhance the navigational experience!",
    content: {
      main: "Your navigation labels should leave no room for confusion. Avoid jargon, vague terms, or branded language that might not be universally understood. Stick with familiar terms like 'Home', 'About', 'Shop', or 'Contact.' This helps users predict what they'll see when they click.",
      secondary:
        "Similarly, staying consistent in your language and design choices across your web app is crucial for user retention. Changing your design styles, fonts, or colors can be a good way to convey emphasis on specific elements. However, too much change and inconsistency can often create shock and confusion, especially between pages. A web app should have a cohesive flow from page to page, allowing for smooth transitions to help guide the user through the site naturally.",
    },
    quiz: {
      prompt:
        "If there were a form on THIS web app, click the buttons that would be appropriately consistent and specific.",
      options: [
        {
          component: ConsistentLabelsDemo,
          correct: true,
          feedback:
            "Correct! These buttons follow the webpage's pattern and consistency, and provide helpful and specific labels.",
        },
        {
          component: VagueLabelsDemo,
          correct: false,
          feedback:
            "Incorrect. The buttons don't follow the design of the other buttons in the web app or each other, and are not specific to their task.",
        },
      ],
    },
  },
  {
    id: "hierarchy",
    title: "Prioritize Hierarchy",
    image: "hierarchy.png",
    imageFull: "hierarchy-full.png",
    alt: "Infographic #3: Prioritize Hierarchy featuring a visualization of a concept tree, with the most important concept on top in the boldest color, and cascading concepts below it in fading colors.",
    summary:
      "How can you convey what is the most important thing for the user?",
    content: {
      main: "Think of your navigation as the map to your web app. How you choose to design your navigation will ultimately decide how the user will travel through your web app, and how each page connects and flows into each other. The most important and frequently accessed pages should be the most prominent and easily accessible, like tabs in a header.",
      secondary:
        "For larger web apps with multiple sets of pages, you should think about what pages you want the user to travel to first. The most important items should be at the top-level, with secondary pages nested within dropdowns or side menus. Logical grouping and order within these pages can support the user experience and expectations, reducing decision fatigue and helping create structure in the web app.",
      animation: HierarchyAnimation,
      caption:
        "An animation depicting the most important element at the top-level, with secondary elements cascading below it.",
    },
  },
  {
    id: "location",
    title: "Make It Clear Where You're Located",
    image: "location.png",
    imageFull: "location-full.png",
    alt: "Infographic #4: Make it clear where you're located, featuring a curved dotted line with an 'X' at the end imitating a treasure map.",
    summary: "Users can get lost easily in navigation. Here's how to fix that!",
    content: {
      main: "As web apps grow and more pages are added, it can become increasingly more difficult to not only figure out where a user is going, but where they already are. This can lead to user frustration and confusion, and can potentially lead them to leave the web app all together.",
      secondary:
        "To circumvent this problem, be sure to visually highlight the current page a user is on using different colors, underlines, bold text, or a combination. Integrating breadcrumb trails in deeply nested navigation pages, or sidebar highlights can also help reinforce location awareness and reduce the user confusion.",
    },
    quiz: {
      prompt:
        "Click which layout  a user could easily identify their location.",
      options: [
        {
          component: NoHighlightDemo,
          correct: false,
          feedback:
            "Not quite. This page has no visual difference in how its page links are displayed, no breadcrumb trail for users to follow, and no headings identifying their location.",
        },
        {
          component: ActiveStateDemo,
          correct: true,
          feedback:
            "Good job! This page visually highlights the active page in the header, contains a breadcrumb trail, and a descriptive heading.",
        },
      ],
    },
  },
  {
    id: "responsiveness",
    title: "Integrate Screen Responsiveness",
    image: "responsiveness.png",
    imageFull: "responsiveness-full.png",
    alt: "Infographic #5: Integrate screen responsiveness, featuring icons of a desktop and a mobile device with horizontal arrows on their screens depicting differing screen sizes.",
    summary: "Is your web app navigable on all screen sizes?",
    content: {
      main: "Any navigation system should work flawlessly on all devices. When a user interacts with a web app for the first time, the most common device they are on is a smartphone. Because of this, a growing trend in web design is to take a 'mobile-first' approach, where developers design and style their web apps on smaller screens first, and then adjust styling for larger screens.",
      secondary:
        "Since users never have to adjust their screen sizes themselves to match the device their using, ensuring your web app is 100% responsive on mobile makes browsing your website more user-friendly. This may also include adjusting how your navigation systems look on different screen sizes, such as a hamburger menu to toggle a navigation panel for smaller screens instead of taking up screen space with larger navigation headers and menus.",
      animation: ResponsiveDemoAnimation,
      caption:
        "An animation depicting how elements can be resized depending on the screen width.",
    },
  },
  {
    id: "interactive",
    title: "Interactive Cues",
    image: "interactive.png",
    imageFull: "interactive-full.png",
    alt: "Infographic #6: Interactive cues, featuring an icon of a mouse clicking a button, and the button responding visually.",
    summary:
      "Learn how to ensure the user knows what is and is not interactive.",
    content: {
      main: "Navigation is often a means to an end, and every click counts. In order for users to effectively navigate anything on the web, they need to know which content is static and which areas are clickable. Making these clickable elements obvious ensures that users don't need to think about the meaning of specific design elements. Traditionally, hyperlinks appear as blue text with an underline, and buttons can appear rectangular with a call to action label. However, these conventions can evolve and change with overall design choices.",
      secondary:
        "Incorporating common iconography to accompany clickable elements is helpful, but changing how an element visually appears on the page when a user interacts with it signifies that it will do something. This includes changing the color, font-size, shape, or movement of an element, and adjusting the cursor icon as the user hovers or clicks on an object. Ultimately, ensuring clickable and navigational elements are visually interactive and stand out from static content can drastically improve its clickability.",
      animation: InteractiveCueAnimation,
      caption:
        "An animation depicting a cursor interacting with a button. The button's styles change when the cursor hovers, focuses, and clicks on it.",
    },
  },
  {
    id: "search",
    title: "Search Functionalities",
    image: "search.png",
    imageFull: "search-full.png",
    alt: "Infographic #7: Search functionality, featuring an icon of a common search bar.",
    summary:
      "How can you ensure the user finds exactly what they're looking for?",
    content: {
      main: "As a web app grows, so does it's navigation. If it gets especially large, some pages might be deeply nested in a navigation dropdown, or specific items might be difficult to find. This is where a visible, easy-to-use search bar helps users bypass menus and find what they need quickly.",
      secondary:
        "Not all users want to navigate a site manually, and with a well integrated search functionality, users are able to find exactly what they need. This is especially beneficial in content-heavy or e-commerce websites with deep catalogues, cutting user frustration by providing a more direct navigational approach. However, it's important that users can recognize what the search element is for. Using the previous modules, we know that using specific labels and clear iconography is important, and search functionalities are no exception.",
    },
    quiz: {
      prompt:
        "Click the search bar that would follow best practices for web navigation.",
      options: [
        {
          component: GoodSearchDemo,
          correct: true,
          feedback:
            "Correct! This search bar includes a label, placeholder text, and a button with common and recognizable iconography.",
        },
        {
          component: BadSearchDemo,
          correct: false,
          feedback:
            "Not quite. It's not immediately clear what this input is for, with no label or helpful placeholder text, and an icon that is not commonly recognizable as a search button.",
        },
      ],
    },
  },
  {
    id: "accessibility",
    title: "Design For Accessibility",
    image: "accessibility.png",
    imageFull: "accessibility-full.png",
    alt: "Infographic #8: Design for accessibility, featuring an icon of an accessibility symbol.",
    summary: "Learn how to design your web apps for everybody.",
    content: {
      main: "When designing a web app, it is crucial that developers consider all types of users. When web apps are not considering accessibility standards, it can add immense frustration and confusion for many of its potential users, such as visually impaired individuals, and can even eliminate entire groups of individuals as potential users. ",
      secondary:
        "Incorporating semantic HTML like <nav>, <main>, or <article> to structure navigation for screen readers, ensuring sufficient color contrast ratios, or allowing keyboard navigation are all effective and simple ways to consider all users in how they navigate your web app. Everyone should be able to use your site.",
      animation: AccessibilityAnimation,
      caption:
        "An animation depicting how keyboard navigation can be utilized using the 'Tab' key.",
    },
  },
];

export default moduleData;
