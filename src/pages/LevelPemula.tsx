import { useNavigate } from 'react-router-dom';

const lessons = [
  { id: 1, title: 'Pengenalan Aksara Batak' },
  { id: 2, title: 'Vokal dan Konsonan Dasar' },
  { id: 3, title: 'Latihan Menulis Karakter' },
];

export default function LevelPemula() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Level Pemula: Daftar Pelajaran</h1>
      <ul className="space-y-4">
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <button
              className="w-full text-left p-4 rounded bg-batak-brown-light hover:bg-batak-brown-medium transition shadow"
              onClick={() => navigate(`/pusat-pembelajaran/level-pemula/${lesson.id}`)}
            >
              <span className="font-semibold">Pelajaran {lesson.id}:</span> {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
