const db = require('../config/db');

const Meeting = {
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM meetings');
        return rows;
    },
    create: async (data) => {
        const [result] = await db.query(
            'INSERT INTO meetings (unit, ruang_meeting, kapasitas, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi, nominal_konsumsi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                data.unit,
                data.ruang_meeting,
                data.kapasitas,
                data.tanggal_rapat,
                data.waktu_mulai,
                data.waktu_selesai,
                data.jumlah_peserta,
                JSON.stringify(data.jenis_konsumsi),
                data.nominal_konsumsi,
            ]
        );
        return result;
    },
};

module.exports = Meeting;
