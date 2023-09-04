import React from 'react';

const TruncateText = ({ text, maxWords,customCSS }) => {
  // Split the text into an array of words
  const words = text.split(' ');

  // Slice the array to get the first `maxWords` words
  const truncatedText = words.slice(0, maxWords).join(' ');

  return (
    <p className={`overflow-hidden whitespace-no-wrap ${customCSS} `}>
      {truncatedText} {words.length > maxWords && '...'}
    </p>
  );
};

export default TruncateText;
