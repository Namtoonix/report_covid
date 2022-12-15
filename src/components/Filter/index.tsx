import { Select } from "antd";

interface IProps {
  options: Array<Record<string, any>>;
  value: string;
  onChange: Function;
}

const Filter = (props: IProps) => {
  const { options, value, onChange } = props;

  const handleChangeSort = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <Select
      defaultValue={value}
      onChange={handleChangeSort}
      options={options}
    />
  );
};

export default Filter;
