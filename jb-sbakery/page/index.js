import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      {/* Meta and Head */}
      <Head>
        <title>Jb's Bakery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
        <script src="https://apis.google.com/js/api.js"></script>
        <script src="/main.js"></script> {/* Ensure main.js is in the public folder */}
      </Head>

      {/* Main Section */}
      <main id="main">
        <div className="svg-container-main" id="svgMain">
          <object type="image/svg+xml" data="/asset/logo-white.svg" role="img" aria-label="Jb's Bakery Logo in White"></object>
        </div>
      </main>

      {/* Section 1 */}
      <section className="section1" id="section1" style={{ display: 'none' }}>
        <div className="image-container">
          <Image src="/asset/hero-image.webp" alt="Hero Image of JB's Bakery" width={1200} height={800} />
          <h2 className="centered-text">Homemade Bakery ที่คุณต้องหลงรัก</h2>
        </div>
        <div className="svg-container">
          <object type="image/svg+xml" data="/asset/logo-orange.svg" role="img" aria-label="Jb's Bakery Logo in Orange"></object>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section2">
        <div className="image-container2">
          <Image src="/asset/snackbox.JPG" alt="Hero Image of Snackbox" width={1200} height={800} />
        </div>
        <div className="text-box">
          <h1>Jb's Box</h1>
          <p>ที่สุดของความอร่อย คืออร่อยแบบไม่สิ้นสุด! JB's Box ให้คุณเลือกความอร่อยได้ตามใจ🤎</p>
          <p>ไม่ว่าคุณจะชอบอาหารคาวหรืออาหารหวาน ก็หยิบใส่ Box ได้เลย 🍪🍔</p>
          <p>Snow Bun / Burger / Cake / Bread / Croissant / อื่น ๆ JB’s Bakery พร้อมเสิร์ฟความอร่อยและอิ่มท้องให้คุณแล้วทั้งหน้าร้านและเดลิเวอรี่ พิเศษ! สั่งจองได้ทุกวัน แม้ร้านปิด</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section3">
        <h2>Menu</h2>
        <div className="grid-container" id="grid-container"></div>
        <h3>ติดต่อสั่ง JB's Box</h3>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="https://m.me/100224612390817" target="_blank" className="btn">Messenger</a>
          <a href="https://lin.ee/sGYFFQR" target="_blank" className="btn">Line</a>
          <a href="tel:+66969976060" target="_blank" className="btn">Call</a>
        </div>
      </section>
    </div>
  );
};

export default Home;