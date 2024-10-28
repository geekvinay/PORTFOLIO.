export default function config () {
    return {
        backendUrl: "http://localhost:8080",
        socials: {
            twitter: import.meta.env.VITE_TWITTER,
            github: import.meta.env.VITE_GITHUB,
            linkedin: import.meta.env.VITE_LINKEDIN,
            mail: import.meta.env.VITE_MAIL,
        }
    }
}