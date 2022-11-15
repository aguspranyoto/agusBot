const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya agus. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa?`,
    `Ohh ${data?.hobi},btw kamu punya pacar ga?`,
    `Ohh ${data?.pacar}, siapa nama pacar kamu?`,
    `Ohh ${data?.namapacar}, titip salam buat ${data?.namapacar} ya`,
  ];
};

pertanyaan.innerHTML = botSay()[0];
let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    botDelay({ namapacar: jawaban.value });
  } else if (init === 6) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1250]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya udah mau jawab pertanyaan aku`;
  jawaban.value = "siap thanks juga";
}
function botEnd() {
  window.location.reload();
  jawaban.value = "";
}
