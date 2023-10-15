import * as Menubar from '@radix-ui/react-menubar';
import * as Avatar from '@radix-ui/react-avatar';

const DropdownProfile = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('/login');
  };

  const avatar = 'https://ui-avatars.com/api/?name=Admin';
  return (
    <Menubar.Root className="flex z-[100]">
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px]">
          <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image alt="Admin" className="h-full w-full rounded-[inherit] object-cover" src={avatar} />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              Admin
            </Avatar.Fallback>
          </Avatar.Root>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            align="end"
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity] z-[100]"
            sideOffset={0}
          >
            <Menubar.Item className="group text-[13px] leading-none text-primary-100 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-300 data-[highlighted]:to-violet-100 data-[highlighted]:text-primary-100 font-semibold p-5 cursor-pointer">
              Admin
            </Menubar.Item>
            <Menubar.Item
              className="group text-[13px] leading-none text-primary-100 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-300 data-[highlighted]:to-violet-100 data-[highlighted]:text-primary-100 font-semibold p-5 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default DropdownProfile;
