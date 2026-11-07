export type ServiceKind = "mathematics" | "website"

export type Service = {
    audience: string
    credential: string
    credentialDetail: string
    description: string
    features: string[]
    highlights?: { label: string; value: string }[]
    kind: ServiceKind
    title: string
}

export const services: Service[] = [
    {
        audience: "SMP • SMA / SMK • YOGYAKARTA",
        credential: "Sarjana Pendidikan Matematika (S.Pd., Gr.)",
        credentialDetail: "Tersertifikasi Guru Profesional (PPG Prajabatan)",
        description:
            "Pendampingan belajar matematika secara privat atau kelompok kecil yang sabar, terstruktur, dan nyaman — bisa datang ke rumah maupun di kafe pilihan.",
        features: [
            "Sesi belajar di rumah atau kafe area Yogyakarta",
            "Pendalaman materi sekolah & tugas harian",
            "Persiapan Ujian Sekolah, TKA, dan ASPD",
            "Evaluasi perkembangan belajar berkala",
        ],
        highlights: [
            { label: "Jenjang", value: "SMP & SMA/K" },
            { label: "Model Belajar", value: "Ke Rumah / Kafe / Daring" },
        ],
        kind: "mathematics",
        title: "Les Privat Matematika",
    },
    {
        audience: "SEKOLAH • YAYASAN • UMKM • PERSONAL",
        credential: "Lulusan RevoU Full-Stack Software Engineering",
        credentialDetail: "Owner & Pengembang di satelyd.id",
        description:
            "Pembuatan website dan aplikasi web modern yang cepat, rapi, responsif di semua perangkat, dan dirancang sesuai kebutuhan operasional Anda.",
        features: [
            "Sistem informasi & tata kelola sekolah/yayasan",
            "Profil instansi, halaman promosi & katalog produk",
            "Aplikasi akademik, ujian daring & game edukasi",
            "Desain ramah pengguna, responsif & siap pakai",
        ],
        highlights: [
            { label: "Layanan", value: "Website Full-Stack & Sistem Kustom" },
            { label: "Platform Resmi", value: "satelyd.id" },
        ],
        kind: "website",
        title: "Jasa Pembuatan Website & Aplikasi",
    },
]
