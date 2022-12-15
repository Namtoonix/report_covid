import { Modal } from "antd";

interface IProps {
  title?: string;
  content: any;
  isModalOpen: boolean;
  onOk?: Function;
  onCancel?: Function;
}

const ModalLayout = (props: IProps) => {
  const { title, content, isModalOpen, onOk, onCancel } = props;
  const MyModal: any = Modal;

  return (
    <MyModal
      title={title}
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={[]}
    >
      {content}
    </MyModal>
  );
};

ModalLayout.defaultProps = {
  title: "",
  onOk: () => {},
  onCancel: () => {},
};

export default ModalLayout;
