// 1. Mengambil tombol dari HTML dan menyimpannya ke variabel 'tombolSapa'
const tombolSapa = document.getElementById('sapaButton');
                                            
// 2. Menambahkan "pendengar kejadian" (event listener)
tombolSapa.addEventListener('click', function() {
                                             // 3. Aksi yang akan dijalankan saat tombol diklik
                                             alert('Halo, Fadil! Terima kasih sudah jadi Ultraman!');
                                           });
