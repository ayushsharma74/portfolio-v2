

export interface BlogMetadata {
    title: string;
    description: string;
    date: string;
    readingTime: string;
    link: string;
}

export const blogmetadata: BlogMetadata[] = [
    {
        title: "Vertical Scaling vs Horizontal Scaling",
        description: "In this blog, I'll discuss the differences between horizontal and vertical scaling and why is it important for a developer to learn these concepts",
        date: "20 May, 2025",
        readingTime: "3 min read",
        link: "https://ayshtwt.bearblog.dev/vertical-scaling-vs-horizontal-scaling/"

    },
    {
        title: "Implementing Authentication in NextJS 15 with better auth and MongoDB",
        description: "In this blog, I'm going to walk you through implementing it in your Next.js application, sharing all the gotchas I discovered along the way.",
        date: "Feb 18, 2025",
        readingTime: "5 min read",
        link: "https://efficacious-coral-e49.notion.site/Implementing-Authentication-in-NextJS-15-with-better-auth-and-MongoDB-19dd20fcd7bf80f5a0aff869b543a641"
    },
    
]