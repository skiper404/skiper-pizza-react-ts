import { Link } from 'react-router-dom';
import AppLogo from './AppLogo';

const NotFound = () => (
  <div className='p-4'>
    <AppLogo />
    <div className='flex flex-col items-center p-8 gap-2'>
      <span className='text-4xl'>🙃</span>
      <h1 className='font-bold'>Страница не найдена</h1>
      <Link to='/' className='hover:bg-orange-300 rounded-xl transition px-4 py-1 bg-gray-200'>
        На главную
      </Link>
    </div>
  </div>
);

export default NotFound;
