import { LOGO_APP } from '@/configs/images';
import DropdownProfile from '@/components/elements/DropdownProfile';
import { Link } from '@/router';

function Header() {
  return (
    <div className="p-3 w-full h-14 bg-primary-200 flex items-center gap-5 fixed top-0 left-0 z-50 shadow">
      <Link to={'/'}>
        <img alt="logo" className="h-10 w-10 rounded-full object-cover bg-white" src={LOGO_APP} />
      </Link>
      <h1 className="text-xl font-bold text-white">Quran App</h1>
      <div className="grid justify-end ml-auto">
        <div>
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
}

export default Header;
