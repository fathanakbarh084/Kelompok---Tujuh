const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function main() {

    let jumlahTiket = Number(
        await input("Masukkan Jumlah Tiket Yang Ingin Anda Beli : ")
    );

    let totalDasar = 0;

    for (let i = 1; i <= jumlahTiket; i++) {

        console.log("\nPemilik Tiket Ke-" + i);

        let namaPembeli = await input(
            "Masukkan Nama Pemilik Tiket : "
        );

        let usia = Number(
            await input("Masukkan Usia Pemilik Tiket : ")
        );

        let hargaDasar;

        if (usia < 5) {
            hargaDasar = 0;
        } else if (usia <= 12) {
            hargaDasar = 20000;
        } else if (usia < 60) {
            hargaDasar = 50000;
        } else {
            hargaDasar = 35000;
        }

        totalDasar += hargaDasar;
    }

    let hari = await input(
        "\nMasukkan Hari Pembelian Tiket : "
    );

    hari = hari.toLowerCase();

    let totalAkhir;

    if (hari === "sabtu" || hari === "minggu") {
        totalAkhir = totalDasar + (totalDasar * 0.20);
    } else {
        totalAkhir = totalDasar;
    }

    if (jumlahTiket >= 5) {
        totalAkhir -= totalAkhir * 0.10;
    }

    let kodePromo = await input(
        "Masukkan Kode Promo Pembelian Tiket : "
    );

    if (kodePromo === "HEMAT7") {
        totalAkhir -= 10000;
    }

    console.log("\n====================================");
    console.log("Total Tiket Yang Dibeli : " + jumlahTiket);
    console.log(
        "Total Biaya Pembayaran Tiket : Rp" +
        totalAkhir.toLocaleString("id-ID")
    );
    console.log("====================================");

    rl.close();
}

main();