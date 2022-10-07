import { useState } from "react";

export const useLoader = () => {
  const [onLoad, setOnLoad] = useState(false);

  return [onLoad, setOnLoad];
};
