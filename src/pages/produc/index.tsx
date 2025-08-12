import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import type { IProduct } from '../../types';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useFetch<IProduct>(`/recipes/${id}`);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Ma'lumot yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-2xl shadow-lg max-h-[500px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {data.reviewCount || "Bu retsept haqida hozircha tavsif mavjud emas."}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            {data.rating || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
