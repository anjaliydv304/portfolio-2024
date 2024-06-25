import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const HERO= `I'm a passionate and dedicated Front-End Developer.
 With a strong foundation in HTML, CSS, and modern JavaScript frameworks like React.js, I specialize in crafting seamless, user-friendly web interfaces.
Leveraging the power of Tailwind CSS, I bring dynamic and responsive designs to life, ensuring a visually appealing and intuitive user experience.
`
export const ABOUT=`Hello! I’m Anjali, a dedicated and enthusiastic fourth-year BTech student at Guru Gobind Singh Indraprastha University, with a passion for front-end development. 
Over the years, I have developed a strong foundation in HTML, CSS, and JavaScript, allowing me to create visually appealing and user-friendly interfaces. I am constantly updating myself with the latest industry trends and love tackling new challenges to improve my skills. I am eager to bring my creativity, problem-solving abilities, and technical expertise to innovative web projects. I look forward to contributing to a dynamic development team and crafting seamless user experiences.
`
export const EDUCATION=[
    {
     year:"2021-2025",
     school:"Guru Gobind Singh Indraprastha University,Delhi",
     score:"8.8 CGPA",
     course:"B.Tech."

    },
    {
     year:"2020",
     school:"B.B.S. International School,Prayagraj",
     score:"87.2%",
     course:"Senior Secondary"

    },
    {
        year:"2018",
        school:"B.B.S. International School,Prayagraj",
        score:"92.8%",
        course:"High School"

    }
]
export const PROJECTS=[
    {
        title:"Lead-tracker chrome extension",
        image:project1,
        description:"Leads Tracker is a simple and efficient Chrome extension designed to help you save and manage your leads. With this extension, you can easily save the URLs of the tabs you are currently visiting, view them later, and clear your leads list when necessary. The extension leverages local storage to ensure your data is retained across browser sessions.",
        technologies:["HTML","CSS","Javascript"],
        link:"https://github.com/anjaliydv304/lead-tracker-ce"
    },
    {
        title:"Blackjack Game",
        image:project2,
        description:"This is a simple Blackjack game implemented using HTML, CSS, and JavaScript. The game allows you to draw cards, calculate the sum, and determine whether you have a Blackjack, are still in the game, or have lost.",
        technologies:["HTML","CSS","Javascript"],
        link:"https://black-jack-cards-game.netlify.app/"
    },
    {
        title:"My Wish List App",
        image:project3,
        description:"A simple and interactive web application for creating and managing a wish list. Built using HTML, CSS, JavaScript, and Firebase Realtime Database, this project allows users to add, view, and remove items from their wish list.",
        technologies:["HTML","CSS","Javascript","Firebase"],
        link:"https://mywish-list.netlify.app/"
    }
]
export const CONTACT={
    linkedin:"",
    twitter:"",
    email:"anjaliydv611@gmail.com"
}