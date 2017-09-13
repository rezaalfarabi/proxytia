function hasil() {
	var data,
		nama,
		peran;

	data = document.getElementById('daftar');
	nama = data.elements['nama'].value;

	if(nama === '') {
		 document.getElementById('hasilNama').innerHTML= 'Nama tidak boleh kosong';
	} else {
		document.getElementById('hasilNama').innerHTML = 'Selamat datang di dunia proxytia, ' + nama;
	}


	peran = data.elements['peran'].value;

	if(peran == 'ksatria') {
		document.getElementById('hasilPeran').innerHTML = 'Halo Ksatria ' + nama + ', Kamu dapat menyerang dengan senjatamu!';
	} else if (peran == 'tabib') {
		document.getElementById('hasilPeran').innerHTML = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka. ';
	} else if (peran == 'penyihir') {
		document.getElementById('hasilPeran').innerHTML = 'Halo Penyihir ' + nama + ', ciptakan keajaiban untuk membantu kemenanganmu';		
	} else {
		document.getElementById('hasilPeran').innerHTML = 'Pilih Peran mu Untuk Memulai Game.';
	}
}