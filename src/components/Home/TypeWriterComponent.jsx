import React from 'react';
import {Typewriter} from 'react-typewriter-effect';

function TypewriterComponent() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello, World!")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Welcome to React!")
          .start();
      }}
    />
  );
}

export default TypewriterComponent;
