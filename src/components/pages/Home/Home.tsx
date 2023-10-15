import { Link } from '@/router';

function Home() {
  return (
    <div className="w-full min-h-screen py-10 bg-gradient grid place-content-center">
      <Link
        className="px-5 py-3 rounded-full bg-white shadow-lg cursor-pointer hover:bg-primary-300 hover:text-white duration-300"
        params={{ id: '1' }}
        to="/surah/:id"
      >
        <h1 className="text-center text-2xl font-semibold">Mulai Membaca Al-Qur'an</h1>
      </Link>
    </div>
  );
}

export default Home;
