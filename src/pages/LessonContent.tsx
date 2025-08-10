import { useParams, useNavigate } from 'react-router-dom';

const lessons = [
	{
		id: 1,
		title: 'Pustaha di Tangan: Mengenal Sejarah Singkat dan Konsep Aksara Batak',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Selamat datang, para calon penulis Aksara Batak! Sebelum kita menyelami bentuk-bentuk hurufnya, mari kita kenalan dulu dengan "jiwa"-nya.</p>
				<h3 className="font-heading text-xl text-batak-brown-light font-semibold">Apa itu Aksara Batak?</h3>
				<p className="text-justify">Aksara Batak, atau sering disebut <i>Surat Batak</i>, adalah sistem tulisan tradisional yang digunakan oleh suku-suku Batak di Sumatera Utara. Ini bukan sekadar coretan kuno, melainkan warisan budaya yang sangat berharga. Dahulu, aksara ini ditulis oleh para <i>datu</i> (pemimpin spiritual/adat) di atas media seperti kulit kayu (<i>pustaha laklak</i>), bambu, atau tulang untuk mencatat ilmu-ilmu penting seperti kalender, ramalan, hingga resep obat-obatan.</p>
				<h3 className="font-heading font-semibold text-xl">Konsep Kunci: Ini <i>Abugida</i>, Bukan Alfabet!</h3>
				<p className="text-justify">Ini adalah bagian terpenting! Anda mungkin terbiasa dengan alfabet Latin (A, B, C, D) di mana setiap huruf mewakili satu bunyi (B adalah bunyi 'b'). Aksara Batak bekerja dengan cara berbeda. Sistemnya disebut <b>Abugida</b>.<br />
				Artinya: <b>Setiap huruf dasar sudah otomatis mengandung vokal '/a/'</b>.<br />
				Contoh sederhananya:</p>
				<ul className="list-disc ml-6">
					<li>Huruf <span className="font-batak">ᯅ</span> tidak dibaca 'b', tetapi dibaca <b>'ba'</b>.</li>
					<li>Huruf <span className="font-batak">ᯖ</span> tidak dibaca 't', tetapi dibaca <b>'ta'</b>.</li>
				</ul>
				<p className="text-justify">Konsep ini adalah kunci utama untuk memahami seluruh sistem penulisan Aksara Batak. Jadi, ingat baik-baik ya! Di pelajaran selanjutnya, kita akan belajar cara mengubah bunyi '/a/' ini menjadi bunyi vokal lainnya.</p>
				<p className="text-justify">Di kursus ini, kita akan fokus pada varian <b>Aksara Batak Toba</b>, salah satu yang paling umum digunakan. Siap untuk memulai petualangan ini?</p>
			</div>
		),
	},
	{
		id: 2,
		title: 'Ina ni Surat: Mengenal 19 Huruf Induk Aksara Toba',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Inilah fondasi dari semua tulisan Batak. <b>Ina ni Surat</b> secara harfiah berarti "Ibu dari Tulisan" atau huruf-huruf induk. Ada 19 <i>Ina ni Surat</i> dalam aksara Toba yang wajib Anda hafal. Ingat ya, semuanya dibaca dengan akhiran vokal '/a/'.</p>
				<div className="overflow-x-auto">
					<table className="min-w-full text-sm border rounded-lg">
						<thead>
							<tr className="bg-batak-brown-dark">
								<th className="p-2">Aksara</th>
								<th className="p-2">Latin</th>
								<th className="p-2">Pelafalan</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{[
								['ᯀ', 'a', 'anak'], ['ᯂ', 'ka', 'kawan'], ['ᯅ', 'ba', 'batu'], ['ᯇ', 'pa', 'papan'], ['ᯉ', 'na', 'nama'],
								['ᯋ', 'ha', 'hari'], ['ᯎ', 'ga', 'gajah'], ['ᯐ', 'ja', 'jalan'], ['ᯑ', 'da', 'daun'], ['ᯒ', 'ra', 'raja'],
								['ᯔ', 'ma', 'mata'], ['ᯖ', 'ta', 'tangan'], ['ᯘ', 'sa', 'satu'], ['ᯛ', 'ya', 'yakin'], ['ᯝ', 'nga', 'ngantuk'],
								['ᯞ', 'la', 'lagu'], ['ᯠ', 'nya', 'nyanyi'], ['ᯡ', 'ca', 'cari'], ['ᯤ', 'wa', 'wajah'],
							].map(([aksara, latin, pelafalan]) => (
								<tr key={aksara} className="border-t">
									<td className="p-2 font-batak text-xl">{aksara}</td>
									<td className="p-2">{latin}</td>
									<td className="p-2">{pelafalan}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<h3 className="font-heading font-semibold text-lg mt-4">Tips Menghafal:</h3>
				<ul className="list-disc ml-6">
					<li>Jangan coba hafal semuanya sekaligus. Coba hafal 3-4 huruf setiap hari.</li>
					<li>Gunakan teknik <i>flashcard</i> (kartu hafalan). Tulis aksaranya di satu sisi, dan bacaan latinnya di sisi lain.</li>
					<li>Latihlah menuliskannya berulang-ulang. Otot tangan Anda juga perlu belajar!</li>
				</ul>
			</div>
		),
	},
	{
		id: 3,
		title: 'Manurat di Riorio: Latihan Dasar Menulis Ina ni Surat',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Teori saja tidak cukup! Sekarang saatnya mengotori tangan (atau layar gawai Anda). Menulis <i>Ina ni Surat</i> berulang kali akan membantu Anda mengenali bentuknya secara visual dan melatih ingatan otot (muscle memory).</p>
				<h3 className="font-heading font-semibold text-lg">Tips Penulisan:</h3>
				<ul className="list-disc ml-6">
					<li>Gunakan buku bergaris atau buatlah garis bantu agar tulisan Anda rapi dan proporsional.</li>
					<li>Perhatikan goresannya. Walaupun tidak ada aturan seketat kaligrafi Jepang, cobalah untuk konsisten.</li>
				</ul>
				<h3 className="font-heading font-semibold text-lg">Latihan Mandiri:</h3>
				<ol className="list-decimal ml-6">
					<li>Ambil selembar kertas.</li>
					<li>Pilih 5 <i>Ina ni Surat</i> dari pelajaran sebelumnya.</li>
					<li>Tuliskan masing-masing aksara tersebut sebanyak 10 kali.<br />
						<span className="font-batak text-xl">ᯅ, ᯅ, ᯅ, ᯅ, ᯅ, ...</span><br />
						<span className="font-batak text-xl">ᯖ, ᯖ, ᯖ, ᯖ, ᯖ, ...</span>
					</li>
					<li>Setelah itu, coba tuliskan beberapa aksara secara acak tanpa melihat contoh. Misalnya, coba tulis: "ha", "da", "la", "nga". Periksa kembali apakah tulisan Anda sudah benar.</li>
				</ol>
				<p className="text-justify">Semakin sering berlatih, semakin cepat Anda hafal!</p>
			</div>
		),
	},
	{
		id: 4,
		title: 'Mengubah Suara: Mengenal Panganak ni Surat (Tanda Vokal)',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Anda sudah tahu bahwa <span className="font-batak">ᯅ</span> dibaca 'ba'. Lalu, bagaimana cara menulis 'bi', 'bu', 'be', atau 'bo'? Di sinilah <i>Panganak ni Surat</i> ("Anak dari Tulisan") berperan!</p>
				<p className="text-justify"><i>Panganak ni Surat</i> adalah tanda diakritik (tanda baca kecil) yang diletakkan di atas, di bawah, atau di samping <i>Ina ni Surat</i> untuk mengubah bunyi vokal '/a/' bawaannya.</p>
				<p className="text-justify">Ada 5 <i>Panganak ni Surat</i> utama yang perlu Anda ketahui. Mari kita gunakan <span className="font-batak">ᯂ</span> (ka) sebagai contoh dasarnya:</p>
				<div className="overflow-x-auto">
					<table className="min-w-full text-sm border rounded-lg text-center">
						<thead>
							<tr className="bg-batak-brown-light/10 text-center">
								<th className="p-2">Tanda</th>
								<th className="p-2">Nama</th>
								<th className="p-2">Posisi</th>
								<th className="p-2">Contoh</th>
								<th className="p-2">Bunyi Menjadi</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{[
								['᯦', 'Hulucca', 'Di atas', 'ᯂ᯦', 'ke'],
								['ᯩ', 'Uluwa', 'Di atas', 'ᯂᯩ', 'ki'],
								['ᯪ', 'Siala', 'Di bawah', 'ᯂᯪ', 'ko'],
								['ᯫ', 'Borotan', 'Di bawah', 'ᯂᯫ', 'ku'],
								['᯦', 'Pangkal', 'Samping kanan', 'ᯂ᯦', 'kang'],
							].map(([tanda, nama, posisi, contoh, bunyi]) => (
								<tr key={nama} className="border-t">
									<td className="p-2 font-batak text-xl">{tanda}</td>
									<td className="p-2">{nama}</td>
									<td className="p-2">{posisi}</td>
									<td className="p-2 font-batak text-xl">{contoh}</td>
									<td className="p-2">{bunyi}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<h3 className="font-heading font-semibold text-lg mt-4">Penting:</h3>
				<ul className="list-disc ml-6">
					<li>Hulucca (e) dan Uluwa (i) sama-sama di atas. Perhatikan bentuknya, Uluwa lebih melengkung.</li>
					<li>Pangkal (<span className="font-batak">᯦</span>) hanya untuk bunyi 'ng' di akhir suku kata, seperti pada kata "tong" atau "bang".</li>
				</ul>
				<h3 className="font-heading font-semibold text-lg mt-4">Latihan Cepat:</h3>
				<ul className="list-disc ml-6">
					<li>Bagaimana Anda menulis "si"? (Jawaban: <span className="font-batak">ᯘᯩ</span>)</li>
					<li>Apa bacaan dari <span className="font-batak">ᯞᯪ</span>? (Jawaban: lo)</li>
					<li>Bagaimana Anda menulis "deng"? (Jawaban: <span className="font-batak">ᯑ᯦᯦</span>)</li>
				</ul>
			</div>
		),
	},
	{
		id: 5,
		title: 'Pangolat: Kunci untuk Menulis Konsonan Mati',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Ini adalah konsep super penting kedua setelah Abugida. Anda sudah bisa menulis "ba", "bi", "bu", tapi bagaimana cara menulis 'b' saja? Untuk itulah kita punya <b>Pangolat</b>.</p>
				<p className="text-justify"><i>Pangolat</i> (<span className="font-batak">ᯬ</span>) adalah tanda yang berfungsi untuk <b>menghilangkan atau mematikan vokal '/a/' bawaan</b> dari sebuah <i>Ina ni Surat</i>.</p>
				<h3 className="font-heading font-semibold text-lg">Cara Kerjanya:</h3>
				<ul className="list-disc ml-6">
					<li><span className="font-batak">ᯘ</span> dibaca <b>sa</b>. Jika kita tambahkan Pangolat, <span className="font-batak">ᯘᯬ</span>, maka vokalnya 'hilang', dan dibaca menjadi <b>s</b>.</li>
					<li><span className="font-batak">ᯉ</span> dibaca <b>na</b>. <span className="font-batak">ᯉᯬ</span> dibaca <b>n</b>.</li>
				</ul>
				<h3 className="font-heading font-semibold text-lg">Penggunaan Utama Pangolat:</h3>
				<p className="text-justify">Pangolat digunakan untuk menulis konsonan di akhir kata.</p>
				<h3 className="font-heading font-semibold text-lg">Contoh: Menulis "surat"</h3>
				<ol className="list-decimal ml-6">
					<li>Suku kata pertama adalah <b>"su"</b>. Kita ambil <i>Ina ni Surat</i> <span className="font-batak">sa</span> (<span className="font-batak">ᯘ</span>) lalu tambahkan <i>Panganak ni Surat</i> <span className="font-batak">u</span> (<span className="font-batak">ᯫ</span>). Hasilnya: <span className="font-batak">ᯘᯫ</span></li>
					<li>Suku kata kedua adalah <b>"rat"</b>. Ini terdiri dari 'ra' dan konsonan mati 't'.</li>
					<li>Kita tulis <b>"ra"</b>: <span className="font-batak">ᯒ</span></li>
					<li>Kita tulis konsonan <b>"t"</b>: Ambil <i>Ina ni Surat</i> <span className="font-batak">ta</span> (<span className="font-batak">ᯖ</span>) lalu tambahkan <i>Pangolat</i> (<span className="font-batak">ᯬ</span>). Hasilnya: <span className="font-batak">ᯖᯬ</span></li>
					<li>Sekarang, gabungkan semuanya: <span className="font-batak">ᯘᯫᯒᯖᯬ</span></li>
				</ol>
				<p className="text-justify">Selamat! Anda baru saja menulis kata "surat" dalam Aksara Batak!</p>
			</div>
		),
	},
	{
		id: 6,
		title: 'Latihan Perdana: Menulis Kata-kata Sederhana',
		content: (
			<div className="space-y-4">
				<p className="text-justify">Saatnya menggabungkan semua yang telah Anda pelajari! Mari kita pecah proses penulisan kata per kata.</p>
				<h3 className="font-heading font-semibold text-lg">Contoh 1: Menulis "BORU" (anak perempuan)</h3>
				<ol className="list-decimal ml-6">
					<li>Suku kata pertama: <b>"bo"</b>.<br />
						Ambil <i>Ina ni Surat</i> <span className="font-batak">ba</span> (<span className="font-batak">ᯅ</span>).<br />
						Tambahkan <i>Panganak ni Surat</i> <span className="font-batak">o</span> (<span className="font-batak">ᯪ</span>) di bawahnya.<br />
						Hasil: <span className="font-batak">ᯅᯪ</span>
					</li>
					<li>Suku kata kedua: <b>"ru"</b>.<br />
						Ambil <i>Ina ni Surat</i> <span className="font-batak">ra</span> (<span className="font-batak">ᯒ</span>).<br />
						Tambahkan <i>Panganak ni Surat</i> <span className="font-batak">u</span> (<span className="font-batak">ᯫ</span>) di bawahnya.<br />
						Hasil: <span className="font-batak">ᯒᯫ</span>
					</li>
					<li>Gabungkan keduanya: <span className="font-batak">ᯅᯪᯒᯫ</span></li>
				</ol>
				<h3 className="font-heading font-semibold text-lg">Contoh 2: Menulis "BATAK"</h3>
				<ol className="list-decimal ml-6">
					<li>Suku kata pertama: <b>"ba"</b>.<br />
						Cukup gunakan <i>Ina ni Surat</i> <span className="font-batak">ba</span> (<span className="font-batak">ᯅ</span>).
					</li>
					<li>Suku kata kedua: <b>"tak"</b>.<br />
						Tulis dulu <b>"ta"</b>: <span className="font-batak">ᯖ</span>.<br />
						Lalu tulis konsonan mati <b>"k"</b>: Ambil <span className="font-batak">ka</span> (<span className="font-batak">ᯂ</span>) dan tambahkan <i>Pangolat</i> (<span className="font-batak">ᯬ</span>). Hasilnya: <span className="font-batak">ᯂᯬ</span>.<br />
						Gabungkan suku kata kedua: <span className="font-batak">ᯖᯂᯬ</span>.
					</li>
					<li>Gabungkan semuanya: <span className="font-batak">ᯅᯖᯂᯬ</span></li>
				</ol>
				<h3 className="font-heading font-semibold text-lg">Sekarang Giliran Anda!</h3>
				<p className="text-justify">Coba tulis kata-kata di bawah ini. Jangan takut salah, tujuan kita adalah berlatih.</p>
				<ul className="list-decimal ml-6">
					<li>mata</li>
					<li>lima</li>
					<li>doli (anak laki-laki)</li>
					<li>pitu (tujuh)</li>
					<li>horas</li>
				</ul>
			</div>
		),
	}
];

export default function LessonContent() {
	const { lessonId } = useParams();
	const navigate = useNavigate();
	if (!lessonId) {
		return (
			<div className="w-full px-3 sm:px-4 md:px-8 py-6 sm:py-8 space-y-8">
				<h1 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-heading text-batak-brown-light mb-2 sm:mb-4 px-2 text-center">Pusat Pembelajaran: Daftar Pelajaran</h1>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg text-batak-brown-light max-w-5xl mx-auto px-2 sm:px-4 leading-relaxed">
					Kuasai Aksara Batak melalui pelajaran terstruktur, latihan interaktif, dan tutorial komprehensif.
				</p>
				<div className="space-y-8">
					{lessons.map((lesson) => (
						<div key={lesson.id} className="bg-batak-brown-muted/10 rounded-xl shadow p-3 sm:p-6 md:p-8">
							<h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-heading text-batak-brown-dark mb-3 sm:mb-4">{lesson.title}</h2>
							<div className="lesson-content text-batak-brown-dark text-sm sm:text-base md:text-lg leading-relaxed">
								{lesson.content}
							</div>
							<button className="mt-4 text-batak-brown-light hover:underline text-xs sm:text-sm md:text-base" onClick={() => navigate(`/pusat-pembelajaran/${lesson.id}`)}>
								Buka Pelajaran
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
	const lesson = lessons.find(l => l.id === Number(lessonId));
	if (!lesson) return <div>Pelajaran tidak ditemukan.</div>;
	return (
		<div className="max-w-2xl mx-auto py-6 sm:py-8 px-3 sm:px-4 md:px-8 space-y-6">
			<button className="mb-4 text-xs sm:text-md text-batak-brown-light/80 hover:text-batak-brown-light transition-all duration-300" onClick={() => navigate(-1)}>
				&larr; Kembali ke Daftar Pelajaran
			</button>
			<h2 className="font-heading text-lg sm:text-2xl font-bold mb-2 text-batak-brown-light">{lesson.title}</h2>
			<div className="text-batak-brown-light mb-6 text-sm sm:text-base md:text-lg">{lesson.content}</div>
		</div>
	);
}