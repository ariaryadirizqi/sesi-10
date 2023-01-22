// let i = 0;

// // standar function
// function getDetailHuman() {
//   i += 1;
//   if (i > 5) {
//     console.log("lebih dari 5x diklik");
//   } else {
//     console.log("jatah klik masih ada");
//   }
// }

// // arrow function
// const getDetailHuman2 = () => {
//   i += 1;
//   i > 5 ? console.log("lebih dari 5x human2") : console.log("jatah masih ada human2");
// };

// array
// const mahasiswa = [
//   {
//     nama: "ari",
//     alamat: "jakarta",
//     usia: 22,
//     pekerjaan: "Bos",
//   },
//   {
//     nama: "ahsan",
//     alamat: "buni",
//     usia: 4,
//     pekerjaan: "Bos Muda",
//   },
// ];

// function getDetailData() {
// // mapping
// mahasiswa.map(function (result, i) {
//   console.log(result);
// });

// mahasiswa.forEach((result) => {
//   console.log(result);
// });
// console.log(`data yang anda cari adalah ${datas}`)
// }

class Hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }

  set newColor(color) {
    this.warna = color;
  }

  set newSkill(skill) {
    this.keahlian = skill;
  }

  get detail() {
    return `Hi saya ${this.nama}, saya berwarna ${this.warna} dan keahlian saya ${this.keahlian}`
  }
}

const kucing = new Hewan("jojo");
kucing.newColor = "red";
kucing.newSkill = "meow";
console.log(kucing.detail);
