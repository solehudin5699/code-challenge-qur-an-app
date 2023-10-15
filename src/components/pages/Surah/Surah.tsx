import { useGetSurah } from '@/hooks/useServices/useQuran';
import { useParams } from '@/router';

function Surah() {
  const { id } = useParams('/surah/:id');
  const { data, isLoading } = useGetSurah(Number(id));

  const skeletonHeader = (
    <div className="w-full flex flex-col items-center gap-2 mb-5">
      <div className="w-28 h-10 rounded-lg bg-blue-900 animate-pulse" />
      <div className="w-56 h-5 rounded-lg bg-blue-900 animate-pulse" />
    </div>
  );
  const renderSkeletonLoading = (idx: number) => (
    <div className="w-full h-40 rounded-lg bg-white animate-pulse mb-3" key={idx} />
  );

  const summary = (
    <h6 className="text-center font-normal">
      {data?.data?.namaLatin} | {data?.data?.jumlahAyat} ayat | {data?.data?.tempatTurun}
    </h6>
  );

  return (
    <div className="w-full py-10 px-3">
      {isLoading ? (
        skeletonHeader
      ) : (
        <div className="flex flex-col">
          <h1 className="text-center text-4xl font-medium">Surah {data?.data?.nama}</h1>
          {summary}
        </div>
      )}
      {isLoading &&
        Array(10)
          .fill(null)
          .map((_, idx) => renderSkeletonLoading(idx))}
      {!isLoading &&
        (data?.data?.ayat || []).map((el, idx) => (
          <div className="bg-white rounded-lg p-3 my-3 relative" key={idx}>
            <div className="grid place-content-center bg-primary-300 rounded-full h-10 w-10 text-white font-semibold shadow-xl mb-3">
              {el.nomorAyat}
            </div>
            <p className="font-[Amiri] text-right text-3xl leading-[56px]">{el.teksArab}</p>
            <p className="text-justify font-normal">{el.teksIndonesia}</p>
          </div>
        ))}
    </div>
  );
}

export default Surah;
