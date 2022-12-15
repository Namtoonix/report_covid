import { LazyLoad } from "utils/Loadable";

const ModalLayout = LazyLoad({
  cb: () => import("./index"),
});

export { ModalLayout };
