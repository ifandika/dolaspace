# DolaSpace

---

## Pendahuluan

**DolaSpace** adalah platform pembelajaran interaktif yang didedikasikan untuk melestarikan dan mempromosikan warisan budaya **Tari Dolalak** — sebuah tarian tradisional yang berasal dari Purworejo, Jawa Tengah, Indonesia.

Aplikasi ini dikembangkan sebagai **platform berbasis web**, yang berarti dapat diakses dari perangkat apa pun, kapan saja, dan di mana saja. Antarmukanya sepenuhnya **responsif**, sehingga dapat menyesuaikan dengan baik pada layar desktop maupun perangkat seluler.

Dokumentasi ini memberikan gambaran teknis mengenai proyek: arsitektur, teknologi yang digunakan, struktur folder, integrasi, dan alur kerja pengembangan.

---

## Tech Stack

| Layer | Teknologi | Keterangan |
|---|---|---|
| **Build Tool** | [Vite](https://vite.dev/guide/) | Build tool dan server pengembangan yang cepat |
| **UI Library** | [React.js v19](https://react.dev/reference/react) | Frontend berbasis komponen |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/docs/installation/using-vite) | CSS utility-first melalui plugin Vite |
| **Routing** | [React Router](https://reactrouter.com/home) | Navigasi sisi klien |
| **Charts** | [Google Charts](https://developers.google.com/chart) | Visualisasi data |
| **Language** | JavaScript (bukan TypeScript) | Dipilih untuk kesederhanaan dan iterasi yang lebih cepat |
| **Database** | Tidak ada | Data disimpan secara statis (lihat bagian Penyimpanan) |

---

## Cara Mengembangkan

Ikuti langkah-langkah berikut untuk menyiapkan proyek secara lokal:

### 1. Clone atau unduh proyek

```bash
$ git clone <repository-url>

$ cd dolaspace
```

### 2. Buka dengan code editor

Direkomendasikan: Visual Studio Code.

### 3. Instal dependensi

```bash
$ npm install

# Instal library tambahan yang digunakan dalam proyek ini:

$ npm install react-router-dom

$ npm install tailwindcss @tailwindcss/vite

$ npm install react-google-charts
```

### 4. Jalankan development server

```bash
$ npx vite

# atau

$ npm run dev
```

### 5. Buka di browser

```text
[http://localhost:5173/](http://localhost:5173/)
```

---

## Penyimpanan

DolaSpace tidak menggunakan database (seperti MySQL, PostgreSQL, MongoDB, dan sebagainya).

Semua data disimpan dalam file statis di dalam `src/data/`. Ketika pengguna mengirimkan data baru (misalnya komentar), data tersebut disimpan di React state (atau file statis) dan tidak disimpan secara permanen ke database.

> Keterbatasan: Setiap input baru akan hilang ketika halaman dimuat ulang, karena tidak disimpan secara permanen. Hal ini memang disengaja untuk versi saat ini — backend dapat ditambahkan pada pengembangan berikutnya.

---

## Struktur Proyek

Berikut adalah struktur folder dan file DolaSpace, beserta penjelasan singkat untuk setiap item.

```text
dolaspace/

├── node_modules/                 # Paket npm yang telah diinstal (React, Vite, dll.)

├── public/                       # File statis yang dapat diakses secara publik

├── src/                          # Source code utama

│   ├── assets/                   # Seluruh sumber daya proyek

│   │   ├── documentation/        # Foto-foto dokumentasi Tari Dolalak

│   │   ├── dolalak/              # Gambar komponen kostum Tari Dolalak

│   │   └── video/                # Video pengenalan Tari Dolalak

│   │                               # (sumber: "Romansa Purworejo" di YouTube)

│   ├── components/               # Komponen JSX yang dapat digunakan kembali

│   │   ├── Navbar.jsx

│   │   ├── Footer.jsx

│   │   ├── VideoHero.jsx

│   │   ├── GalleryGrid.jsx

│   │   └── ...

│   ├── data/                     # File data statis (.js)

│   ├── hooks/                    # Custom React hooks (misalnya untuk komentar)

│   ├── pages/                    # Komponen tingkat halaman (tampilan yang diatur oleh route)

│   │   ├── Home.jsx

│   │   ├── Chatbot.jsx

│   │   ├── Dolalak.jsx

│   │   ├── NotFound.jsx

│   │   └── History.jsx

│   ├── App.jsx                   # Entry aplikasi — mendefinisikan semua route

│   ├── index.css                 # Style global + direktif Tailwind

│   └── main.jsx                  # React root — memasang App ke index.html

├── .env                          # Variabel lingkungan (misalnya Gemini API key)

├── .gitignore                    # File/folder yang dikecualikan dari Git

├── .oxlintrc.json                # Konfigurasi linter

├── index.html                    # File HTML utama yang disajikan kepada pengguna

├── package-lock.json             # Versi dependensi yang dikunci

├── package.json                  # Metadata proyek & script

├── README.md                     # Dokumentasi ini

└── vite.config.js                # Konfigurasi Vite
```

---

## SDLC — Model Waterfall

DolaSpace dikembangkan menggunakan metodologi Waterfall — pendekatan linear dan berurutan di mana setiap tahap harus diselesaikan sebelum melanjutkan ke tahap berikutnya.

### Deskripsi Tahap

| No | Tahap | Deskripsi |
|---|---|---|
| 1 | Analisis Kebutuhan | Mengumpulkan semua kebutuhan: fitur apa saja yang harus tersedia (galeri, chatbot, chart, halaman sejarah). Menentukan target pengguna (pelajar, penggemar budaya). |
| 2 | Perancangan Sistem | Merancang UI/UX, sitemap, alur data, dan hierarki komponen. Memilih teknologi yang digunakan (React + Vite + Tailwind v4). |
| 3 | Implementasi | Menulis kode sebenarnya: membangun komponen, mengatur routing, mengintegrasikan Google Charts, menghubungkan Gemini API, dan menyematkan Google Calendar. |
| 4 | Pengujian | Memastikan setiap fitur berjalan dengan baik: routing, responsivitas, respons chatbot, rendering chart, dan pengiriman formulir. Memperbaiki bug yang ditemukan. |
| 5 | Deployment | Mempublikasikan aplikasi ke platform hosting (Vercel/Netlify). Mengatur environment variables dan memastikan production build berjalan dengan baik. |
| 6 | Pemeliharaan | Data disimpan secara statis (lihat bagian Penyimpanan) | Berkelanjutan: memperbarui konten, memperbaiki bug, menambahkan fitur baru, dan memantau performa. |

---

## Routing Halaman

DolaSpace menggunakan React Router untuk navigasi sisi klien.

- [http://localhost:5173/](http://localhost:5173/) => Beranda: halaman utama dengan video hero, galeri, chart, dan bagian komentar

- [http://localhost:5173/about-us](http://localhost:5173/about-us) => Tentang Kami: informasi mengenai platform DolaSpace

- [http://localhost:5173/history](http://localhost:5173/history) => Sejarah: sejarah lengkap Tari Dolalak

- [http://localhost:5173/dolalak](http://localhost:5173/dolalak) => Komponen: komponen kostum dan atribut Tari Dolalak

- [http://localhost:5173/chatbot](http://localhost:5173/chatbot) => Chatbot: asisten AI interaktif yang didukung oleh Gemini

- [http://localhost:5173/abc](http://localhost:5173/abc) => Tidak Ditemukan: pengujian halaman not-found

---

## Integrasi

DolaSpace terintegrasi dengan empat layanan eksternal.

### 1. Google Calendar

Digunakan pada bagian Events di halaman beranda. Menampilkan kalender yang disematkan secara langsung dan menampilkan acara Tari Dolalak yang akan datang di Purworejo.

### 2. Google Gemini AI - gemini-3-flash-preview

Digunakan untuk mendukung halaman Chatbot. Pengguna dapat mengajukan pertanyaan mengenai Tari Dolalak menggunakan bahasa alami, dan AI memberikan respons dengan gaya yang ramah serta memperhatikan konteks budaya.

### 3. Google Charts

Digunakan pada bagian Data. Menampilkan chart interaktif (pie dan line) yang memvisualisasikan minat masyarakat terhadap Tari Dolalak berdasarkan wilayah dan tahun.

### 4. WhatsApp

Diintegrasikan pada bagian Help / Support. Pengguna dapat menghubungi admin secara langsung melalui WhatsApp untuk mendapatkan bantuan.

---

## Kompatibilitas

### Perangkat

| Perangkat | Didukung |
|---|---|
| Desktop / Web | Ya |
| Android / iOS / Tablet (browser) | Ya |
| Smart TV (browser) | Ya |

### Browser

| Browser | Didukung |
|---|---|
| Google Chrome | Ya |
| Microsoft Edge | Ya |
| Safari | Ya |
| Mozilla Firefox | Ya |

---

## Referensi

[1] [https://react.dev/reference/react](https://react.dev/reference/react)

[2] [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

[3] [https://vite.dev/guide/](https://vite.dev/guide/)

[4] [https://developers.google.com/chart](https://developers.google.com/chart)

[5] [https://reactrouter.com/home](https://reactrouter.com/home)
