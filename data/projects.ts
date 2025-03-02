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
        title: "HackToGSoC",
        description: "A study platform for the students preparing for GSoC.",
        imgPath: "/project-images/hacktogsoc.png",
        techs: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
        githubLink: "https://github.com/ayushsharma74/hacktogsoc",
        liveLink: "https://hacktogsoc.vercel.app/",
        status: 'online'
    },
    {
        title: "CodeHub",
        description: "A platform curating 1000+ leetcode problems with video and text solutions.",
        imgPath: "/project-images/codehub.png",
        techs: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
        githubLink: "https://github.com/ayushsharma74/codehub",
        liveLink: "https://thecodehub.vercel.app/",
        status: 'online'
    },
    {
        title: "Vizack Enterprises",
        description: "A buisness portfolio for Vizack Enterprises.",
        imgPath: "/project-images/vizack.png",
        techs: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
        liveLink: "https://www.vizackenterprises.com/",
        status: 'online'
    },
    {
        title: "Clarity",
        description: "A ai based document summarizer tool for students.",
        imgPath: "/project-images/clarity.png",
        techs: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
        githubLink: "https://github.com/ayushsharma74/clarity",
        liveLink: "https://theclarityai.vercel.app/",
        status: 'building'
    }
]