const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('fetchData:', error);
    return null;
  }
};

export default fetchData;
