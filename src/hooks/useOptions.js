import { useState } from 'react';

export const useOptions = () => {
  const [options, setOptions] = useState({
    home: true,
    aboutUs: true,
    jobs: true,
    successStories: true,
    contact: true
  });

  const handleOptionChange = (newOptions) => {
    setOptions(newOptions);
  };

  return [options, handleOptionChange];
};
