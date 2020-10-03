/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	title: "Nicholas Starnes",
	nickname: "",
	// subTitle:
	//   "A passionate Full Stack Software Developer  having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"I am a passionate Full Stack Software Developer who strives to deliver end to end engineering of technical products and applications.  I am experienced in developing sustainable and scalable financial and quantitative systems with superior UX design to create impact for the future of FinTech.",
	resumeLink:
		"https://drive.google.com/drive/folders/17r4xWqHks77FOJeyWrDRq89LPuvlUUfS?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Links */
	github: "https://github.com/nrstarnes",
	linkedin: "https://www.linkedin.com/in/nrstarnes/",
  gmail: "starnesnr@gmail.com",
  twitter: "https://twitter.com/NicoRicoNow"
	
};

const skills = {
  data: [
    {
      title: "Financial Systems Engineering",
      imagePath: "analytics.svg",
      skills: [
        "⚙️ Designing, Building, and Implementing scalable systems to support enterprise level FinTech solutions",
        "⚙️ Identifying and extracting realtime systems data to predictively navigate technlogy lifecycles",
        "⚙️ Developing secure and fault tolerant technologies for critical, high volume banking needs"
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "User Authentication",
          fontAwesomeClassname: "fa-user",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Quantitative",
          fontAwesomeClassname: "fa-calculator",
          style: {
            backgroundColor: "transparent",
            color: "#7d79b3"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
      {
        skillName: "Secure Payments",
        fontAwesomeClassname: "fa-money",
        style: {
          backgroundColor: "transparent",
          color: "#189907"
        }
      },
        {
          skillName: "Scheduling",
          fontAwesomeClassname: "fa-calendar",
          style: {
            backgroundColor: "transparent",
            color: "#8c5d65"
          }
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: {
            backgroundColor: "transparent",
            color: "#3e8cf8"
          }
      }
      ]
    },
    {
      title: "Full Stack Development",
      imagePath: "bug.svg",
      skills: [
        "⚙️ Building responsive web applications and website front end functionalities",
        "⚙️ Constructing database architectures with DynamoDB, Microsoft SQL Server, and AWS Relational Database Service",
        "⚙️ Creating application and website backends for clean, efficient execution of code"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#fe5301"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#0094ff"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
         
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "going_up.svg",
      skills: [
        "⚙️ Working with multiple cloud platforms, specializing in Amazon Web Services full suite of Cloud Services",
        "⚙️ Hosting and maintaining websites and applications on virtual machine instances",
        "⚙️ Monitoring system metrics, bandwidth, KPI, storage, and provisioning to ensure proper Load Balancing and Autoscaling measures are configured",
        "⚙️ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "Project Management",
      imagePath: "construction_46pa.svg",
      skills: [
        "⚙️ Utilizing various workflow systems and process visualization tools in order to depict complex technical builds to stakeholders and collaborators",
        "⚙️ Defining, organizing, and resourcing appropriate budgets to fulfill CAPEX and OPEX requirments",
        "⚙️ Leading effective and meaningful collaboraion with technical and non-techincal resources to fulfill project deliveries"
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#406ac4"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000"
          }
        },
        {
          skillName: "G Suite",
          fontAwesomeClassname: "fa-google",
          style: {
            color: "#f83d3d"
          }
        },
        {
          skillName: "Microsoft Office Suite",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#0094ff"
          }
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "fa-slack",
          style: {
            color: "#d42571"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
          
        },
        {
          skillName: "Evernote",
          fontAwesomeClassname: "simple-icons:evernote",
          style: {
            color: "#39c64d"
          }
        },
      ]
    },
    {
      title: "UX Design and Optimization",
      imagePath: "ux.svg",
      skills: [
        "⚙️ Leveraging technologies to show system logic and screen-build iterations via customized Wireframes, Entity Relationship Diagrams (ERD), Data Flow Diagrams (DFD), Organization Charts, and more.",
        "⚙️ Creating interactive and intuitive interfaces to allow users optimal experience with systems and technologies",
        
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
        skillName: "ReactJS",
        fontAwesomeClassname: "simple-icons:react",
        style: {
          color: "#61DAFB"
        }
      },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#fb5932"
          }
        },
        {
          skillName: "Youtube",
          fontAwesomeClassname: "simple-icons:youtube",
          style: {
            color: "#ff2100"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Envira",
          fontAwesomeClassname: "fa-envira",
          style: {
            color: "#60d42b"
          }
        }
        
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    
    
  ]
}

const degrees = {
  degrees : [
    {
      title: "The University of Alabama",
      subtitle: "Bachelor of Science in Finance",
      logo_path: "university-of-alabama.png",
      alt_name: "IIITDM Kurnool",
      duration: "",
      descriptions: [
        "⚡ Focussed in Global Financial Markets, Quantitative Analysis / Modeling and Computation Financial Modeling.",
        
      ],
      website_link: "https://www.ua.edu/"
    },

    {
      title: "The University of Alabama at Birmingham",
      subtitle: "Masters of Science in Management Information Systems",
      logo_path: "uab.png",
      alt_name: "IIITDM Kurnool",
      duration: "Expected Graduation: 2021",
      descriptions: [
        "⚡ Specialized in Data Modeling, Quantitative Methods, and Analytics"
      ],
      website_link: "https://www.uab.edu/home/"
    }

  ]
}



const certifications = {
	certifications: [
		{
			title: "AWS Certified Cloud Practitioner",
			subtitle: "- Amazon Web Services",
			logo_path: "AWS-CloudPractitioner.png",
			certificate_link: "https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=HD2F2CBC2F4E1ZC8",
			alt_name: "AWS",
			color_code: "#FEB82E"
		},
		{
			title: "Statewide Notary",
			subtitle: "- State of Alabama Notary",
			logo_path: "alabama-seal.png",
			certificate_link:
				"http://arc-sos.state.al.us/cgi/notedetail.mbr/detail?note=560486&page=name",
			alt_name: "notary",
			color_code: "#00000099"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact for individual readers and organizations.",
  link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi, my inbox is open for all",
  number: "205.413.3658",
  email_address: "starnesnr@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
