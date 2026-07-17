export type ServiceKind = "mathematics" | "website"

export type Service = {
    audience: string
    certificateUrl?: string
    credential: string
    credentialDetail: string
    description: string
    features: string[]
    kind: ServiceKind
    title: string
    whatsappMessage: string
}

export const services: Service[] = [
    {
        audience: "MIDDLE • HIGH SCHOOL",
        credential: "Bachelor’s Degree in Mathematics Education",
        credentialDetail: "Certified Professional Teacher (Gr.)",
        description:
            "Patient and structured one-on-one guidance, tailored to each " +
            "student’s learning needs and academic goals.",
        features: [
            "Online or in-person sessions in Yogyakarta",
            "Schoolwork and concept reinforcement",
            "Exam, TKA, and ASPD preparation",
            "Personalized learning progress evaluation",
        ],
        kind: "mathematics",
        title: "Mathematics",
        whatsappMessage:
            "Hello Dony, I am interested in private mathematics tutoring. " +
            "Could we discuss the schedule and learning needs?",
    },
    {
        audience: "SMALL BUSINESS • SCHOOL • PERSONAL BRAND",
        certificateUrl:
            "https://drive.google.com/file/d/" +
            "1iZQperKuI1gqOSOFeHGNZKmU7NXpDE_m/view?usp=sharing",
        credential: "RevoU Full-Stack Engineering Graduate",
        credentialDetail: "Certified in Full-Stack Software Engineering",
        description:
            "Modern websites built around your goals, easy to use, " +
            "responsive on every device, and ready to grow with you.",
        features: [
            "Landing pages and company profiles",
            "School and organization websites",
            "Dashboards and internal systems",
            "Responsive design, basic SEO, and deployment",
        ],
        kind: "website",
        title: "Software Engineering",
        whatsappMessage:
            "Hello Dony, I would like to discuss a website project. " +
            "Could we talk about the requirements and scope?",
    },
]
