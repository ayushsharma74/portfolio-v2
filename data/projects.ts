export type Project = {
    title: string,
    description: string,
    imgPath: string
    techs: string[],
    githubLink?: string,
    liveLink?: string,
    status: 'online' | 'building'
}

export const projects: Project[] = [
    {
        title: "Hirehog",
        description: "Automated the process of job application tracking using ai.",
        imgPath: "/project-images/hirehog.png",
        techs: ["ReactJS", "NextJS","ExpressJS" , "Shadcn UI", "TailwindCSS", "Python", "MongoDB", "Oauth2"],
        githubLink: "https://github.com/ayushsharma74/hirehog-web",
        liveLink: "https://hirehog.vercel.app/",
        status: 'building'
    },
    {
        title: "HackToGSoC",
        description: "A study platform for the students preparing for GSoC.",
        imgPath: "/project-images/hacktogsoc.png",
        techs: ["ReactJS", "NextJS","Shadcn UI", "MagicUI" , "TailwindCSS", "Web Scraping"],
        githubLink: "https://github.com/ayushsharma74/hacktogsoc",
        liveLink: "https://hacktogsoc.vercel.app/",
        status: 'online'
    },
    {
        title: "Vizack Enterprises",
        description: "A buisness portfolio for Vizack Enterprises.",
        imgPath: "/project-images/vizack.png",
        techs: ["NextJS", "ReactJS", "TailwindCSS","Shadcn UI", "Framer Motion"],
        liveLink: "https://www.vizackenterprises.com/",
        status: 'online'
    },
    {
        title: "CodeHub",
        description: "A platform curating 1000+ leetcode problems with video and text solutions.",
        imgPath: "/project-images/codehub.png",
        techs: ["ReactJS", "NextJS","Shadcn UI", "MagicUI" , "TailwindCSS", "Web Scraping"],
        githubLink: "https://github.com/ayushsharma74/codehub",
        liveLink: "https://thecodehub.vercel.app/",
        status: 'online'
    },
    {
        title: "Clarity",
        description: "A ai based document summarizer tool for students.",
        imgPath: "/project-images/clarity.png",
        techs: ["ReactJS", "NextJS", "TailwindCSS", "MagicUI", "Gemini AI", "Langchain"],
        githubLink: "https://github.com/ayushsharma74/clarity",
        liveLink: "https://theclarityai.vercel.app/",
        status: 'building'
    },
    {
        title: "Similarity Search",
        description: "Similarity search on a dataset of movies using vector embeddings",
        imgPath: "/project-images/similaritysearch.png",
        techs: ["ReactJS", "NextJS", "TailwindCSS", "Vector Embeddings", "AstraDB"],
        githubLink: "https://github.com/ayushsharma74/similaritysearch-system",
        liveLink: "https://similaritysearch-system-t1mg.vercel.app/",
        status: 'online'
    },
    {
        title: "Portfolio V1",
        description: "My personal portfolio website.",
        imgPath: "/project-images/portfolio-v1.png",
        techs: ["ReactJS", "NextJS", "TailwindCSS", "MagicUI"],
        githubLink: "https://github.com/ayushsharma74/portfolio",
        liveLink: "https://ayushsharmaportfolio.vercel.app/",
        status: 'online'
    },
]