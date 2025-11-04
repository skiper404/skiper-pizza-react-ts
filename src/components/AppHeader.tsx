import { Link } from 'react-router-dom';
import AppSearch from './AppSearch';
import CartBadge from './Cart/CartBadge';
import AppLogo from './AppLogo';

const AppHeader = () => (
  <header>
    {/* mobile header */}
    <div className='flex flex-col gap-4 border-red-500 p-4 sm:hidden'>
      <div className='flex items-center justify-between w-full'>
        <AppLogo />
        <Link to='/cart'>
          <CartBadge />
        </Link>
      </div>
      <AppSearch />
    </div>

    {/* desctop header */}
    <div className='sm:flex p-4 items-center gap-8 justify-between hidden'>
      <AppLogo />
      <AppSearch />
      <Link to='/cart'>
        <CartBadge />
      </Link>
    </div>
  </header>
);

export default AppHeader;
