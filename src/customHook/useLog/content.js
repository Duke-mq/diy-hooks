import { createContext, useContext } from "react";
import { isNil } from "lodash-es";
const logContext = createContext({});

const useLogContext = () => {
  const ctx = useContext(logContext);
  if (isNil(ctx)) {
    throw Error("Error: ctx must be not nil");
  }
  return ctx;
};

export { logContext, useLogContext };
