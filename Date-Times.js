let simdi = new Date();

// Get Methods

sonuc = simdi; 
sonuc = simdi.getDate(); // Gün
sonuc = simdi.getDay(); // 0 :Pazar, 6:cumartesi
sonuc = simdi.getFullYear(); // Yıl
sonuc = simdi.getHours(); // Saat
sonuc = simdi.getTime(); 

// Set Methods

simdi.setFullYear(2025);
simdi.setMonth(7); // 0: Ocak 
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(2003,2,22);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

console.log(typeof sonuc);
console.log(sonuc)