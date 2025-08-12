import { memo } from 'react';
import Mapping from '../../components/mapping';
import { useFetch } from '../../hooks/useFetch';
import type { IResponce } from '../../types';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const limit = 10;
  const [params, setParam] = useSearchParams();
  const skip = Number(params.get('skip')) || 1;
  const category = params.get('tag') || '';

  const { data, loadin } = useFetch<IResponce>(
    `/recipes/${category ? `tags/${category}` : ''}`,
    {
      limit,
      skip: (skip - 1) * limit,
    },
  );

  const { data: categories } = useFetch<string[]>('/recipes/tags');

  const handlerPaginate = (inx: number) => {
    if (inx === 0) {
      params.delete('skip');
    } else {
      params.set('skip', inx.toString());
    }
    setParam(params);
  };

  const handlerCategory = (item: string) => {
    params.set('tag', item);
    params.delete('skip');
    setParam(params);
  };

  return (
    <div className="Index container mx-auto p-6">
      <div className="flex gap-3 overflow-x-auto pb-4">
        <button
          onClick={() => handlerCategory('')}
          className={`px-5 py-2 rounded-full font-medium transition ${
            category === ''
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories?.map((item: string, index: number) => (
          <button
            key={index}
            onClick={() => handlerCategory(item)}
            className={`px-5 py-2 rounded-full font-medium transition whitespace-nowrap ${
              category === item
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <Mapping title="Shop" data={data?.recipes} />

      {loadin && <p className="text-center text-gray-500 mt-4">Loading...</p>}

      <div className="flex justify-center gap-2 mt-6">
        {Array(Math.ceil((data?.total || 0) / limit))
          .fill('')
          .map((_, inx: number) => (
            <button
              key={inx}
              onClick={() => handlerPaginate(inx)}
              className={`px-3 py-1 rounded-md border transition ${
                skip === (inx + 1)
                  ? 'bg-black text-white border-black'
                  : 'hover:bg-gray-200 border-gray-300'
              }`}
            >
              {inx + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default memo(Shop);
