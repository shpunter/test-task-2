import type { Props } from "./loading.typs";

const Loading = ({ children, isLoading }: Props) => {
  return isLoading ? <div> Loading...</div> : <>{children}</>;
};

export default Loading;
