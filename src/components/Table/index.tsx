import { Table } from "antd";
import type { TablePaginationConfig } from "antd/es/table";

interface IProps {
  columns: Array<Record<string, any>>;
  params: Record<string, any>;
  data: Array<Record<string, any>>;
  onChange: Function;
  loading: boolean;
}

const TableLayout = (props: IProps) => {
  const { columns, data, onChange, params, loading } = props;
  const MyTable: any = Table;

  const handleTableChange = (pagination: TablePaginationConfig) => {
    onChange && onChange(pagination);
  };

  return (
    <MyTable
      columns={columns}
      rowKey={(record: any) => record.ID}
      dataSource={data}
      pagination={params}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default TableLayout;
