# meeting-room-backend
 epicultura

create for the database

CREATE TABLE meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    unit VARCHAR(255),
    ruang_meeting VARCHAR(255),
    kapasitas INT,
    tanggal_rapat DATE,
    waktu_mulai TIME,
    waktu_selesai TIME,
    jumlah_peserta INT,
    jenis_konsumsi JSON,
    nominal_konsumsi DECIMAL(10, 2)
);

setup.env -> 
    cp example.env .env

npm install

node server.js