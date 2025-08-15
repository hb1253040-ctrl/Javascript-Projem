/** Gün 1 */

let sonuc

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.5");
sonuc = parseInt("10a");
sonuc = isNaN("10");

let sayi = 15.1234567;

sonuc = sayi.toPrecision(5); // girilen değer kadar basamak gösterir 
sonuc = sayi.toFixed(4); // noktadan sonraki basamak sayar yuvarlama işlemi yapar
sonuc = Math.round(2.6); // Sayıyı Yuvarlama İşlemi Yapar (Örnek : 2.4 ise 2 ye 2.6 ise 3 e yuvarlar)
sonuc = Math.ceil(2.3); // Her zaman yukarı yuvarlar
sonuc = Math.floor(2.6); // Her zaman aşağı yuvarlar
sonuc = Math.sqrt(4); // Saynın Karakökünü bulur
sonuc = Math.pow(2,3); // Sayının Üslü sayısını hesaplar
sonuc = Math.abs(-10); // Sayının Mutlak Değerini Bulur
sonuc = Math.min(1,2,3,4,5,6,7); // Yazılan Değerlerden En Küçük Değeri Bulur
sonuc = Math.max(1,2,3,4,5,6,7); // Yazılan Değerlerden En Büyük Değeri Bulur
sonuc = Math.floor(Math.random() * 10) ;

console.log(typeof sonuc);
console.log(sonuc);