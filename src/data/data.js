import { SkillType } from "beautiful-skill-tree";
import htmlIcon from './htmlicon.jpg';
import graphqlIcon from './graphqlIcon.jpg';
import blightPhoenixIcon from './Blightpheonixicon.jpg';
import mysqlIcon from './mysqlIcon.jpg';
import cloudKillIcon from './Cloudkillicon.jpg';
import npmIcon from './npmIcon.jpg';
import elatedIcon from './Elatedicon.jpg';
import packagemanagerIcon from './packagemanagerIcon.jpg';
import databaseIcon from './databaseIcon.jpg';
import introtonosqldatabaseIcon from './introtonosqldatabaseIcon.jpg';
import mongodbIcon from './mongodbIcon.jpg';
import introtosqldatabaseIcon from './introtosqldatabaseIcon.jpg';
import javascriptIcon2 from './javascriptIcon2.jpg';
import css from './cssIcon.jpg';
import learnaprogramminglanguageIcon from './learnaprogramminglanguageIcon.jpg';
import howinternertworksIcon from './howinternetworksIcon.jpg';
import yarnIcon from './yarnIcon.jpg';
import reaperIcon from './Reapericon.jpg';
import recompenseIcon from './Recompenseicon.jpg';
import pythonIcon from './pythonIcon.jpg';
import httpprotocolIcon from './httpprotocolIcon.jpg';
import ruinIcon from './Ruinicon.jpg';
import javascriptIcon from './Scornicon.jpg';
import subsequenceIcon from './Subsequenceicon.jpg';
import websecurityIcon from './websecurityIcon.jpg';
import sweetReleaseIcon from './Sweetreleaseicon.jpg';
import thoughtLockIcon from './Thoughtlockicon.jpg';
import githubIcon from './githubIcon.jpg';
import wreckIcon from './Wreckicon.jpg';

export const frontEnd: SkillType = [
  {
    id: "GitHub",
    icon: githubIcon,
    title: "Github",
    tooltipDescription:
      "Congratulations, you have become a GitHub master! Utilize the power of version control to manage your code, collaborate with others, and showcase your projects to the world. With GitHub, you can create repositories, fork and merge changes, and roll back to previous versions with ease.",
    children: [
      {
        id: "Web Security",
        icon: websecurityIcon,
        title: "Web Security",
        tooltipDescription: "Congratulations, you have unlocked the power of Web Security! Protect your applications from hackers and malicious attacks with ease. With this skill, you can become a security master and keep your digital world safe.",
        children: [
          {
            id: "Package Manager",
            icon: packagemanagerIcon,
            title: "Package Manager",
            tooltipDescription:
              "You have mastered the art of package management! Use this powerful tool to easily install, update, and manage dependencies for your code. With a package manager, you can save time and streamline your workflow.",
            children: [
              {
                id: "npm",
                icon: npmIcon,
                title: "npm",
                tooltipDescription:
                  "You have unlocked the power of npm! Use this popular package manager to easily install and manage dependencies for your projects. With npm, you can access a vast library of packages and tools to enhance your applications.",
                children: [
                
                ]
              },
              {
                id: "yarn",
                icon: yarnIcon,
                title: "yarn",
                tooltipDescription:
                  "Congratulations, you have mastered the power of Yarn! Use this lightning-fast package manager to manage dependencies for your projects with ease. With Yarn, you can speed up your workflow and enjoy a smoother development experience.",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "html",
    "icon": htmlIcon,
    "title": "HTML",
    "tooltipDescription": "Unlock the power to create stunning and interactive webpages with HTML! From basic layouts to dynamic content, mastering HTML is the first step to unleashing your creativity on the web. Get started today!",
    "children": [
      {
        "id": "css",
        "icon": css,
        "title": "CSS",
        "tooltipDescription": "Transform your web design skills with CSS! From styling text to creating stunning visual effects, mastering CSS is key to becoming a top-tier web developer.",
        "children": [
          {
            "id": "javascript",
            "icon": javascriptIcon2,
            "title": "JavaScript",
            "tooltipDescription": "Become a master of interactive web development with JavaScript! From creating responsive web designs to building complex applications, mastering JavaScript is essential for creating cutting-edge web experiences.",
            "children": []
          }
        ]
      }
    ]
  }

];

export const backEnd = [
  {
    id: "how internet works",
    icon: howinternertworksIcon,
    title: "how internet works",
    tooltipDescription: "you have unlocked the power of the Internet! Explore the vast network of connected computers and learn how information travels from one corner of the world to another. Use your newfound knowledge to connect with people, discover new websites, and build your online presence. critical hit damage and melee damage.",
    children: [
      {
        id: "http protocol",
        icon: httpprotocolIcon,
        title: "HTTP protocol",
        tooltipDescription:
          "Congratulations, you've mastered the HTTP protocol! Navigate the digital world with ease as you communicate with servers and retrieve information from websites. With this skill, you can access a wealth of knowledge and resources at your fingertips.",
        children: [
          {
            id: "browsers",
            icon: elatedIcon,
            title: "Browsers",
            tooltipDescription:
              "You are now a browser master! Discover the web's many wonders as you browse with speed and precision. Customize your experience with extensions, bookmarks, and other tools to make your online journey even more exciting.",
    id: "Learn a programming language",
                icon: learnaprogramminglanguageIcon,
                title: "Learn a programming language",
                tooltipDescription:
                  "You've unlocked the skill of programming! Learn the language of computers and create your own digital world. With each new language, you'll gain new abilities and possibilities for your creations.",
                children: [
              {
                id: "JavaScript",
                icon: javascriptIcon2,
                title: "JavaScript",
                tooltipDescription:
                  "You have mastered the power of JavaScript! Use this dynamic programming language to bring your web projects to life. Create interactive websites and add exciting features that engage your users and enhance their experience.",
                children: [
                   
                ]
              },
              {
                id: "Python",
                icon: pythonIcon,
                title: "Python",
                tooltipDescription:
                  "You have unlocked the power of Python! Use this versatile language to build anything from simple scripts to complex software applications. With its ease of use and powerful libraries, Python is the ultimate tool for any coding project.",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

export const database = [
  {
    id: "Intro to Database",
    icon: databaseIcon,
    title: "Intro to Database",
    tooltipDescription:
      "Congratulations, adventurer! You've unlocked the power of databases! Discover the wonders of storing and managing data as you embark on your digital journey.",
    children: [
      {
        id: "intro to SQL Database",
        icon: introtosqldatabaseIcon,
        title: "intro to SQL Database",
        tooltipDescription:
          "You are now a master of SQL databases! Use the power of SQL to create, modify, and query databases with ease. With this skill, you can unlock the secrets hidden within your data.",
        children: [
          {
            id: "MySQL",
            icon: mysqlIcon,
            title: "MySQL",
            tooltipDescription:
              "You have mastered the power of MySQL! Use this widely-used relational database management system to store and manage your data with ease. With its rock-solid reliability and robust feature set, MySQL is the ultimate tool for any data-driven project.",
            children: [
               
            ]
          }
        ]
      },
      {
        id: "Intro to Non-SQL Database",
        icon: introtonosqldatabaseIcon,
        title: "Intro to Non-SQL Database",
        tooltipDescription:
          "You have mastered the art of non-SQL databases! Explore the wonders of storing and retrieving data without the constraints of traditional SQL databases. With this skill, you can create lightning-fast applications and unlock new possibilities for your data.              ",
        children: [
          {
            id: "MongoDB",
            icon: mongodbIcon,
            title: "MongoDB",
            tooltipDescription:
              "You have unlocked the power of MongoDB! Use this cutting-edge database technology to store and manage your data with ease. With its flexible document model and powerful querying capabilities, MongoDB is the ultimate tool for any data-driven project.",
            children: [
              {
                id: "GraphQL",
                icon: graphqlIcon,
                title: "GraphQL",
                tooltipDescription:
                  "Congratulations, you have unlocked the power of GraphQL! Use this revolutionary query language to streamline your data fetching process and optimize your application's performance. With GraphQL, you can easily retrieve exactly the data you need and nothing more.",
                children: []
              },
               
            ]
          }
        ]
      }
    ]
  }
];
