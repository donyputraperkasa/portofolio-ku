export type ServiceKind = "mathematics" | "website"

export type Service = {
    audience: string
    credential: string
    description: string
    features: string[]
    kind: ServiceKind
    title: string
}

export const services: Service[] = [
    {
        audience: "SMP • SMA / SMK • YOGYAKARTA",
        credential: "Pendidik Matematika Tersertifikasi (S.Pd., Gr.)",
        description:
            "Pendampingan belajar privat atau kelompok kecil yang sabar dan terstruktur.",
        features: [
            "Belajar di rumah, kafe, atau daring",
            "Pendalaman materi & tugas sekolah",
            "Persiapan Ujian Sekolah, TKA & ASPD",
            "Evaluasi perkembangan belajar berkala",
        ],
        kind: "mathematics",
        title: "Les Privat Matematika",
    },
    {
        audience: "SEKOLAH • YAYASAN • UMKM • PERSONAL",
        credential: "Owner satelyd.id • Software Engineering (RevoU)",
        description:
            "Pembuatan sistem informasi dan website modern yang cepat, rapi, dan responsif.",
        features: [
            "Sistem informasi & portal sekolah/yayasan",
            "Website profil instansi & katalog bisnis",
            "Aplikasi akademik, ujian & game kelas",
            "Desain ramah pengguna & siap pakai",
        ],
        kind: "website",
        title: "Pembuatan Website & Aplikasi",
    },
]
