import { ReactElement } from 'react';

import { IUsers } from '../../Models/useFetch';

interface IPropPost {
  title: string;
  urlImage: string | undefined;
  textContent: string;
  users: IUsers | undefined;
}

const Posts = ({ title, urlImage = '', textContent, users }: IPropPost): ReactElement => (
  <article className="flex max-w-xl flex-col items-start justify-between  border-t border-gray-200">
    <div className="flex items-center gap-x-4 text-xs pt-10">
      <time dateTime="2020-03-16" className="text-gray-500">
        Mar 10, 2020
      </time>
      <a
        href="/"
        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      >
        {users?.company.name}
      </a>
    </div>

    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href="/">
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{textContent}</p>
    </div>

    <div className="relative mt-8 flex items-center gap-x-4">
      <img src={urlImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href="/">
            <span className="absolute inset-0" />
            {users?.name}
          </a>
        </p>
        <p className="text-gray-600">{users?.email}</p>
      </div>
    </div>
  </article>
);

export default Posts;
