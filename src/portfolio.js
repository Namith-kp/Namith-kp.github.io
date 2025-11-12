/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Namith K P",
  title: "Hi, I'm Namith",
  subTitle: emoji(
    "A Passionate Engineering Student 🚀 having an experience of building Web and Mobile applications with JavaScript / React.js / Node.js / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Namith-kp",
  linkedin: "https://www.linkedin.com/in/namith-kp/",
  gmail: "kpnamith@gmail.com",
  instagram: "",
  youtube: "https://www.youtube.com/@_robastic?sub_confirmation=1",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Know",
  subTitle: "CRAZY ENGINEERING STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / UI / UX for your web and mobile applications"
    ),
    
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Figma "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sai Vidya Institute of Technology",
      logo: require("./assets/images/collage.png"),
      subHeader: "Bachelor of Engineering in Information Science and Engineering",
      duration: "July 2022 - September 2026",
      desc: "Took courses about Operating Systems, Networking, Data Structures and Algorithms, . . .",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Shree Vani Pre University College",
      logo: require("./assets/images/shree.png"),
      subHeader: "Pre University Course in Computer Science (PCMCs)",
      duration: "June 2020 - April 2022",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "",
    //   desc: "",
    //   descBullets: [
    //     "",
    //     ""
    //   ]
    // },
    // {
    //   role: "",
    //   company: "",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "",
    //   desc: ""
    // },
    // {
    //   role: "",
    //   company: "",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "",
    //   desc: ""
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME OF THE PROJECTS THAT I HAVE WORKED ON DURING MY BACHELOR'S DEGREE.",
  projects: [
    {
      image: require("./assets/images/4.png"),
      projectName: "Chandrayaan-3 Working Model",
      projectDesc: "A working model of Chandrayaan-3 using Arduino and ESP-32 modules.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.youtube.com/watch?v=nJvqp3LVMXc&t=105s"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/5.png"),
      projectName: "Grow With Me",
      projectDesc: "AI Powered Co-Founder Finding Platform for Founders to build a start-up companies",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Namith-kp/Grow-With-Me-AI"
        }
      ]
    },
    {
      image: require("./assets/images/3.png"),
      projectName: "Student Result Management System",
      projectDesc: "A system for managing student results and generating reports.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Namith-kp/Student-Result-Portal"
        }
      ]
    },
    {
      image: require("./assets/images/6.png"),
      projectName: "Flick Control",
      projectDesc: "A Gesture Controlled Home Automation using Opencv in Python",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Namith-kp/Flick-Control"
        }
      ]
    },
    {
      image: require("./assets/images/2.png"),
      projectName: "Telegram Bot",
      projectDesc: "A Telegram Bot integrated with an ESP-32 cam module for remote motion detection and sending alerts.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    },
    {
      image: require("./assets/images/home.jpg"),
      projectName: "Home Automation System",
      projectDesc: "A home automation system using ESP-32 modules and a mobile app for controlling the home appliances remotely.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have done !",

  achievementsCards: [
    {
      title: "UNIX & LINUX Certification",
      subtitle:
        "Completed Certification from Infosys Springboard for UNIX & LINUX OS Fundamentals",
      image: require("./assets/images/8.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1oDwjiDdkeyyv5sc4eg_keoFJWbB0BsGO/view?usp=sharing"
        }
      ]
    },
    {
      title: "Basic to Advance Java with DSA",
      subtitle: "Completed Certification from Infosys Springboard for Basic to Advance Java with DSA",
      image: require("./assets/images/9.png"),
      imageAlt: "Java Logo",
      footerLink: [
        {name: "View Certification", url: "https://drive.google.com/file/d/1DY3DVnODnCBa7XjQLkOOrfVd2raIfxci/view?usp=sharing"},
        
      ]
    },
    {
      title: "NSS Volunteer",
      subtitle:
        "Actively participated in several NSS activities and events.",
      image: require("./assets/images/7.png"),
      imageAlt: "NSS Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: ""
        // },
        
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
 
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "kpnamith@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
