import { LazyLoad } from "utils/Loadable";

const Chart = LazyLoad({
  cb: () => import("./index"),
});

export { Chart };
