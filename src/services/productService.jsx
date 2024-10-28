const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchJewelry = async () => {
  const response = await fetch(`${BASE_URL}/category/jewelery`);
  const data = await response.json();
  return data;
};

export const fetchElectronics = async () => {
  const response = await fetch(`${BASE_URL}/category/electronics`);
  const data = await response.json();
  return data;
};

export const fetchAllProducts = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
