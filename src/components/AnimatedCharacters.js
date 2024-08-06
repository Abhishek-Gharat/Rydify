import React from 'react';
import { motion } from 'framer-motion';

// Word wrapper
const Wrapper = (props) => {
  return <span style={{ display: 'inline' }}>{props.children}</span>;
};

// Map API "type" values to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2'
};

// AnimatedCharacters
const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: '200%',
      color: '#0055FF',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: '#FF0088',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  const splitWords = props.text.split(' ');
  const words = splitWords.map(word => word.split('').concat('\u00A0'));

  const Tag = tagMap[props.type];

  return (
    <Tag style={{ display: 'inline' }}>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.map((element, index) => (
            <span
              style={{ overflow: 'hidden', display: 'inline-block' }}
              key={index}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                variants={item}
                initial="hidden"
                animate="visible"
              >
                {element}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

export default AnimatedCharacters;
