import { MessageCircle, Mail } from "lucide-react"

export default function Contact() {
    return (
        <section
        id="contact"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-3xl w-full text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
            </h2>

            <p className="text-white/60 mb-12">
            Feel free to reach out if you want to collaborate, ask questions,
            or discuss a project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
                href="https://wa.me/6282236343404"
                target="_blank"
                className="flex px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 transition text-white font-medium items-center gap-2"
            >
                <MessageCircle size={20} />
                WhatsApp
            </a>

            <a
                href="mailto:donyputraperkasa@gmail.com"
                className="flex px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-medium items-center gap-2"
            >
                <Mail size={20} />
                Email
            </a>

            </div>

        </div>
        </section>
    )
}
