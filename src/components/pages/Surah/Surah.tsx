import { useGetSurah } from '@/hooks/useServices/useQuran';
import { useParams } from '@/router';

function Surah() {
  const { id } = useParams('/surah/:id');
  const { data } = useGetSurah(Number(id));
  return (
    <div className="w-full py-10 px-3">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl font-medium">Surah {data?.name}</h1>
        <h6 className="text-center font-normal">
          {data?.name_translations.id} | {data?.number_of_ayah} ayat | {data?.place} | {data?.type}
        </h6>
      </div>
      {(data?.verses || []).map((el, idx) => (
        <div className="bg-white rounded-lg p-3 my-3 relative" key={idx}>
          <div className="grid place-content-center bg-primary-300 rounded-full h-10 w-10 text-white font-semibold shadow-xl mb-3">
            {el.number}
          </div>
          <p className="font-[Amiri] text-right text-3xl leading-[56px]">{el.text}</p>
          <p className="text-justify font-normal">{el.translation_id}</p>
        </div>
      ))}
    </div>
  );
}

export default Surah;
