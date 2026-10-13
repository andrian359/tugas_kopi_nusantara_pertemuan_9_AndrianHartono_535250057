"use client";

import { useState } from "react";
import Image from "next/image";

const menu = [
  {
    name: "Kopi Tubruk",
    description: "Kopi hitam tubruk mantap dari biji robusta Temanggung.",
    price: "Rp 12.000",
    image: "/aset_gambar/Kopi_Tubruk.jpg",
  },
  {
    name: "Es Kopi Susu Aren",
    description: "Perpaduan kopi espresso, susu segar, dan gula aren legit.",
    price: "Rp 18.000",
    image: "/aset_gambar/Es_Kopi_Susu_Aren.jpg",
  },
  {
    name: "Arabika Gayo V60",
    description: "Manual brew dengan aroma harum bunga dan rasa asam segar.",
    price: "Rp 20.000",
    image: "/aset_gambar/Arabika_Gayo_V60.jpg",
  },
];

const faqs = [
  [
    "Dari manakah asal biji kopi yang digunakan?",
    "Kami memperoleh biji kopi secara langsung dari petani lokal, di antaranya dari daerah Gayo dan Temanggung.",
  ],
  [
    "Pukul berapakah jam operasional kedai ini?",
    "Kedai kami beroperasi setiap hari mulai pukul 10.00 hingga 22.00 WIB.",
  ],
  [
    "Apakah tersedia promo khusus untuk mahasiswa?",
    "Saat ini belum tersedia promo khusus untuk mahasiswa, namun kami memastikan harga seluruh menu kami tetap terjangkau bagi kalangan pelajar.",
  ],
  [
    "Apakah menerima metode pembayaran menggunakan QRIS?",
    "Ya, kami menerima berbagai metode pembayaran, termasuk QRIS, transfer bank, maupun uang tunai.",
  ],
];

export default function Home() {
  const [liked, setLiked] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function likeMenu(index: number) {
    setLiked((current) =>
      current.includes(index) ? current : [...current, index],
    );
  }

  return (
    <>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="#hero">
            Kopi Nusantara
          </a>
          <div className="navbar-links">
            <a href="#hero">Beranda</a>
            <a href="#menu">Menu</a>
            <a href="#kontak">Kontak</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1>Cita Rasa Kopi Asli Indonesia</h1>
            <p>Kedai kopi dengan biji kopi langsung dari petani lokal</p>
            <p className="student-info">
              Nama: Andrian Hartono | NIM: 535250057
            </p>
            <a href="#menu">Lihat Menu</a>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="container-custom-menu">
            <h2>Menu Favorit</h2>
            <div className="menu-grid">
              {menu.map((item, index) => (
                <article className="custom-card" key={item.name}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="custom-card-img"
                    width={640}
                    height={360}
                  />
                  <div className="card-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="harga">{item.price}</span>
                    <br />
                    <button
                      className={`btn-like ${liked.includes(index) ? "liked" : ""}`}
                      onClick={() => likeMenu(index)}
                      type="button"
                    >
                      Suka ({liked.includes(index) ? 1 : 0})
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <h2 className="faq-title">FAQ</h2>
          <div className="container-custom-faq">
            {faqs.map(([question, answer], index) => (
              <div className="custom-accordion-item" key={question}>
                <button
                  className={`custom-accordion-btn ${openFaq === index ? "open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  type="button"
                  aria-expanded={openFaq === index}
                >
                  {question}
                  <span aria-hidden="true">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="custom-accordion-body">{answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="kontak" className="footer">
        <p>
          <strong>Kopi Nusantara</strong>
        </p>
        <p>Buka setiap hari jam 10.00 - 22.00</p>
        <p>Nama: Andrian Hartono | NIM: 535250057</p>
        <p className="glowing-text">&copy; 2026 Kopi Nusantara</p>
      </footer>
    </>
  );
}
