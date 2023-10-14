import { SelectField } from '@/components/base/Field';
import Header from '@/components/elements/Header/Header';
import { useGetQuran } from '@/hooks/useServices/useQuran';
import { useNavigate } from '@/router';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}
function Main(props: Props) {
  const { data: listSurah } = useGetQuran();
  const navigate = useNavigate();
  const listSurahOptions = useMemo(
    () => (listSurah || []).map((el) => ({ label: el.name, value: el.number_of_surah })),
    [listSurah]
  );

  const handleNavigate = (id: number) => {
    navigate('/surah/:id', { params: { id: String(id) } });
  };
  return (
    <div className="w-full relative pt-14">
      <Header />
      <div className="w-full grid grid-cols-12 transition-all duration-300">
        <div className="min-w-[64px] md:w-full col-span-1 md:col-span-3 h-[calc(100vh-56px)] bg-gradient-to-br px-3 overflow-y-auto overflow-x-hidden relative from-[#5e67e6] to-[#c5c8f2]">
          <div className="bg-white rounded sticky top-0 my-3 md:block hidden">
            <SelectField
              onSelect={(value) => handleNavigate(value.value)}
              options={listSurahOptions}
              placeholder="Select surah"
            />
          </div>
          {(listSurah || []).map((el, idx) => (
            <Link
              className="h-12 w-full bg-primary-100 rounded my-2 flex items-center gap-3 text-white px-2 cursor-pointer shadow"
              key={idx}
              to={`/surah/${el.number_of_surah}`}
            >
              <div className="h-8 w-8 rounded-full grid place-content-center">{el.number_of_surah}.</div>
              <h6 className="md:block hidden">{el.name}</h6>
            </Link>
          ))}
        </div>
        <div className="col-span-11 md:col-span-9 h-[calc(100vh-56px)] overflow-y-auto bg-gradient-to-tr from-[#5e67e6] to-[#c5c8f2]">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
