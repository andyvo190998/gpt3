import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components/index';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={'What is GPT3'}
          text={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, reprehenderit sit maiores omnis molestiae, odit deleniti animi ipsum iste hic assumenda autem sapiente officiis tempore facilis praesentium sequi dolores accusantium eos officia! Aliquam rerum nostrum quidem voluptas adipisci, maiores excepturi commodi. Iure voluptate, temporibus quas recusandae cumque rem in eos!'
          }
        />
      </div>
      <div className="gpt3__whatgpt3-header">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={'Chatbots'}
          text={
            'lorem10asd asd adas dasd as dasd asdasdasdasdasd asd asd asd asdas asd as'
          }
        />
        <Feature
          title={'Knowledgebase'}
          text={
            'lorem10asd asd adas dasd as dasd asdasdasdasdasd asd asd asd asdas asd as'
          }
        />
        <Feature
          title={'Education'}
          text={
            'lorem10asd asd adas dasd as dasd asdasdasdasdasd asd asd asd asdas asd as'
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
