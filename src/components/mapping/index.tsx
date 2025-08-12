import { memo, type FC } from 'react';
import type { IProduct } from '../../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  data?: IProduct[] | null;
}

const Mapping: FC<Props> = ({ title, data }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{title}</h2>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
          >
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/recipes/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h3
                className="text-lg font-semibold mb-1 truncate"
                title={item.name}
              >
                {item.name}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  ⭐ {item.rating}
                </span>
                {item.reviewCount !== undefined && (
                  <span>{item.reviewCount} reviews</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Mapping);
