export interface IProduct {
  id: number;
  name: string;
  rating: number;              
  image: string;           
  reviewCount?: number;    

}


export interface IResponce{
  recipes: IProduct[];
  limit: number;
  skip: number;
  total: number;
}