import { ReactElement, useEffect, useState } from 'react';

import { Buttons, Posts } from '../../Components';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Images/loading.gif';
import { IStateHome } from '../../Models/Home';

const Home = (): ReactElement => {
  const { data, isLoading, error, errorMessage } = useFetch();
  const [homeState, setHomeState] = useState<IStateHome>({
    page: 0,
    perPage: 3,
    allPosts: [],
    posts: [],
    totalPages: 0,
  });

  const randomNumber = () => Math.floor(Math.random() * 10);

  const loadMorePosts = () => {
    const { page, perPage, allPosts } = homeState;
    const nextPage = page + perPage;
    const nextPosts = allPosts?.slice(nextPage, nextPage + perPage);

    setHomeState((prevState: IStateHome) => ({
      ...prevState,
      posts: [...prevState.posts, ...nextPosts],
      page: nextPage,
    }));
  };

  const BackPosts = () => {
    const { posts, perPage, allPosts, page } = homeState;
    const prevPage = page - perPage;
    const prevPosts = allPosts?.slice(0, posts.length - perPage);

    setHomeState((prevState: IStateHome) => ({
      ...prevState,
      posts: prevPosts,
      page: prevPage,
    }));
  };

  useEffect(() => {
    if (!data) return;
    setHomeState((prevState: IStateHome) => ({
      ...prevState,
      allPosts: data?.posts,
      posts: data?.posts && data.posts.slice(0, 3),
      totalPages: Number((data?.posts.length / 3).toFixed()),
    }));
  }, [data]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is a simple model blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {isLoading && <img src={Loading} alt="Loading" />}
        {error && !isLoading ? (
          <h1>{errorMessage}</h1>
        ) : (
          <>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {homeState.posts?.map((post, index) => (
                <Posts
                  key={post.id}
                  title={post.title}
                  urlImage={data?.photos[index].thumbnailUrl}
                  textContent={post.body}
                  users={data?.users[randomNumber()]}
                />
              ))}
            </div>
            <div className="sm:ml-3 flex mt-20 justify-center gap-10">
              {homeState.page !== 0 && (
                <Buttons pageLimit={true} hadleClick={BackPosts} />
              )}
              {homeState.totalPages !== homeState.page && (
                <Buttons pageLimit={false} hadleClick={loadMorePosts} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
