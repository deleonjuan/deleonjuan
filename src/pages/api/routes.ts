import type {APIRoute} from "astro"

export const get:APIRoute = async () => {
 return {
    body: JSON.stringify({
        data: [
            {
                name: "about",
                endpoint: "about",
                description: "here you can find some information about who I am, looks interesting just take a look.",
                url: "https://personal-site-seven-snowy.vercel.app/api/about",
                website: "https://personal-site-seven-snowy.vercel.app/#about",
                webpage: "https://personal-site-seven-snowy.vercel.app/about"
            },
            {
                name : "experience",
                endpoint: "experience",
                description: "maybe this part is important, this is the companies I have worked on before.",
                url: "https://personal-site-seven-snowy.vercel.app/api/experience",
                website: "https://personal-site-seven-snowy.vercel.app/#experience",
                webpage: "https://personal-site-seven-snowy.vercel.app/experience"
            },
            {
                name: "projects",
                endpoint: "projects",
                description: "definitely an important section, all of my work is here.",
                url: "https://personal-site-seven-snowy.vercel.app/api/projects",
                website: "https://personal-site-seven-snowy.vercel.app/#projects",
                webpage: "https://personal-site-seven-snowy.vercel.app/projects"
            },
            {
                name: "contact",
                endpoint: "contact",
                description: "if you want to text me sometime check this out."
                url: "https://personal-site-seven-snowy.vercel.app/api/contact",
                website: "https://personal-site-seven-snowy.vercel.app/#contact",
                webpage: "https://personal-site-seven-snowy.vercel.app/contact"

            }
        ]
    })
 }
}