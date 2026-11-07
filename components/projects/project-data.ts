export type ProjectAccent =
    | "blue"
    | "cyan"
    | "emerald"
    | "orange"
    | "pink"
    | "purple"

export type ProjectGroup =
    | "all"
    | "featured"
    | "edtech"
    | "system"
    | "client"

export type Project = {
    accent: ProjectAccent
    category: string
    demo?: string
    description: string
    embeddable?: boolean
    featured?: boolean
    group: Exclude<ProjectGroup, "all" | "featured">
    highlights: string[]
    isPrivate?: boolean
    tech: string[]
    title: string
}

export const projects: Project[] = [
    {
        accent: "blue",
        category: "Platform Resmi & Studio",
        demo: "https://satelyd.id",
        description:
            "Platform resmi satelyd.id yang menghimpun media pembelajaran interaktif (Game Kelas), layanan les matematika, dan jasa pembuatan website.",
        embeddable: true,
        featured: true,
        group: "edtech",
        highlights: [
            "Portal utama ekosistem edukasi & layanan web satelyd.id",
            "Integrasi galeri portofolio interaktif & konsultasi cepat",
            "Antarmuka responsif dan ramah pengguna di semua perangkat",
        ],
        tech: ["react", "vite", "javascript", "vercel"],
        title: "satelyd.id",
    },
    {
        accent: "emerald",
        category: "Sistem Informasi & Manajemen",
        demo: "https://tatakelolaku.vercel.app/",
        description:
            "Platform tata kelola dan manajemen dokumen serta administrasi unit sekolah terpadu.",
        embeddable: true,
        featured: true,
        group: "system",
        highlights: [
            "Pengelolaan dokumen & administrasi unit sekolah terstruktur",
            "Pencarian cepat arsip dan pemantauan kelengkapan berkas",
            "Antarmuka bersih yang memudahkan staf dan pimpinan sekolah",
        ],
        tech: ["react", "typescript", "vite", "tailwind"],
        title: "Database Unit Sekolah (Tatakelolaku)",
    },
    {
        accent: "cyan",
        category: "Portal Pengaduan Publik",
        demo: "https://hallo-bopkri-fe.vercel.app/",
        description:
            "Sistem pengaduan, pelaporan, dan aspirasi terpadu BOPKRI berbasis web responsif.",
        embeddable: true,
        featured: true,
        group: "system",
        highlights: [
            "Alur penyampaian aspirasi & pengaduan yang jelas dan aman",
            "Dasbor pemantauan status tindak lanjut laporan",
            "Desain responsif yang mudah diakses dari ponsel maupun komputer",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs"],
        title: "My Cepu (Hallo BOPKRI)",
    },
    {
        accent: "orange",
        category: "Aplikasi Akademik & Guru",
        demo: "https://daftar-nilaiku.vercel.app/",
        description:
            "Aplikasi pengelolaan nilai dan rekapitulasi penilaian hasil belajar siswa secara praktis untuk guru.",
        embeddable: true,
        featured: true,
        group: "edtech",
        highlights: [
            "Input dan rekapitulasi nilai kelas dengan cepat dan rapi",
            "Ringkasan perkembangan nilai siswa per mata pelajaran",
            "Meminimalkan pekerjaan manual administrasi penilaian guru",
        ],
        tech: ["react", "typescript", "tailwind", "vite"],
        title: "Nilai Kelas (Daftar Nilaiku)",
    },
    {
        accent: "purple",
        category: "Media Pembelajaran Interaktif",
        demo: "https://satelyd-fe.vercel.app/",
        description:
            "Pusat game kelas interaktif dari satelyd.id untuk menciptakan suasana belajar yang seru, aktif, dan kolaboratif.",
        embeddable: true,
        featured: true,
        group: "edtech",
        highlights: [
            "Beragam mode permainan edukatif untuk aktivitas di kelas",
            "Dirancang khusus agar mudah ditampilkan di layar proyektor/interaktif",
            "Meningkatkan antusiasme dan partisipasi siswa saat belajar",
        ],
        tech: ["nextjs", "typescript", "tailwind"],
        title: "Satelyd Game Kelas",
    },
    {
        accent: "blue",
        category: "Aplikasi Ujian Daring",
        demo: "https://my-exam-fe.vercel.app/",
        description:
            "Platform ujian matematika daring terintegrasi untuk siswa, guru, dan administrator sekolah.",
        embeddable: true,
        featured: true,
        group: "edtech",
        highlights: [
            "Dasbor sesuai peran (Siswa, Guru, Admin) & manajemen bank soal",
            "Pemantauan pelaksanaan ujian dan rekap skor otomatis",
            "Tampilan ujian fokus dan nyaman di ponsel maupun laptop",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "My Exam",
    },
    {
        accent: "emerald",
        category: "Sistem Internal Yayasan",
        demo: "https://database-yayasan-fe.vercel.app/",
        description:
            "Basis data operasional terpusat untuk manajemen sekolah-sekolah di bawah naungan Yayasan BOPKRI.",
        embeddable: true,
        featured: true,
        group: "system",
        highlights: [
            "Akses multi-peran untuk pengurus yayasan dan unit sekolah",
            "Pencarian terpadu data sekolah, pegawai, dan siswa",
            "Manajemen dokumen, fasilitas, dan pelaporan terintegrasi",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "Database MyBOPKRI",
    },
    {
        accent: "orange",
        category: "Katalog & Manajemen Pesanan",
        demo: "https://the-house-of-mamink-fe-azure.vercel.app/",
        description:
            "Platform katalog produk dan sistem manajemen pesanan untuk memperkuat kehadiran digital The House of Mamink.",
        embeddable: true,
        group: "client",
        highlights: [
            "Katalog produk yang rapi dan mudah dijelajahi pelanggan",
            "Alur pemesanan yang jelas dan terstruktur",
            "Tampilan bisnis profesional yang siap pakai",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs"],
        title: "The House of Mamink",
    },
    {
        accent: "pink",
        category: "Undangan Interaktif (Privat)",
        description:
            "Undangan pernikahan daring interaktif eksklusif (detail tautan dirahasiakan atas permintaan privasi klien).",
        group: "client",
        highlights: [
            "Desain undangan digital personal dengan fitur konfirmasi kehadiran & ucapan",
            "Tampilan ramah perangkat seluler yang ringan dan elegan saat dibuka",
            "Privasi data mempelai & tamu terjaga sesuai permintaan klien",
        ],
        isPrivate: true,
        tech: ["nextjs", "typescript", "tailwind"],
        title: "Undangan Nikah Digital",
    },
    {
        accent: "emerald",
        category: "Portal Sekolah",
        demo: "https://website-wates-fe.vercel.app/",
        description:
            "Website resmi sekolah modern untuk publikasi artikel, pengumuman, dan profil informasi publik.",
        embeddable: true,
        group: "system",
        highlights: [
            "Alur publikasi berita & kegiatan sekolah terpusat",
            "Dasbor admin untuk pengelolaan konten dengan mudah",
            "Halaman informasi publik yang cepat dan ramah pengunjung",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "Website Sekolah (SMP BOPKRI Wates)",
    },
    {
        accent: "orange",
        category: "Platform Bimbingan Belajar",
        demo: "https://hemath-jet.vercel.app",
        description:
            "Platform bimbingan belajar matematika yang santai, ramah siswa, dan mudah diakses.",
        embeddable: true,
        group: "edtech",
        highlights: [
            "Pengalaman belajar yang bersahabat bagi siswa SMP & SMA",
            "Informasi materi terstruktur dan alur pendaftaran praktis",
            "Antarmuka responsif yang terhubung dengan layanan sistem",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "Hemath",
    },
    {
        accent: "blue",
        category: "Game Edukasi",
        demo: "https://belajarmatematika-two.vercel.app/",
        description:
            "Platform latihan berhitung dan pemahaman konsep dasar matematika berbasis permainan interaktif.",
        embeddable: true,
        group: "edtech",
        highlights: [
            "Latihan soal dan pencocokan jawaban secara interaktif",
            "Membuat latihan berhitung terasa lebih menyenangkan",
            "Antarmuka permainan yang intuitif untuk pelajar",
        ],
        tech: ["nextjs", "typescript", "tailwind", "supabase", "nestjs"],
        title: "Belajar Matematika",
    },
    {
        accent: "cyan",
        category: "Game Edukasi",
        demo: "https://flip-card-fe.vercel.app/",
        description:
            "Permainan memori buka-tutup kartu interaktif yang membuat aktivitas belajar lebih seru.",
        embeddable: true,
        group: "edtech",
        highlights: [
            "Interaksi balik kartu yang halus dan responsif",
            "Mekanisme pencocokan kartu dengan skor dan umpan balik langsung",
            "Cocok untuk penyegaran suasana dan permainan di dalam kelas",
        ],
        tech: ["nextjs", "typescript", "tailwind", "supabase", "nestjs"],
        title: "Flip Card Game",
    },
    {
        accent: "pink",
        category: "Proyek Tim E-Commerce",
        demo: "https://mamabear-frontend.vercel.app",
        description:
            "Aplikasi belanja daring lengkap untuk kebutuhan produk ibu dan bayi.",
        group: "client",
        highlights: [
            "Katalog produk lengkap dan keranjang belanja responsif",
            "Autentikasi pengguna dan manajemen pesanan",
            "Integrasi alur pembayaran modern",
        ],
        tech: ["react", "typescript", "tailwind", "vite", "nestjs"],
        title: "MamaBear",
    },
    {
        accent: "purple",
        category: "Proyek Tim Marketplace",
        demo: "https://we-rent-frontend-seven.vercel.app/",
        description:
            "Platform pasar daring responsif untuk menemukan dan menyewa properti dengan mudah.",
        group: "client",
        highlights: [
            "Eksplorasi daftar properti dengan halaman detail lengkap",
            "Navigasi pencarian yang ramah pengguna di berbagai ukuran layar",
            "Kolaborasi pengembangan fitur antarmuka & integrasi API",
        ],
        tech: ["react", "typescript", "tailwind", "vite", "firebase"],
        title: "WeRent",
    },
]
