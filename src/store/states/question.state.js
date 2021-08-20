export const intialQuestionState = () => ({
  secureId: "",
  finalAnswer: "YES",
});

export const initialDistortionState = () => ({
  detail: [
    {
      title: "Membaca pikiran",
      desc: `Menyimpulkan bahwa orang lain sedang memikirkan hal-hal negatif tentang dirinya padahal belum menemukan fakta yang sebenarnya.`,
      example: `Saya berjalan sendirian, orang-orang pasti berpikiran bahwa A adalah seorang jomblo dan tidak punya teman.`,
    },
    {
      title: "Generalisasi Berlebihan",
      desc: `Menganggap suatu kejadian akan selamanya terjadi seperti itu, padahal hanya didasarkan pada satu pengalaman.`,
      example: `Hanya karena pernah diselingkuhi seorang pria, kemudian berpikir  bahwa semua pria adalah tukang selingkuh.`,
    },
    {
      title: "Catastrophizing",
      desc: `Membayangkan hal terburuk,menakutkan akan terjadi meskipun tidak sesuai dengan kenyataannya.`,
      example: `Saya takut ketika saya bertemu dia, saya akan mengatakan hal yang bodoh dan saya akan diputusin.`,
    },
    {
      title: "Alasan Emosional",
      desc: `Melihat, menilai atau meyakini sesuatu hanya berdasarkan perasaan.`,
      example: `Meyakini bahwa tugas menulis artikel itu terlalu sulit, sehingga merasa sia-sia untuk mencoba mulai mengerjakan.`,
    },
    {
      title: "Black or white Thingking",
      desc: `Semua atau tidak sama sekali Artinya kita hanya berpikir baik dan buruk atau sukses dan gagal.`,
      example: `Dari 5 ujian,aku gagal disalah satu pelajaran,aku sudah gagal total.`,
    },
    {
      title: "Labeling (Pemberian Cap)",
      desc: `Pemberian label negatif baik kepada diri sendiri maupun orang lain.`,
      example: `Aku jelek banget dan tidak mungkin ada yang suka.`,
    },
    {
      title: "Pernyataan Seharusnya",
      desc: `Menyatakan ‘harus’ atau ‘seharusnya’ pada diri sendiri maupun orang lain. Menuntut pencapaian /perilaku tertentu, meskipun tidak sesuai kenyataannya.`,
      example: `Setelah pertunjukan, seorang pianis konser percaya bahwa dia seharusnya tidak melakukan banyak kesalahan.`,
    },
    {
      title: "Mental negative Filter",
      desc: `Pemikiran yang melihat segala hal dari kacamata negatif tanpa melihat sisi positif yang ada, kalaupun ada yang positif, biasanya diabaikan.`,
      example: `Aku melihat diriku banyak jerawat,jelek sekali,padahal aku punya hidung mancung,mata yang bagus.`,
    },
    {
      title: "Self Blaming (Menyalahkan diri sendiri)",
      desc: `Menyalahkan diri sendiri atas kejadian yang mungkin tidak sepenuhnya salahnya.`,
      example: `Pasti karena aku payah, makanya tidak ada yang mau berteman denganku.`,
    },
    {
      title: "Memperbesar pikiran negatif, meminimalkan pikiran negatif ",
      desc: `Menolak pengalaman positif dengan bersikeras bahwa hal tersebut tidak dihitung, dan tetap mempertahankan keyakinan negatif.`,
      example: `Saya berpikir bahwa dia  berbuat baik pasti karena ada maunya.`,
    },
    {
      title: "Ramalan",
      desc: `Prediksi hal hal mendatang yang bernasib buruk.`,
      example: `Saya ingin daftar organisasi,tapi saya tidak dapat bicara, jadi saya gak jadi daftar.`,
    },
    {
      title: "Merasa Selalu Benar",
      desc: `Menganggap dirinya selalu benar dan pandangan orang lain salah.`,
      example: `Cara mengaduk kopi yang benar itu searah jarum jam, selain itu salah.`,
    },
  ],
});

export const initialAnswerQ5 = () => ({
  answer: [],
});
