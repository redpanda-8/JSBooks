const einamiejiMetai = new Date().getFullYear();
const separator = "-".repeat(130); // tiesiog ilga linija
                                    
// Maža funkcija, kuri grąžina VIENĄ stringą apie knygą
function formatKnyga(knyga, einamiejiMetai) {
  const naujaZinute = knyga.leidimoMetai === einamiejiMetai ? " (knyga nauja)" : "";

  return [
    `    ISBN: ${knyga.ISBN}`,
    `    Leidimo metais: ${knyga.leidimoMetai}${naujaZinute}`,
    `    Pavadinimas: "${knyga.pavadinimas}"`,
    `    Puslapių skaičius: ${knyga.puslapiuSkaicius}`,
    `    Kiekis: ${knyga.kiekis}`,
    `    Kaina: ${knyga.kaina} EUR`,
    separator
  ].join("\n");
}

// Pagrindinė funkcija – išveda visą katalogą
function spausdintiKataloga(katalogas) {
  const einamiejiMetai = new Date().getFullYear();

  const visasTekstas = katalogas
    .map((kategorija) => {
      const knygosTekstas = kategorija.knygos
        .map((knyga) => formatKnyga(knyga, einamiejiMetai))
        .join("\n");

      return `Kategorijos pavadinimas: ${kategorija.pavadinimas}\n${knygosTekstas}\n`;
    })
    .join("\n");

  console.log(visasTekstas);
}

// iškvietimas
spausdintiKataloga(katalogas);
