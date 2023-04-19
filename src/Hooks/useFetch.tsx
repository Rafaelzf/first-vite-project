import { useEffect, useState } from 'react';

import { ApiUrl } from '../Connections';
import { IResponse } from '../Models';

const useFetch = () => {
  const [response, setResponse] = useState<IResponse>({
    isLoading: false,
    data: null,
    error: false,
    errorMessage: undefined,
  });

  const fetchData = async () => {
    setResponse((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const getPosts = () => ApiUrl.get('posts');
      const getPhotos = () => ApiUrl.get('photos');
      const getUsers = () => ApiUrl.get('users');

      const [responsePosts, responsePhotos, responseUsers] = await Promise.all([
        getPosts(),
        getPhotos(),
        getUsers(),
      ]);
      const posts = await responsePosts.data;
      const photos = await responsePhotos.data;
      const users = await responseUsers.data;

      setResponse((prevState) => ({
        ...prevState,
        data: {
          posts,
          photos,
          users,
        },
        isLoading: false,
      }));
    } catch (error) {
      setResponse((prevState) => ({
        ...prevState,
        error: true,
        isLoading: false,
        errorMessage: 'Houve algum problema. 👎',
      }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...response };
};

export default useFetch;
