import Categories from './AppCategories';
import Filter from './AppFilter';

const TopBar = () => (
  <div className='flex flex-col lg:flex-row gap-4 justify-between m-10 '>
    <Categories />
    <Filter />
  </div>
);

export default TopBar;
