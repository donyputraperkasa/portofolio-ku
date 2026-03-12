import { MessageCircle, Mail } from "lucide-react"

export default function Contact() {
    return (
        <section
        id="contact"
        className="min-h-screen px-4 sm:px-6 py-20 md:py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-3xl w-full text-center mx-auto">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Contact Me
            </h2>

            <p className="text-white/60 mb-10 md:mb-12 text-sm sm:text-base">
            Feel free to reach out if you want to collaborate, ask questions,
            or discuss a project.
            </p>

            <div className="flex sm:flex gap-4 justify-center items-center">

                <a
                    href="https://wa.me/6282236343404"
                    target="_blank"
                    className="flex w-full sm:w-auto justify-center px-8 py-3 rounded-full border border-white/20 hover:bg-white/50 transition text-white font-medium items-center gap-2"
                >
                    <MessageCircle size={20} />
                    WhatsApp
                </a>

                <a
                    href="mailto:donyputraperkasa@gmail.com"
                    className="flex w-full sm:w-auto justify-center px-8 py-3 rounded-full border border-white/20 hover:bg-white/50 transition text-white font-medium items-center gap-2"
                >
                    <Mail size={20} />
                    Email
                </a>

            </div>

        </div>
        </section>
    )
}
