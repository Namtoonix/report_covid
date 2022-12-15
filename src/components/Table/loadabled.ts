import { LazyLoad } from "utils/Loadable";

const TableLayout = LazyLoad({
  cb: () => import("./index"),
});

export { TableLayout };
