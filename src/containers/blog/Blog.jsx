import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './importImg';

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          enim.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date={'November 17, 2023'}
            title={'AI is the future. Let us explore how it is'}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date={'November 17, 2023'}
            title={'AI is the future. Let us explore how it is'}
          />
          <Article
            imgUrl={blog03}
            date={'November 17, 2023'}
            title={'AI is the future. Let us explore how it is'}
          />
          <Article
            imgUrl={blog04}
            date={'November 17, 2023'}
            title={'AI is the future. Let us explore how it is'}
          />
          <Article
            imgUrl={blog05}
            date={'November 17, 2023'}
            title={'AI is the future. Let us explore how it is'}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
