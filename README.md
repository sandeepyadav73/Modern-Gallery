# 🖼️ Modern Photography Gallery

Yeh ek fully responsive, professional photography gallery website hai jo modern web technologies ka istemal karke banayi gayi hai. Ismein images ko filter karne, hover par details dekhne, aur fullscreen preview karne ki functionality hai.

---

## ✨ Features (Gallery Ke Features)

* **Professional Header & Footer:** Ek clean, sticky header jisme responsive mobile navigation (hamburger menu) hai, aur ek minimalist footer social links ke saath.
* **Responsive Grid Layout:** CSS Grid ka smart istemal (`auto-fit`, `minmax`) gallery ko desktop (4-column), tablet (2-column), aur mobile (1-column) par automatically adjust karta hai.
* **Dynamic Filtering:** JavaScript ka istemal karke user 'All', 'Landscape', 'Portrait', ya 'Architecture' jaisi categories par click karke images ko filter kar sakta hai.
* **Hover Overlay Effect:** Jab user kisi image par hover karta hai, tab ek semi-transparent overlay photographer ke naam ke saath smoothly fade-in hota hai.
* **Subtle Animations:** Image par hover karne se halka zoom-in effect (scale) aur card par shadow effect aata hai.
* **Fullscreen Lightbox (Modal):** Kisi bhi image par click karne se woh ek beautiful fullscreen preview modal mein open hoti hai. Modal ko 'X' button se ya background par click karke band kiya ja sakta hai.
* **Category Tags:** Har image par ek chhota sa tag uski category (jaise 'Landscape') dikhata hai, jo filtering ko support karta hai.

---

## 🧰 Tech Stack (Istemal Ki Gayi Technology)

* **HTML5:** Semantic structure ke liye (`<header>`, `<main>`, `<footer>`, `<nav>`).
* **CSS3:** Styling, layout (CSS Grid, Flexbox), animations (transitions), aur poori responsiveness ke liye.
* **JavaScript (ES6+):** Interactive functionality ke liye:
    * Filter logic
    * Modal (Lightbox) ko open/close karna
    * Mobile menu ko toggle karna

---

## 🚀 Kaise Use Karein (How to Use)

Is project ko apne local system par run karne ke liye:

1.  **Code Download Karein:** Is repository ko download (ya clone) karein.
2.  **Folder Open Karein:** Project folder ko open karein.
3.  **File Open Karein:** `index.html` file ko apne web browser (jaise Chrome, Firefox) mein double-click karke open karein.

Bas! Gallery aapke browser mein live ho jayegi.

---

## 📂 File Structure (Project Ka Structure)

Project mein 3 mukhya files hain:

/Modern-Photography-Gallery │ ├── 📄 index.html │ (Poora HTML structure, header, gallery cards, modal, footer) │ ├── 🎨 style.css │ (Sari styling, responsiveness, hover effects, animations) │ └── 🚀 script.js (Sabhi JavaScript logic - Filter, Modal, aur Mobile Menu)
