import { memo } from 'react';
import Mapping from '../../components/mapping';
import { useFetch } from '../../hooks/useFetch';
import type { IResponce } from '../../types';





const Home = () => {
  const {data} = useFetch<IResponce>('recipes',{limit:50,skip:0})
  return (
    <div className="Index">

      <Mapping data={data?.recipes} title='New products'/>
    </div>
  );
};

export default memo(Home);