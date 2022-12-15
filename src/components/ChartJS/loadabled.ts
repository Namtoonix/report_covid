import { LazyLoad } from "utils/Loadable";

const ChartComponent = LazyLoad({
  cb: () => import("./index"),
});

export { ChartComponent };
