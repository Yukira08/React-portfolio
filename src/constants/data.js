import images from "./images";

const projects = [
    {
        id : "1",
        imgUrl : images.quote01,
        cover : images.quote_cover,
        title : 'Great Quotes',
        sub_title : "This is a Quote App using React Framework and it shows list of quotes from the existing firebase database. You can also add new quotes,add comments to the existing quotes and view each quotes' details. There is also sort function implemented for the quotes to be sorted by ascending or descending.",
        demo : true,
        url : 'https://react-http-ae93e.firebaseapp.com/quotes',
        github : "https://github.com/Yukira08/React/tree/Quote-App",
        role : "Personal Project",
        timeline : "Sept 2022",
        tech : "React, Bootstrap",
        description : "This project is my personal project for practicing React and react router to navigate the different pages. This is a Quote App which shows list of quotes from the database. You can add new quotes,add comments to the existing quotes and view each quotes' details.There is also sort function implemented for the quotes to be sorted by ascending or descending.",
        photos : [ images.quote02, images.quote03, images.quote04, images.quote05, images.quote06]
    },
    {
        id : '2',
        imgUrl : images.meals01,
        cover : images.meals_cover,
        title : 'React Meals',
        sub_title : "This is a Food Order App using React Framework and the menus are displayed and can be added to the cart. The added orders are saved in the cart and you can also modify the amount of orders in the cart. The added orders can be ordered by filling the customer's information.",
        description : "This project is my personal project for practicing React. It is similar to Food Order App where the menus are displayed and can be added to the cart. The added orders are saved in the cart and you can also modify the amount of orders in the cart. The added orders can be ordered by filling the customer's information.",
        demo : true,
        role : "Personal Project",
        timeline : "Sept 2022",
        tech : "React, Bootstrap",
        url : "https://imaginative-pithivier-8ff67d.netlify.app/",
        github : "https://github.com/Yukira08/React/tree/FoodOrder-App",
        photos : [ images.meals_cover,images.meals02, images.meals03,images.meals04]

    },
    {
        id : '3',
        imgUrl : images.exchange01,
        cover : images.exchange_cover,
        title : 'Daffodils Exchange',
        sub_title : 'It is a responsive web app for calculating exchange rate from one currency to another currency by using the API. The records are saved in the local storage and displayed. It also has light and dark theme.',
        description : "This is my personal project for practicing JavaScript. It is an exchage rate converter using exchage rate API. The inputted amount can be converted from selected currency to another selected currency. The converted currency is kept in the local storage and displayed in the Record List. It also has light and dark theme.",
        demo : true,
        role : "Personal Project",
        timeline : "Aug 2022",
        tech : "HTML, CSS, JavaScript",
        url : "https://chic-eclair-933401.netlify.app/",
        github: "https://github.com/Yukira08/JavaScript/tree/master/exchange_calc/project",
        photos : [ images.exchange_cover, images.exchange02]
    },
    {
        id : '4',
        imgUrl : images.chat01,
        cover : images.chat_cover,
        title : 'Iniad Kapter',
        sub_title : 'This project is a socket team project during my second year. It is an on-time chat web application allows users to send and receive data, messages and notifications without delay having similar fuctions as popular chat application.',
        description : 'This project is a socket team project during my second year. It is an on-time chat web application allows users to send and receive data, messages and notifications without delay having similar fuctions as popular chat application.',
        demo : false ,
        role : "Front-end Developer",
        timeline : "Nov 2021 - Jan 2022",
        tech : "HTML, CSS, Bootstrap, JavaScript, Django, Emoji Picker",
        photos : [ images.chat02, images.chat03, images.chat04, images.chat05, images.chat06]
    },
    {
        id : '5',
        imgUrl : images.syllabus01,
        cover : images.syllabus_cover,
        title : 'Iniad Syllabus',
        sub_title : 'It is a web-based app for courses tracking for INIAD students. INIAD has a lot of platforms used for online learning so we created this website to gather all the information of platforms in one place.',
        description : "This project is a Django team project during my first year. It is a web-based app for courses tracking for INIAD students. INIAD has a lot of platforms used for online learning so we created this website to gather all the information of platforms in one place.",
        demo : false ,
        role : "Front-end Developer",
        timeline : "Nov 2020 - Jan 2021",
        tech : "HTML, CSS, Bootstrap, JavaScript, Django",
        github : "https://gitlab.com/s1f102000028/teamproject",
        photos : [ images.syllabus02, images.syllabus03, images.syllabus04, images.syllabus05, images.syllabus06]
    },
]

export default { projects};