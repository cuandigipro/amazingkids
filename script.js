document.addEventListener('DOMContentLoaded', function() {

    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainApp.style.display = 'block';
            document.body.style.overflow = 'auto'; // Kembalikan scroll
        }, 800); // Waktu ini harus cocok dengan durasi transisi opacity
    }, 2500); // Durasi splash screen (2.5 detik)


    // ======================================================================
    // DAFTAR VIDEO ANDA SUDAH DIMASUKKAN DI SINI
    // ======================================================================

    const videoDataIndonesia = [
        "Tukang Kebun Kecil Pemberani: [https://drive.google.com/file/d/1uRn3mMrp5ogscbxGwHjC2vEJutMjPtA8/preview]",
        "Rahasia Kebaikan: [https://drive.google.com/file/d/1B_X3oIS69MbFnDKfpg6JtMpVBo4r85vN/preview]",
        "Petualangan akan Tanggung Jawab: [https://drive.google.com/file/d/18pMB4Hnry_Bfy6S5_TjM1Th0CPryKwjk/preview]",
        "Petualang yang Penuh Rasa Ingin Tahu: [https://drive.google.com/file/d/1q33MMHfLkffF9cxhmovaqC0va2I1wKBy/preview]",
        "Perlombaan Sepeda yang Hebat: [https://drive.google.com/file/d/103irZ-ocX8n79jj6VQbSRirCqSescrHR/preview]",
        "Misteri Kejujuran: [https://drive.google.com/file/d/19r5GFyY2JwKQqXiiRL-cYhR0v3WEwmfs/preview]",
        "Pelukis Berbakat: [https://drive.google.com/file/d/1vdRzjEwx7XypibxA4SKvM0dSevYDgMLR/preview]",
        "Tim Pembersih Hutan: [https://drive.google.com/file/d/1LZACWuvvcY_4PTCILwKvy66i0Ga_Aj-K/preview]",
        "Kejutan dari Sang Koki Kecil: [https://drive.google.com/file/d/1qq3stQlQ6A4mUeySFj4tAMkFBiDmXabz/preview]",
        "Kegembiraan dalam Memberi: [https://drive.google.com/file/d/1DbWW-1RAINvHQ8G1dxxEiEw-IIzNM7gG/preview]",
        "Sang Penemu yang Imajinatif: [https://drive.google.com/file/d/1wSmF538wXzhi56nLAJx3Nq_cpIYjPaNc/preview]",
        "Penjelajah yang Berani: [https://drive.google.com/file/d/1628W8Z0fonbzVexLvIvMEKUva1Q-FuaM/preview]",
        "Pentingnya Menghormati: [https://drive.google.com/file/d/1IR28y_h9AkJLTG4TrPLAY1xtX4QQyulO/preview]",
        "Pemimpi yang Berani: [https://drive.google.com/file/d/1K79w8lkb5-CifEXGgl-BVU3_Vo_6Xjgq/preview]",
        "Kekuatan Kejujuran: [https://drive.google.com/file/d/1w80aRrlZ8HU2kD1A8iKlO-wuxq50Qmy-/preview]",
        "Ombak Kebaikan: [https://drive.google.com/file/d/193SWw2EmEF2FjWA4xMSZ_4JEdJ6JI9hj/preview]",
        "Perjalanan Rasa Syukur: [https://drive.google.com/file/d/1nUMTyWBYnSaeGt2xE8JsMqvuMuVY_ySU/preview]",
        "Impianku sebagai Dokter: [https://drive.google.com/file/d/12YryNLBJ3mry7GpjZc2KVJVAN4474GlG/preview]",
        "Insyinyur Masa Depan: [https://drive.google.com/file/d/1DkGgcrpkWQr4_dQ-dAnZBXNteEUNsMnp/preview]",
        "Sayap Pilot yang Tinggi di Langit: [https://drive.google.com/file/d/1DX4d4aXNOtEs-dyZyrl19eIGz9B3scgu/preview]",
        "Impian Seorang Ilmuan: [https://drive.google.com/file/d/1oVafmFLjlkS3-hjUybASAcHVmJPcw6_o/preview]",
        "Warisan Seorang Guru: [https://drive.google.com/file/d/1vJW4c8iuCjBPLvZ3AS19Za4pKd9pcLP_/preview]",
        "Petualangan Kuliner Sang Koki: [https://drive.google.com/file/d/1nz5G90QSl5wcyQlbszLjHRXuf5NAuuQy/preview]",
        "Misi Para Pemerhati Lingkungan: [https://drive.google.com/file/d/1Q0w0GAI8ALkN20KD1zPdRh0AM1iTYkg9/preview]",
        "Cerita Semut Penolong dan Belalang: [https://drive.google.com/file/d/10CP1HXUIXL6GKKhLZst9puLqUCJ8fwg5/preview]",
        "Kura-Kura yang peduli pelajaran bagi keli: [https://drive.google.com/file/d/1N71-NKQY-7kThYhnuiCAHjomEzVsq41o/preview]",
        "Singa Baik Hati dan Tikus Penolong: [https://drive.google.com/file/d/1sbzQSOue7mZfTfosVimTlaxT28I9_V71/preview]",
        "Kelinci yang Ramah dan Tupai yg Kesepian: [https://drive.google.com/file/d/1GNZ4XhTkx4e3cG49bxxmtBRAbSzOEmQY/preview]",
        "Cerita Anjing yang Bersyukur dan Kucing: [https://drive.google.com/file/d/1mfF081AAvmjnNtzEN0vmJddXYOWhGYXA/preview]",
        "Burung Hantu Bijaksana: [https://drive.google.com/file/d/1C1S_jipyQJpgFthnbLdX1kniPjI7hjlA/preview]",
        "Kelinci yang Jujur: [https://drive.google.com/file/d/13k4XcVThw7ocndevEvuJoMNRFJDNkCSX/preview]",
        "Gajah yang Sopan: [https://drive.google.com/file/d/1NHXCB-H_W-KNvunjB3OxbRJzSLUEl-BC/preview]",
        "Tupai yang Suka Berbagi: [https://drive.google.com/file/d/1pDvf0kql_VyHoCo5j_vbzErbDcP15r7m/preview]",
        "Kue Kabaikan: [https://drive.google.com/file/d/1u5GVyBDnErBV8bLd-25stpFoKvpV1Yd0/preview]",
        "Benih Kecil Pemberani: [https://drive.google.com/file/d/1vwS3QV4rcADNBDOWEAb18bwmF-9ZPoL9/preview]",
        "Teman Yang Pemaaf: [https://drive.google.com/file/d/1HvMZj5xbSQtXqOGuWnSKU6ztBVnIDIyO/preview]",
        "Si Ulat yang Penasaran: [https://drive.google.com/file/d/1XkAoks_-kcnPE1qqSGx7zqHNk6fiQaRu/preview]",
        "Si Lebah yang Suka Membantu: [https://drive.google.com/file/d/1UF4b1zpcmIeZ6zDLy_GgWkZfRLqw1khn/preview]",
        "Si Kucing Kecil Yang Pemberani: [https://drive.google.com/file/d/1qeNMrJISeqqKALkAP6xGt3f_ZWoyztXP/preview]",
        "Pantai, Harta Karun Alam: [https://drive.google.com/file/d/1sfyX9bjBKhRO0Mi-BsTN4PXGtJo_vK4D/preview]",
        "Petugas Pemadam Kebakaran yang Pemberani: [https://drive.google.com/file/d/1Fk_pP3ZJESjRVhhL0PW48lk3SevEjtw2/preview]",
        "Hari yang Ajaib di Taman: [https://drive.google.com/file/d/1wtXN_I1uWSsOj783pLLCuXm0EpB325o3/preview]",
        "Petualangan Sang Naga Pemberani: [https://drive.google.com/file/d/1hOLD6Xyvyf0XKFcj-XdaRyL1gVa9BH18/preview]",
        "Persahabatan Unicorn yang Tersesat: [https://drive.google.com/file/d/1ZaH3dykWTe-vbVdy3XLmUAMeoYZFy9jD/preview]",
        "Perjalanan Sang Kesatria Pemberani: [https://drive.google.com/file/d/1pe9uAWUxIoin5xaTFebW-TLex-t_gyQe/preview]",
        "Kisah Persahabatan Naga Terbang: [https://drive.google.com/file/d/10tWetv2V9mmuisKap3I8g_dnOa6fUoky/preview]",
        "Pembelajaran Burung Hantu yang Bijaksana: [https://drive.google.com/file/d/1bWvFfX4q2Su3vU33tqpqi76GKTIILm8t/preview]",
        "Petualangan Malam Hari Danny si Naga: [https://drive.google.com/file/d/19Ni2ztNcD-XJiINiBKDc0FPwQG6pp93j/preview]",
        "Petualangan Timmy yang Penuh Rasa Ingin: [https://drive.google.com/file/d/1SQnqUlY_Rd7yjTwxNkdBq5GZyEI02TrW/preview]",
        "Kerja Sama Tim Para Semut: [https://drive.google.com/file/d/1OytNHisdh27yX2JlpymzJudkUDttlV15/preview]",
        "Impian Besar Kuda Laut Kecil: [https://drive.google.com/file/d/1WawZqzODj7Nv9iSBGGoHnEVMR3pigDw0/preview]",
        "Petualangan Snowy si Teman Frosty: [https://drive.google.com/file/d/12FWfLQ2qOIroDO4A_BCtgSqlVnnoeUCC/preview]",
        "Penemuan Besar si Pendaki Cilik: [https://drive.google.com/file/d/1cUQyVZnofVqMGzzo4NolZkeb9N_U1qFL/preview]",
        "Semut yang Ceroboh: [https://drive.google.com/file/d/1tMshqDlPTOu8FMVndyBeKMxqsp-3WlyX/preview]",
        "Hadiah Persahabatan si Lumba-Lumba Ramah: [https://drive.google.com/file/d/1QMSpZzY8llFBaepuHeQQnu8iYcDUQjnh/preview]",
        "Pelajaran Kerjasama si Ikan Ramah: [https://drive.google.com/file/d/1rsHU4JUG-wtOYOTh2RqQ1TiBhWp72zYu/preview]",
        "Si Naga Api Ramah yang Cemberut: [https://drive.google.com/file/d/1w3MjCLk-dzsUZi71T_bueHC9gQ0wcnlq/preview]",
        "Kesatria Pemberani untuk Persahabatan: [https://drive.google.com/file/d/1CpK-P2WTJsxCU8F9PaUMjV6RChii5CVW/preview]",
        "Perjalanan Pulang si Kucing Hilang: [https://drive.google.com/file/d/1HIYm8qd4kTwe7uHAoJ_6Dq-LpGOSQLW4/preview]",
        "Tindakan Baik si Rubah Licik: [https://drive.google.com/file/d/11QzHAnNihU2RfawgfNFrNl5yq4qUCKk1/preview]",
        "Pelajaran Rendah Hati Raja yang Sombong: [https://drive.google.com/file/d/1YVtjBv59UHJRmlG1yvMvaWYLc_hEfoJ5/preview]",
        "Kemurahan Hati si Belalang Serakah: [https://drive.google.com/file/d/1WITe3Ny4g9B23mRni_CFTWamxqodITsp/preview]",
        "Kisah Perubahan Kurcaci Nakal: [https://drive.google.com/file/d/1Dgt_7vXvNFKyiFv-rLIi9yNwqGgMX1wo/preview]",
        "Perjalanan Seorang Astronot Kecil: [https://drive.google.com/file/d/1NAyqLjtPqw2Sh2nIESb2eVHFHKQ7Dktq/preview]",
        "Perubahan Besar Tommy yang Ceroboh: [https://drive.google.com/file/d/1iG_pTgJLC36bzUf0V46gL-8BtKxTmhha/preview]",
        "Max si Monyet Berhati Baik: [https://drive.google.com/file/d/1VkDe66wiCqmycsQqM7WrbdlU85ZGQIrb/preview]",
        "Kisah Zaman Batu Tim dan Tom: [https://drive.google.com/file/d/1RCKh6sU0ZKPxRpesIy1RT4WopU1wEJ2z/preview]",
        "Jack si Baik Hati: [https://drive.google.com/file/d/1H86VmHQXGqNZ0X8Vm0E-W5rSwtSaLoUy/preview]",
        "Teman Desa yang Suka Membantu: [https://drive.google.com/file/d/1wAXtt4e1RsoQgtXenPauUrE99T7RDXhv/preview]",
        "Tiga Jenis Dinosaurus: [https://drive.google.com/file/d/1IbM3hzAB0rMmAzl6Q_G3tlhVzfgVN5z-/preview]",
        "Dizzy si Dinosaurus yang Tersesat: [https://drive.google.com/file/d/1yEHuv3Q-tHF1wNme2T7oEIDOiVhKl2zV/preview]",
        "Tommy dan Kebun Ajaib: [https://drive.google.com/file/d/1kNRr_7ApASu4w-KTbiSUL2R1R0doWt2j/preview]",
        "Li, Anak yang Baik Hati: [https://drive.google.com/file/d/1IUOYHgb4rOwudXnaUOSKSqaLEQ35wrca/preview]",
        "Ahmed Si Hati Emas: [https://drive.google.com/file/d/19FBSY4-3HZC5yv8SoA9ZKg_0ePvc-j-6/preview]",
        "Teman dari Dekat dan Jauh: [https://drive.google.com/file/d/1y_jdTnbJD4Cr-0kssyajBxbPbjNScyiR/preview]",
        "Pelajaran Bijak dari Zaman Es: [https://drive.google.com/file/d/173lv_6l5XdYNVL9MegeRnTKXuLYwIxze/preview]",
        "Sang Pangeran Cerah: [https://drive.google.com/file/d/14m_DLGaISfb1AiqFSWxuw43jDVkvLAEK/preview]",
        "Memimpikan Samudera yang Dalam: [https://drive.google.com/file/d/1wDOwYNPfBBCrMJuooP-GpzGz0MYYpjTG/preview]",
        "Sang Kstria Pemberani, Kofi: [https://drive.google.com/file/d/1E7NdqaHJCO6HqgFYypRRFSeVtlXziLCD/preview]",
        "Teman Terbaik: [https://drive.google.com/file/d/1dt3WWhNZQ6DBnboNlTw1rYuBHdWHZhJF/preview]",
        "Rasa Syukur Mobil yang Menggerutu: [https://drive.google.com/file/d/1xEhRTpVMiKQUY5E_gihgRPzn0iu63m4P/preview]",
        "Perjalanan Besar Sang Biji Ek Kecil: [https://drive.google.com/file/d/12O4jO3XQnXh3ZUp8HuZovYvFyB6LyzrG/preview]",
        "Waktu Tidur yang Berani: [https://drive.google.com/file/d/16JUkvkGV1CZTSI0tUvPW6i58azqcU4Dw/preview]",
        "Kemenangan Kerja Sama Tim Bola Basket: [https://drive.google.com/file/d/18kMlb9u-r5BjRhbpoaypvd9dfiray8re/preview]",
        "Petualangan Benny yang Sibuk Mekar: [https://drive.google.com/file/d/1o2VkDkYOhPgH0HHyx67fRGSBHL0kQlHf/preview]",
        "Perjalanan Besar Pelaut Cilik: [https://drive.google.com/file/d/1awrVgWJy9f5C-D32mfqWmdorSCfKgaik/preview]",
        "Leo si Pahlawan Mercusuar yang Memandu: [https://drive.google.com/file/d/1Gd-oC0uocjxw9-vci095y3hBVRvOeS84/preview]",
        "Petualangan Cobby si Penemu: [https://drive.google.com/file/d/1dTMhXg4JA8H5vssND0AQAbWXzwLJqU_t/preview]",
        "Perjalanan Mimpi ke Luar Angkasa: [https://drive.google.com/file/d/1JXyoBLWdcG4iHwXRbHPwuyUgG-fFLkwK/preview]",
        "Sehari di Peternakan Hewan teman Ethan: [https://drive.google.com/file/d/1UPg8yYyYjtamCrQa1OxInoU_bL-f8yGa/preview]",
        "Petualangan di Negeri Salju, Keajaiban: [https://drive.google.com/file/d/1gSKjdxnv_dbnmCs-M7S1GmjjnRR_Tn69/preview]",
        "Grug dan Mammoth yang Istimewa: [https://drive.google.com/file/d/1E1WtN0l421lXcMYlT-K50wObnkgSjCn6/preview]",
        "Pencarian Sang Pembuat Api yang Berani: [https://drive.google.com/file/d/1sAp-deFQouBztNvrV3UyRCtlnMRbXsdS/preview]",
        "Pesta Prasejarah Pertama: [https://drive.google.com/file/d/1rAPD0GWD4ImIaek_MgrXJloIhMliA6Nz/preview]",
        "Telur yang Hilang di Lembah Dino: [https://drive.google.com/file/d/1y-15eNHjfoFXufw8uqbREb3f_OAs5wtb/preview]",
        "Pelajaran dari Ulat yang Sangat Lapar: [https://drive.google.com/file/d/16reqVs4ilfWMxL57c1dX3P5BOmf2BcKr/preview]",
        "Speedy Belajar dari Sebuah Pelajaran: [https://drive.google.com/file/d/1C05iyxmcp4I2rk9Ox5zwBnCSnZ4tNrzw/preview]",
        "Hari yang Menggelikan di Kebun Binatang: [https://drive.google.com/file/d/1ul8iTR4LMyHnY_GSp9WZxGLbnh9wN87I/preview]",
        "Perjalanan si Tetesan Hujan yg Pemberani: [https://drive.google.com/file/d/1tIhlQkoYrPnGq1rMVNp2ZfjNsGhEzg5x/preview]",
        "Petualangan ABC Belajar Itu Menyenangkan: [https://drive.google.com/file/d/1BMtbn3kwkgdYDXURemRz0yB292XtEICW/preview]",
        "Kastil Kebaikan di Hati Putri Lily: [https://drive.google.com/file/d/1cMJ9bq0bhhhF3nVSAQBkJfypKKjnYTOO/preview]",
        "Bintang yang Bersyukur: [https://drive.google.com/file/d/1tbq3gXqEna1sRNtEAAs2rF7H4zd59Z8Y/preview]",
        "Senyum Sunny si Bunga Matahari Menebarkan: [https://drive.google.com/file/d/1d--WAB4GnrGsGG3clMq-O-fibCY4UIZq/preview]",
        "Awan yang Penasaran: [https://drive.google.com/file/d/1HkPiqAi6ettVuI9m5wave6LitAFbhncf/preview]",
        "Kata-kata Ajaib Farhan: [https://drive.google.com/file/d/10cbVjQfCR4zxDta5JD5vqhYzdHzKKe9s/preview]"
    ];

    const videoDataEnglish = [
        "The brave Little Gardener: [https://drive.google.com/file/d/13XdcCSWzS-cnsnOQMJQQsUruqKz8BWDR/preview]",
        "The Secret of Kindness: [https://drive.google.com/file/d/1gep56Zf7VhCNWIEV4munDD7zRKn3PwMy/preview]",
        "The Adventure of Responsibility: [https://drive.google.com/file/d/1CDuuxRzHQzkbdwiYC_jl4v1kGTj94rop/preview]",
        "The Curious Explorer: [https://drive.google.com/file/d/19qhJ34XnB5aNcq-bkkdpPKvnFXDlcA6Y/preview]",
        "The Great Bicycle Race: [https://drive.google.com/file/d/18m9Hjh65S07KG3pm79ME7jHf1s17pOof/preview]",
        "The Mystery of Honesty: [https://drive.google.com/file/d/12Un5bPb8V9u-NppQAYLkv7U_ZwndjdNn/preview]",
        "The Talented Painter: [https://drive.google.com/file/d/1HggSD9eELKF8xn19rVo9JuaAyfJLV78o/preview]",
        "The Forest Cleanup Crew: [https://drive.google.com/file/d/1IzIz4aXxJ3XH1U3vbX1wBz8CerAHGczw/preview]",
        "The Little Chef's Surprise: [https://drive.google.com/file/d/1ywWMKzdNaCqamY3kXeZchgw2y0wy52-H/preview]",
        "The Joy of Giving: [https://drive.google.com/file/d/1PwvvixFpwT5oekQ2VhUjy7IdEJecw455/preview]",
        "The Imaginative Inventor: [https://drive.google.com/file/d/1cXRmF-2DLKqNVh4VTP6CDiY43leJ27DT/preview]",
        "The Courageous Explorer: [https://drive.google.com/file/d/1_nr8ywz5NZPtBuQYTD0EDBZpVCll5NSu/preview]",
        "The Importance of Respect: [https://drive.google.com/file/d/1hSyWF8qJ_o9UTuF2rMeIKRC-G9PNHEN8/preview]",
        "The Courageous Dreamer: [https://drive.google.com/file/d/1_stivrYbMBMPEQ0Xs74rTDFSjiWgyzVm/preview]",
        "The Power of Honesty: [https://drive.google.com/file/d/1SH2NRLsguynG0Miy-lzu-TGbKn1DfU-l/preview]",
        "The Kindness Ripple: [https://drive.google.com/file/d/1FzkfjrSxBMX6WWaPWbsD6PZzhDBYatep/preview]",
        "The Gratitude Journey: [https://drive.google.com/file/d/1BxVzeyxXt8SUtz9IH7E1IIC1SbaXbFOZ/preview]",
        "My Dream as a Doctor: [https://drive.google.com/file/d/1WNUdF7ZexsxKiU_Qti6MbMcUSN9RjqzC/preview]",
        "The Future Engineer: [https://drive.google.com/file/d/1R0Em-2fW63YKKXDqIl7EvUlDXezxapb6/preview]",
        "The Pilot's Wings Soaring Through the Ski: [https://drive.google.com/file/d/1DLN0QXZQ9tGR2CdKiKvm0Gl9eR6yUfbb/preview]",
        "A Scientist's Dream-Revisi: [https://drive.google.com/file/d/1MluQII82jz8OgQbarYtWzUUj-YNiI7Ud/preview]",
        "The Legacy Teacher-Revisi: [https://drive.google.com/file/d/1li5vkpsbtfxWua78jrJ-jw5MObqKAUJ6/preview]",
        "The Chef's Culinary Adventure-Revisi: [https://drive.google.com/file/d/1skrHV4TapEVKuqz_7tufsP4Fg4akm0OM/preview]",
        "The Environmentalist's Mission - Revisi: [https://drive.google.com/file/d/1JrbVtQAPBFeUckenHEWD6W3QrfYSVOVK/preview]",
        "The Helpful Ant and the Struggling - Revi: [https://drive.google.com/file/d/1QBbNgToZuBEPrF4dajOBoTjhzmX9DZoM/preview]",
        "The Caring Tortoise and The Hare's - Revi: [https://drive.google.com/file/d/1n9xTc0TzpGXT32bdxSHHhWcfvDIPuzTo/preview]",
        "The Kind Lion and the Helpful Mouse-Revis: [https://drive.google.com/file/d/1Pfp3wy7F1qSiKehy1ooYm52jvtd_PG2y/preview]",
        "The Friendly Rabbit and the Lonely - Revi: [https://drive.google.com/file/d/1j6qeUhokvD4pZCXPmL2cVlAUfYTxRhfQ/preview]",
        "The Grateful Dog and the Helpful Cat-Revi: [https://drive.google.com/file/d/1V_dddNz9GYe64OfPyHY7tvx-8p1xz4vX/preview]",
        "The Wise Owl and the Curious Mouse-Revisi: [https://drive.google.com/file/d/1LBbIgX_ilr1McxX-TvpT24aAmevdVPqJ/preview]",
        "The Honest Rabbit: [https://drive.google.com/file/d/1EBHeJBsF7DC4cdtQzUHyzKvwCHEY9QZA/preview]",
        "The Polite Elephant: [https://drive.google.com/file/d/1mMd1h4qFzmw2gNgTuQPZDEIXvF-NFaxc/preview]",
        "The Sharing Squirrel: [https://drive.google.com/file/d/1cMciGinxZjOrKRrShL2q4l1a7ZTAfvrj/preview]",
        "The Kindness Cookie: [https://drive.google.com/file/d/1CVkTfQthJs9uT7WPHjl46dj_J0cFFWA5/preview]",
        "The Brave Little Seed: [https://drive.google.com/file/d/1h1ujlUG9q8bDRUmIC467NZmfg6qBR8QC/preview]",
        "Forgiving Friend: [https://drive.google.com/file/d/1qRJ_y1OHnDBOmJGdKRRI3cwLWsuG9YXY/preview]",
        "The Curious Caterpillar: [https://drive.google.com/file/d/1F_dA4ood8ZcWUyqe85R-CfdpaXvHqTiZ/preview]",
        "The Helpful Bee: [https://drive.google.com/file/d/1N_y_1aDuQ1A33c5vcMeBHIQtyHazwDxe/preview]",
        "The Courageous Kitten: [https://drive.google.com/file/d/1ySesZF9TLu2BJ4AWfHrS3oNXTE09FFv2/preview]",
        "The Beach Treasure of Nature: [https://drive.google.com/file/d/1OejoF3H4eQeImVN8ewQtZcx5cizOkchf/preview]",
        "The Brave Firefighter: [https://drive.google.com/file/d/1pxpRB62ByYLsoyl1ihbrd7W9WVtz0etT/preview]",
        "The Magical day at the park: [https://drive.google.com/file/d/1rLU-q1b5QDYHSC4_ZoHpOyqYu7fl7daa/preview]",
        "The Brave Dragon's Quest: [https://drive.google.com/file/d/18QPelKmK6sGeYkj5-GqLrpAmr5utY7Iz/preview]",
        "The Lost Unicorn's Friendship: [https://drive.google.com/file/d/1ivvN8HkF1XriLzSbW7HV9e5yJH7okIA2/preview]",
        "The Courageous Knight's Journey: [https://drive.google.com/file/d/1yv-7g-g-GgbyURCBvZRuY_YECsFVA7Ct/preview]",
        "The Flying Dragon's Tale of Friendship: [https://drive.google.com/file/d/1mDXWxrYX7CtBsrzz-ZuQ2V9JgMdDFKpx/preview]",
        "The Wise Owl's Lesson of Learning: [https://drive.google.com/file/d/1JmKc4ACjgZcFu2_epsj1jnnFHmsoW456/preview]",
        "Danny the Tiny Little Dragon's Nighttime: [https://drive.google.com/file/d/1V2QhxJnSi6kUP6g93u5LU0-Jh8eeN3FB/preview]",
        "Timmy's Curious Adventure: [https://drive.google.com/file/d/1KALGdMBvhCGcAG9lVIPvVje5cHd-O6FD/preview]",
        "The Ants' Teamwork Adventure: [https://drive.google.com/file/d/1XxsyXSCIHBWRP6lLZTiv43ozCGQkbF7C/preview]",
        "The Little Sea Horse's Big Dream-Revisi: [https://drive.google.com/file/d/1mRRkM1e2Zh1hCSJ6d7rsXlocYjZHRabu/preview]",
        "The Snowy Adventures of Frosty Friends-Re: [https://drive.google.com/file/d/1MPQXBKX27Fv2Zp1l0sBR0_I7TXDXxx4e/preview]",
        "The Little Hiker's Big Discovery-Revisi: [https://drive.google.com/file/d/1a3pJzpBbUwDb2o8Body1_vekFp1fYTqN/preview]",
        "The Careless Ant-Revisi: [https://drive.google.com/file/d/1JCX97Lyurtapk9GsGZsNEQPBX-jsx3eA/preview]",
        "The Friendly Dolphin's Gift of Friendsh-R: [https://drive.google.com/file/d/1iW6j4_B5CoFaFQnwhRbjWKD7xTqGrdGU/preview]",
        "The Friendly Fish's Teamwork Lesson-Revis: [https://drive.google.com/file/d/13-MRKOprDvAw4tZgxuOH773Sz-HV-Ss9/preview]",
        "The Crabby Dragon's Friendly Flames-Revis: [https://drive.google.com/file/d/14ozCkaP-LsoIQ-CzNoYhba-R_D75CKLn/preview]",
        "The Brave Knight's Quest for Friendship-R: [https://drive.google.com/file/d/1Hywp8vrl2108wAo38MQaUlRl55MuhBJB/preview]",
        "The Lost Kitten Journey Home-Revisi: [https://drive.google.com/file/d/1xo37Oec-mi9XhqWtwZ1b8pRhHbKECLDM/preview]",
        "The Sneaky Fox's Acts of Kindness-Revisi: [https://drive.google.com/file/d/1j6NKpN7tKggRB2HGfqf9uaa5NM6zgPQn/preview]",
        "The Haughty King's Humble Lesson: [https://drive.google.com/file/d/1ArPM8pa_Sw6MdJUffk43in3wZWeIuOvQ/preview]",
        "The Greedy Grasshopper's Generous Deed: [https://drive.google.com/file/d/1geF9NipeAT_dS4rfLoRTs9oznRy90X4R/preview]",
        "The Naughty Dwarf's Change Story: [https://drive.google.com/file/d/1Qqt79XiVI0ktu7ywMoWuaYrEgiDp0dgF/preview]",
        "A Little Astronaut's Journey: [https://drive.google.com/file/d/1WDGJc2DRV3jAw1bEJ1akA7bRXFA4XQW2/preview]",
        "Careless Tommy's Big Change: [https://drive.google.com/file/d/19gT951R-xFeKXTNY3HaFQBjPDxcU6KOW/preview]",
        "Max the Kindhearted Monkey: [https://drive.google.com/file/d/1ELY2q1v8hKrVL4hLYwlTqZ3fn1RQsXoe/preview]",
        "Tim and Tom's Stone Age Stories: [https://drive.google.com/file/d/1xf-Ujf8kpUVLhp1FZtcQ3E2oItsXVPRV/preview]",
        "Jack's Kind Heart: [https://drive.google.com/file/d/1Tw8-uP_HMQWBLDkAL3SvmYgXUjCFh0uI/preview]",
        "The Helpful Village Friend: [https://drive.google.com/file/d/1dToVV56ypvk3gkuDuclDdCx_z0Rd8-U4/preview]",
        "The Three Kind Dinosaurs: [https://drive.google.com/file/d/1jNLt40sJgzu7cel7oIFOOyROcAQK1b75/preview]",
        "Dizzy the Lost Dinosaur - Revisi: [https://drive.google.com/file/d/1eH0XKErqHWPYTe8mPNLmM_Xv1UUQGyfy/preview]",
        "Tommy and the Magical Garden-Revisi: [https://drive.google.com/file/d/1PuWZho5JqxeYPwhazsVG2vZA-rSLmy4B/preview]",
        "Li, The Kind Child: [https://drive.google.com/file/d/1dN2X_P6tTj76k3BoGOw9wrobpKpsSgKO/preview]",
        "Ahmed's Heart of Gold: [https://drive.google.com/file/d/1UTTgfNYxJze6GWMP1fxY7n10jxXn26tJ/preview]",
        "Friends from Near and Far-Revisi: [https://drive.google.com/file/d/1CE0fEcB2QBgA4S8Msr8tv_lDbDHFwk7W/preview]",
        "The Wise Lesson from the Ice Age-Revisi: [https://drive.google.com/file/d/1a1lNHoWgNVhw85_aG_EyjpSJjSspLMOy/preview]",
        "The Sunny Prince-Revisi: [https://drive.google.com/file/d/1-wmOZQTVoHRxlkV4dI65rg8Hws3DEfTy/preview]",
        "Dreaming of the Deep Ocean: [https://drive.google.com/file/d/1R7BWmGjtETVmeLCm_wCRnGqsovIkcMS3/preview]",
        "The Brave Knight, Kofi-Revisi: [https://drive.google.com/file/d/1scNB-MuZf6mxufgQTWSsP-6DvT8WZjRY/preview]",
        "Best Friends: [https://drive.google.com/file/d/1UyVk03wgmIJ8Yp0X57FHfdVTu111XnUN/preview]",
        "The Grumbling Car's Gratitude: [https://drive.google.com/file/d/15-RmmCuekNGbkqMNL-GlHrwh3jcW0rtv/preview]",
        "The Little Acorn's Big Journey: [https://drive.google.com/file/d/1LuoI4RKo0DTXZ3o8KrAzad4KYAhu0jem/preview]",
        "Brave Bedtime: [https://drive.google.com/file/d/19oxEInLj5JcHGaEWlRet4W94Fqt6hWvT/preview]",
        "Billy's Basketball Lesson Teamwork Triump: [https://drive.google.com/file/d/1cK9Qw22Wt86aMWpCHgWxflBw0TQ-1vlz/preview]",
        "Busy Benny's Blooming Adventures: [https://drive.google.com/file/d/1srL_NaD2cIJnGf_rHNKIhZrOhkXJidm0/preview]",
        "The Little Sailor's Big Journey: [https://drive.google.com/file/d/13Npn9FwiVXXixp4D-USxzTrqgdPGi3-v/preview]",
        "Leo the Lighthouse Hero Guiding Light in: [https://drive.google.com/file/d/1_l7mahNNThM091VQXhEmz4YcqLb8WJfi/preview]",
        "Cobby the Inventor's Adventure: [https://drive.google.com/file/d/15LAMFpKmywnQvHYUnRoIbIHi_v_hDER7/preview]",
        "Dream Trip to Space: [https://drive.google.com/file/d/1s94BbfoJVFKwIKtWHSzsnU2P_1xk_8jq/preview]",
        "A Day at the Farm Ethan's Animal Friends: [https://drive.google.com/file/d/1buvko-A9L-CiD2gWxK9F1plhO-tuvGuc/preview]",
        "Adventures in the Snow Maya and Eva's Win: [https://drive.google.com/file/d/1aZuSHS-Nz822EP36UxBGDG3bL8P0UISR/preview]",
        "Grug and the Special Mammoth: [https://drive.google.com/file/d/1iHPY4JFtvxEtBGBZQe-xFdytpv_RPaWb/preview]",
        "The Brave Fire Maker's Quest: [https://drive.google.com/file/d/1La40AL_9ikz8Oj1pR-ZB95tUiuvAtd9e/preview]",
        "The First Prehistoric Feast: [https://drive.google.com/file/d/19mHO8u0pSEyFxubFbZMkjVzAWgNf7hd8/preview]",
        "The Lost Egg of the Enchanted Dino Valley: [https://drive.google.com/file/d/1kkMOxoXeIxOkyanZ-YhZAeT6gWf4pCgB/preview]",
        "The Very Hungry Caterpillar's Lesson: [https://drive.google.com/file/d/1SfqtCPu9rq-cXcw4YHTg6rAQPY53vIbI/preview]",
        "Speedy Learns a Lesson: [https://drive.google.com/file/d/1c6lf4j7TFn_ZRX67_FgRGJWrc_5d7Wnt/preview]",
        "A Silly Day at the Zoo: [https://drive.google.com/file/d/1gydIxO4T5U0BnIpyXCQnzfaIBhBqIdEr/preview]",
        "The Brave Raindrop's Journey: [https://drive.google.com/file/d/1Rcf9tJ0Ky6TyZjJddK3Qb9w9aJq0TTl5/preview]",
        "ABC Adventures Learning is Fun: [https://drive.google.com/file/d/1slAm444tKWarsL36TufQO1ICcKVV59Wq/preview]",
        "The Kindness Castle Princess Lily's Grat: [https://drive.google.com/file/d/13E1f65jtqA5K2ExrDPKSnDfk36tvqZHg/preview]",
        "The Grateful Star: [https://drive.google.com/file/d/1SRILzA9s6pNC6Xfs8K6h12b3GdfihGBe/preview]",
        "Sunny the Sunflower's Smile Spreading Ha: [https://drive.google.com/file/d/1BKfihPzPmEh1a_oZELyMqCSkyD4LkT53/preview]",
        "The Curious Cloud Learning to Ask Questi: [https://drive.google.com/file/d/1Eblmh_ZliSyd8lnE888ZSAzjPCNEfLYs/preview]",
        "Farhan's Magic Words The Power of Saying: [https://drive.google.com/file/d/1BPyEb-dh7Z94PlEpKhrma7xPFA1DshQ5/preview]",
    ];

    // ======================================================================
    // ===== AKHIR BAGIAN EDIT (JANGAN UBAH KODE DI BAWAH INI) =====
    // ======================================================================

    // --- Bagian ini akan mengubah data sederhana menjadi format yang bisa dibaca ---
    function parseVideoData(dataArray, language) {
        return dataArray.map(item => {
            const parts = item.split(': [');
            let title = parts[0];
            const url = parts[1] ? parts[1].slice(0, -1) : ''; // Menghapus kurung tutup ']'
            
            // Membersihkan judul dari tag tambahan
            title = title.replace(/\(16x9\)/g, '').replace(/\(16x9/g, '').trim();

            return { title, url, language };
        }).filter(item => item.title && item.url); // Memastikan data valid
    }

    const indonesianVideos = parseVideoData(videoDataIndonesia, 'id');
    const englishVideos = parseVideoData(videoDataEnglish, 'en');
    const videos = [...indonesianVideos, ...englishVideos];
    // --- Akhir bagian konversi data ---

    let currentVideoIndex = 0;
    let currentPlaylist = [];

    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const playlistContainer = document.getElementById('playlist');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const filterIdBtn = document.getElementById('filter-id');
    const filterEnBtn = document.getElementById('filter-en');

    // Array nama file gambar urut 11-105
    const indoThumbnails = [
        "11. Sang Penemu yang Imajinatif.jpg",
        "12. Penjelajah yang Berani.jpg",
        "13. Pentingnya Menghormati (16x9).mp4_snapshot_00.03.206.jpg",
        "14. Pemimpi yang Berani (16x9).mp4_snapshot_00.03.948.jpg",
        "15. Kekuatan Kejujuran (16x9).mp4_snapshot_00.03.379.jpg",
        "16. Ombak Kebaikan (16x9).mp4_snapshot_00.02.513.jpg",
        "17. Perjalanan Rasa Syukur (16x9).mp4_snapshot_00.02.590.jpg",
        "18. Impianku sebagai Dokter (16x9).mp4_snapshot_00.03.522.jpg",
        "19. Insyinyur Masa Depan (16x9).mp4_snapshot_00.02.449.jpg",
        "20. Sayap Pilot yang Tinggi di Langit (16x9).mp4_snapshot_00.02.851.jpg",
        "21. Impian Seorang Ilmuan (16x9).mp4_snapshot_00.02.464.jpg",
        "22. Warisan Seorang Guru (16x9).mp4_snapshot_00.02.391.jpg",
        "23. Petualangan Kuliner Sang Koki (16x9).mp4_snapshot_00.03.725.jpg",
        "24. Misi Para Pemerhati Lingkungan (16x9).mp4_snapshot_00.02.832.jpg",
        "25. Cerita Semut Penolong dan Belalang (16x9).mp4_snapshot_00.03.075.jpg",
        "26. Kura-Kura yang peduli pelajaran bagi keli.mp4_snapshot_00.02.111.jpg",
        "27. Singa Baik Hati dan Tikus Penolong (16x9).mp4_snapshot_00.02.486.jpg",
        "28. Kelinci yang Ramah dan Tupai yg Kesepian .mp4_snapshot_00.02.469.jpg",
        "29. Cerita Anjing yang Bersyukur dan Kucing (.mp4_snapshot_00.02.285.jpg",
        "30. Burung Hantu Bijaksana (16x9).mp4_snapshot_00.02.352.jpg",
        "31. Kelinci yang Jujur (16x9).mp4_snapshot_00.02.567.jpg",
        "32. Gajah yang Sopan (16x9).mp4_snapshot_00.03.066.jpg",
        "33. Tupai yang Suka Berbagi (16x9).mp4_snapshot_00.03.401.jpg",
        "34. Kue Kabaikan (16x9).mp4_snapshot_00.03.071.jpg",
        "35. Benih Kecil Pemberani (16x9).mp4_snapshot_00.02.595.jpg",
        "36. Teman Yang Pemaaf (16x9).mp4_snapshot_00.02.652.jpg",
        "37. Si Ulat yang Penasaran (16x9).mp4_snapshot_00.03.058.jpg",
        "38. Si Lebah yang Suka Membantu (16x9).mp4_snapshot_00.02.815.jpg",
        "39. Si Kucing Kecil Yang Pemberani (16x9).mp4_snapshot_00.03.737.jpg",
        "40. Pantai, Harta Karun Alam (16x9).mp4_snapshot_00.02.546.jpg",
        "41. Petugas Pemadam Kebakaran yang Pemberani .mp4_snapshot_00.02.376.jpg",
        "42. Hari yang Ajaib di Taman (16x9).mp4_snapshot_00.02.250.jpg",
        "43. Petualangan Sang Naga Pemberani (16x9).mp4_snapshot_00.02.613.jpg",
        "44. Persahabatan Unicorn yang Tersesat (16x9).mp4_snapshot_00.02.712.jpg",
        "45. Perjalanan Sang Kesatria Pemberani (16x9).mp4_snapshot_00.02.618.jpg",
        "46. Kisah Persahabatan Naga Terbang (16x9).mp4_snapshot_00.03.187.jpg",
        "47. Pembelajaran Burung Hantu yang Bijaksana .mp4_snapshot_00.02.484.jpg",
        "48. Petualangan Malam Hari Danny si Naga (16x.mp4_snapshot_00.02.534.jpg",
        "49. Petualangan Timmy yang Penuh Rasa Ingin (.mp4_snapshot_00.02.602.jpg",
        "50. Kerja Sama Tim Para Semut 16x9).mp4_snapshot_00.02.263.jpg",
        "51. Impian Besar Kuda Laut Kecil (16x9).mp4_snapshot_00.02.286.jpg",
        "52. Petualangan Snowy si Teman Frosty (16x9).mp4_snapshot_00.01.969.jpg",
        "53. Penemuan Besar si Pendaki Cilik (16x9).mp4_snapshot_00.01.926.jpg",
        "54. Semut yang Ceroboh (16x9).mp4_snapshot_00.01.895.jpg",
        "55. Hadiah Persahabatan si Lumba-Lumba Ramah .mp4_snapshot_00.02.331.jpg",
        "56. Pelajaran Kerjasama si Ikan Ramah (16x9).mp4_snapshot_00.01.819.jpg",
        "57. Si Naga Api Ramah yang Cemberut (16x9).mp4_snapshot_00.02.828.jpg",
        "58. Kesatria Pemberanu untuk Persahabatan (16.mp4_snapshot_00.02.103.jpg",
        "59. Perjalanan Pulang si Kucing Hilang (16x9).mp4_snapshot_00.02.458.jpg",
        "60. Tindakan Baik si Rubah Licik (16x9).mp4_snapshot_00.02.635.jpg",
        "61. Pelajaran Rendah Hati Raja yang Sombong (.mp4_snapshot_00.02.599.jpg",
        "62. Kemurahan Hati si Belalang Serakah (16x9).mp4_snapshot_00.02.346.jpg",
        "63. Kisah Perubahan Kurcaci Nakal (16x9).mp4_snapshot_00.02.519.jpg",
        "64. Perjalanan Seorang Astronot Kecil (16x9).mp4_snapshot_00.02.317.jpg",
        "65. Perubahan Besar Tommy yang Ceroboh (16x9).mp4_snapshot_00.02.392.jpg",
        "66. Max si Monyet Berhati Baik (16x9).mp4_snapshot_00.02.241.jpg",
        "67. Kisah Zaman Batu Tim dan Tom (16x9).mp4_snapshot_00.02.246.jpg",
        "68. Jack si Baik Hati (16x9).mp4_snapshot_00.02.262.jpg",
        "69. Teman Desa yang Suka Membantu (16x9).mp4_snapshot_00.02.339.jpg",
        "70. Tiga Jenis Dinosaurus (16x9).mp4_snapshot_00.02.330.jpg",
        "71. Dizzy si Dinosaurus yang Tersesat (16x9).mp4_snapshot_00.02.094.jpg",
        "72. Tommy dan Kebun Ajaib (16x9).mp4_snapshot_00.01.811.jpg",
        "73. Li, Anak yang Baik Hati (16x9).mp4_snapshot_00.01.706.jpg",
        "74. Ahmed Si Hati Emas (16x9).mp4_snapshot_00.01.639.jpg",
        "75. Teman dari Dekat dan Jauh (16x9).mp4_snapshot_00.01.627.jpg",
        "76. Pelajaran Bijak dari Zaman Es (16x9).mp4_snapshot_00.02.562.jpg",
        "77. Sang Pangeran Cerah (16x9).mp4_snapshot_00.01.314.jpg",
        "78. Memimpikan Samudera yang Dalam (16x9).mp4_snapshot_00.02.290.jpg",
        "79. Sang Kstria Pemberani, Kofi (16x9).mp4_snapshot_00.03.011.jpg",
        "80. Teman Terbaik (16x9).mp4_snapshot_00.01.144.jpg",
        "81. Rasa Syukur Mobil yang Menggerutu (16x9).mp4_snapshot_00.02.503.jpg",
        "82. Perjalanan Besar Sang Biji Ek Kecil (16x9.mp4_snapshot_00.02.075.jpg",
        "83. Waktu Tidur yang Berani (16x9).mp4_snapshot_00.02.341.jpg",
        "84. Kemenangan Kerja Sama Tim  Bola Basket (1.mp4_snapshot_00.04.143.jpg",
        "85. Petualangan Benny yang Sibuk Mekar (16x9).mp4_snapshot_00.02.764.jpg",
        "86. Perjalanan Besar Pelaut Cilik (16x9).mp4_snapshot_00.01.887.jpg",
        "87. Leo si Pahlawan Mercusuar yang Memandu (1.mp4_snapshot_00.03.204.jpg",
        "88. Petualangan Cobby si Penemu (16x9).mp4_snapshot_00.02.018.jpg",
        "89. Perjalanan Mimpi ke Luar Angkasa (16x9).mp4_snapshot_00.02.074.jpg",
        "90. Sehari di Peternakan Hewan teman Ethan (1.mp4_snapshot_00.02.339.jpg",
        "91. Petualangan di Negeri Salju, Keajaiban (1.mp4_snapshot_00.03.038.jpg",
        "92. Grug dan Mammoth yang Istimewa (16x9).mp4_snapshot_00.02.725.jpg",
        "93. Pencarian Sang Pembuat Api yang Berani (1.mp4_snapshot_00.02.323.jpg",
        "94. Pesta Prasejarah Pertama (16x9).mp4_snapshot_00.02.347.jpg",
        "95. Telur yang Hilang di Lembah Dino  (16x9).mp4_snapshot_00.01.958.jpg",
        "96. Pelajaran dari Ulat yang Sangat Lapar (16.mp4_snapshot_00.02.920.jpg",
        "97. Speedy Belajar dari Sebuah Pelajaran (16x.mp4_snapshot_00.03.114.jpg",
        "98. Hari yang Menggelikan di Kebun Binatang (.mp4_snapshot_00.03.210.jpg",
        "99. Perjalanan si Tetesan Hujan yg Pemberani .mp4_snapshot_00.02.268.jpg",
        "100. Petualangan ABC Belajar Itu Menyenangkan.mp4_snapshot_00.03.269.jpg",
        "101. Kastil Kebaikan di Hati Putri Lily (16x9.mp4_snapshot_00.03.011.jpg",
        "102. Bintang yang Bersyukur (16x9).mp4_snapshot_00.02.228.jpg",
        "103. Senyum Sunny si Bunga Matahari Menebarka.mp4_snapshot_00.03.163.jpg",
        "104. Awan yang Penasaran (16x9).mp4_snapshot_00.02.144.jpg",
        "105. Kata-kata Ajaib Farhan Kekuatan Mengatak.mp4_snapshot_00.02.491.jpg",
    ];

    // Array nama file gambar English urut 1-105
    const engThumbnails = [
        "1. The brave Little Gardener.mp4_snapshot_00.02.292.jpg",
        "2. The Secret of Kindness.mp4_snapshot_00.02.142.jpg",
        "3. The Adventure of Responsibility.mp4_snapshot_00.03.458.jpg",
        "4. The Curious Explorer.mp4_snapshot_00.02.901.jpg",
        "5. The Great Bicycle Race.mp4_snapshot_00.02.606.jpg",
        "6. The Mystery of Honesty.mp4_snapshot_00.02.687.jpg",
        "7. The Talented Painter.mp4_snapshot_00.02.342.jpg",
        "8. The Forest Cleanup Crew.mp4_snapshot_00.02.729.jpg",
        "9. The Little Chef's Surprise.mp4_snapshot_00.02.459.jpg",
        "10. The Joy of Giving.mp4_snapshot_00.01.938.jpg",
        "11. The Imaginative Inventor.mp4_snapshot_00.01.799.jpg",
        "12. The Courageous Explorer.mp4_snapshot_00.01.668.jpg",
        "13. The Importance of Respect.mp4_snapshot_00.01.998.jpg",
        "14. The Courageous Dreamer.mp4_snapshot_00.02.637.jpg",
        "15. The Power of Honesty.mp4_snapshot_00.02.538.jpg",
        "16. The Kindness Ripple.mp4_snapshot_00.02.571.jpg",
        "17. The Gratitude Journey.mp4_snapshot_00.02.566.jpg",
        "18. My Dream as a Doctor.mp4_snapshot_00.02.404.jpg",
        "19. The Future Engineer.mp4_snapshot_00.02.062.jpg",
        "20. The Pilot's Wings Soaring Through the Ski.mp4_snapshot_00.01.930.jpg",
        "21. A Scientist's Dream-Revisi.mp4_snapshot_00.02.737.jpg",
        "22. The Legacy Teacher-Revisi.mp4_snapshot_00.02.279.jpg",
        "23. The Chef's Culinary Adventure-Revisi.mp4_snapshot_00.02.229.jpg",
        "24. The Environmentalist's Mission - Revisi.mp4_snapshot_00.04.156.jpg",
        "25. The Helpful Ant and the Struggling - Revi.mp4_snapshot_00.02.976.jpg",
        "26. The Caring Tortoise and The Hare's - Revi.mp4_snapshot_00.01.930.jpg",
        "27. The Kind Lion and the Helpful Mouse-Revis.mp4_snapshot_00.02.968.jpg",
        "28. The Friendly Rabbit and the Lonely - Revi.mp4_snapshot_00.02.292.jpg",
        "29. The Grateful Dog and the Helpful Cat-Revi.mp4_snapshot_00.02.291.jpg",
        "30. The Wise Owl and the Curious Mouse-Revisi.mp4_snapshot_00.02.855.jpg",
        "31. The Honest Rabbit.mp4_snapshot_00.02.429.jpg",
        "32. The Polite Elephant.mp4_snapshot_00.02.121.jpg",
        "33. The Sharing Squirrel.mp4_snapshot_00.02.885.jpg",
        "34. The Kindness Cookie.mp4_snapshot_00.02.613.jpg",
        "35. The Brave Little Seed.mp4_snapshot_00.02.118.jpg",
        "36. Forgiving Friend.mp4_snapshot_00.02.518.jpg",
        "37. The Curious Caterpillar.mp4_snapshot_00.02.897.jpg",
        "38. The Helpful Bee.mp4_snapshot_00.02.538.jpg",
        "39. The Courageous Kitten.mp4_snapshot_00.03.115.jpg",
        "40. The Beach Treasure of Nature.mp4_snapshot_00.02.252.jpg",
        "41. The Brave Firefighter.mp4_snapshot_00.02.278.jpg",
        "42. The Magical day at the park.mp4_snapshot_00.02.259.jpg",
        "43. The Brave Dragon's Quest.mp4_snapshot_00.02.301.jpg",
        "44. The Lost Unicorn's Friendship.mp4_snapshot_00.02.107.jpg",
        "45. The Courageous Knight's Journey.mp4_snapshot_00.02.600.jpg",
        "46. The Flying Dragon's Tale of Friendship.mp4_snapshot_00.02.376.jpg",
        "47. The Wise Owl's Lesson of Learning.mp4_snapshot_00.02.871.jpg",
        "48. Danny the Tiny Little Dragon's Nighttime .mp4_snapshot_00.01.921.jpg",
        "49. Timmy's Curious Adventure.mp4_snapshot_00.02.128.jpg",
        "50. The Ants' Teamwork Adventure.mp4_snapshot_00.02.042.jpg",
        "51. The Little Sea Horse_s Big Dream-Revisi.mp4_snapshot_00.03.083.jpg",
        "52. The Snowy Adventures of Frosty Friends-Re.mp4_snapshot_00.01.753.jpg",
        "53. The Little Hiker_s Big Discovery-Revisi.mp4_snapshot_00.01.972.jpg",
        "54. The Careless Ant-Revisi.mp4_snapshot_00.02.444.jpg",
        "55. The Friendly Dolphin_s Gift of Friendsh-R.mp4_snapshot_00.02.147.jpg",
        "56. The Friendly Fish_s Teamwork Lesson-Revis.mp4_snapshot_00.03.021.jpg",
        "57. The Crabby Dragon_s Friendly Flames-Revis.mp4_snapshot_00.02.010.jpg",
        "58. The Brave Knight_s Quest for Friendship-R.mp4_snapshot_00.02.119.jpg",
        "59. The Lost Kitten Journey Home-Revisi.mp4_snapshot_00.02.289.jpg",
        "60. The Sneaky Fox_s Acts of Kindness-Revisi.mp4_snapshot_00.02.308.jpg",
        "61. The Haughty King's Humble Lesson.mp4_snapshot_00.02.536.jpg",
        "62. The Greedy Grasshopper's Generous Deed.mp4_snapshot_00.02.262.jpg",
        "63. The Naughty Dwarf's Change Story.mp4_snapshot_00.02.615.jpg",
        "64. A Little Astronaut's Journey.mp4_snapshot_00.02.590.jpg",
        "65. Careless Tommy's Big Change.mp4_snapshot_00.02.354.jpg",
        "66. Max the Kindhearted Monkey.mp4_snapshot_00.02.286.jpg",
        "67. Tim and Tom's Stone Age Stories.mp4_snapshot_00.02.411.jpg",
        "68. Jack's Kind Heart.mp4_snapshot_00.02.411.jpg",
        "69. The Helpful Village Friend.mp4_snapshot_00.02.090.jpg",
        "70. The Three Kind Dinosaurs.mp4_snapshot_00.02.517.jpg",
        "71. Dizzy the Lost Dinosaur - Revisi.mp4_snapshot_00.02.273.jpg",
        "72. Tommy and the Magical Garden-Revisi.mp4_snapshot_00.01.657.jpg",
        "73. Li, The Kind Child.mp4_snapshot_00.01.634.jpg",
        "74. Ahmed_s Heart of Gold.mp4_snapshot_00.01.552.jpg",
        "75. Friends from Near and Far-Revisi.mp4_snapshot_00.01.569.jpg",
        "76. The Wise Lesson from the Ice Age-Revisi.mp4_snapshot_00.01.969.jpg",
        "77. The Sunny Prince-Revisi.mp4_snapshot_00.02.285.jpg",
        "78. Dreaming of the Deep Ocean.mp4_snapshot_00.01.619.jpg",
        "79. The Brave Knight, Kofi-Revisi.mp4_snapshot_00.02.400.jpg",
        "80. Best Friends.mp4_snapshot_00.01.455.jpg",
        "81.The Grumbling Car's Gratitude.mp4_snapshot_00.02.404.jpg",
        "82. The Little Acorn's Big Journey.mp4_snapshot_00.02.151.jpg",
        "83. Brave Bedtime.mp4_snapshot_00.02.022.jpg",
        "84. Billy's Basketball Lesson Teamwork Triump.mp4_snapshot_00.02.578.jpg",
        "85. Busy Benny's Blooming Adventures.mp4_snapshot_00.04.912.jpg",
        "86. The Little Sailor's Big Journey.mp4_snapshot_00.01.815.jpg",
        "87. Leo the Lighthouse Hero Guiding Light in .mp4_snapshot_00.03.270.jpg",
        "88. Cobby the Inventor's Adventure.mp4_snapshot_00.02.080.jpg",
        "89. Dream Trip to Space.mp4_snapshot_00.02.050.jpg",
        "90. A Day at the Farm Ethan's Animal Friends.mp4_snapshot_00.02.332.jpg",
        "91. Adventures in the Snow Maya and Eva's Win.mp4_snapshot_00.02.319.jpg",
        "92. Grug and the Special Mammoth.mp4_snapshot_00.02.310.jpg",
        "93. The Brave Fire Maker's Quest.mp4_snapshot_00.02.501.jpg",
        "94. The First Prehistoric Feast.mp4_snapshot_00.02.094.jpg",
        "95. The Lost Egg of the Enchanted Dino Valley.mp4_snapshot_00.02.147.jpg",
        "96. The Very Hungry Caterpillar's Lesson.mp4_snapshot_00.02.949.jpg",
        "97. Speedy Learns a Lesson.mp4_snapshot_00.02.161.jpg",
        "98. A Silly Day at the Zoo.mp4_snapshot_00.02.484.jpg",
        "99. The Brave Raindrop's Journey.mp4_snapshot_00.02.455.jpg",
        "100. ABC Adventures Learning is Fun.mp4_snapshot_00.02.351.jpg",
        "101. The Kindness Castle Princess Lily's Grat.mp4_snapshot_00.05.000.jpg",
        "102. The Grateful Star.mp4_snapshot_00.02.534.jpg",
        "103. Sunny the Sunflower's Smile Spreading Ha.mp4_snapshot_00.02.306.jpg",
        "104. The Curious Cloud Learning to Ask Questi.mp4_snapshot_00.01.999.jpg",
        "105. Farhan's Magic Words The Power of Saying.mp4_snapshot_00.02.251.jpg",
    ];

    function getGoogleDriveVideoId(url) {
        const match = url.match(/file\/d\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    }

    function renderPlaylist(language) {
        playlistContainer.innerHTML = '';
        currentPlaylist = videos.filter(video => video.language === language);
        
        if(currentPlaylist.length === 0) {
            playlistContainer.innerHTML = `<p class="text-center text-gray-500 mt-8">Belum ada video di kategori ini.</p>`;
            videoTitle.textContent = "Pilih kategori video";
            videoPlayer.src = "";
            return;
        }

        currentPlaylist.forEach((video, index) => {
            // Hilangkan thumbnail, hanya tampilkan judul
            const playlistItem = document.createElement('div');
            playlistItem.className = 'playlist-item flex items-center p-3 rounded-lg cursor-pointer hover:bg-sky-200 transition-colors duration-200 mb-2';
            playlistItem.dataset.index = index;

            playlistItem.innerHTML = `
                <div class="flex-grow min-w-0">
                    <h3 class="font-semibold text-sky-900 truncate">▶️ ${video.title}</h3>
                </div>
            `;
            
            playlistItem.addEventListener('click', () => loadVideo(index));
            playlistContainer.appendChild(playlistItem);
        });
        
        loadVideo(0);
    }

    function loadVideo(index) {
        if (index < 0 || index >= currentPlaylist.length) {
            return;
        }
        
        currentVideoIndex = index;
        const video = currentPlaylist[currentVideoIndex];
        const videoId = getGoogleDriveVideoId(video.url);

        if (videoId) {
            videoPlayer.src = `https://drive.google.com/file/d/${videoId}/preview`;
            videoTitle.textContent = video.title;
        } else {
            videoTitle.textContent = "Gagal memuat video. Link tidak valid.";
            videoPlayer.src = "";
        }
        
        updateActivePlaylistItem();
    }

    function updateActivePlaylistItem() {
        const items = playlistContainer.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            if (index === currentVideoIndex) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentPlaylist.length === 0) return;
        const nextIndex = (currentVideoIndex + 1) % currentPlaylist.length;
        loadVideo(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
        if (currentPlaylist.length === 0) return;
        const prevIndex = (currentVideoIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadVideo(prevIndex);
    });
    
    fullscreenBtn.addEventListener('click', () => {
        if(videoPlayer.src){
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
                videoPlayer.msRequestFullscreen();
            }
        }
    });
    
    filterIdBtn.addEventListener('click', () => {
        renderPlaylist('id');
        filterIdBtn.classList.add('bg-blue-500', 'text-white');
        filterIdBtn.classList.remove('bg-gray-300', 'text-gray-700');
        filterEnBtn.classList.add('bg-gray-300', 'text-gray-700');
        filterEnBtn.classList.remove('bg-blue-500', 'text-white');
    });

    filterEnBtn.addEventListener('click', () => {
        renderPlaylist('en');
        filterEnBtn.classList.add('bg-blue-500', 'text-white');
        filterEnBtn.classList.remove('bg-gray-300', 'text-gray-700');
        filterIdBtn.classList.add('bg-gray-300', 'text-gray-700');
        filterIdBtn.classList.remove('bg-blue-500', 'text-white');
    });

    renderPlaylist('id');
}); 