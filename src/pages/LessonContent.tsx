import { useParams, useNavigate } from 'react-router-dom';

const lessons = [
  {
    id: 1,
    title: 'Pengenalan Aksara Batak',
    content: 'Selamat datang di pelajaran pertama! Di sini Anda akan mengenal sejarah dan bentuk dasar aksara Batak. (Dummy content)',
  },
  {
    id: 2,
    title: 'Vokal dan Konsonan Dasar',
    content: 'Pelajari cara membaca dan menulis vokal serta konsonan dasar dalam aksara Batak. (Dummy content)',
  },
  {
    id: 3,
    title: 'Latihan Menulis Karakter',
    content: 'Cobalah menulis beberapa karakter Batak menggunakan panduan visual berikut. (Dummy content)',
  },
];

export default function LessonContent() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find(l => l.id === Number(lessonId));
  if (!lesson) return <div>Pelajaran tidak ditemukan.</div>;
  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">
      <button className="mb-4 text-sm text-batak-brown-dark" onClick={() => navigate(-1)}>
        &larr; Kembali ke Daftar Pelajaran
      </button>
      <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
      <div className="text-batak-brown-dark/80 mb-6">{lesson.content}</div>
    </div>
  );
}
