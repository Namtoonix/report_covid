import { LazyLoad } from "utils/Loadable";

const Filter = LazyLoad({
  cb: () => import("./index"),
});

export { Filter };
