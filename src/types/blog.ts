export interface Blog {
  id: number;
  slug: string
  category: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  userId: number;
  createdAt: Date; 
  updatedAt: Date; 

}
