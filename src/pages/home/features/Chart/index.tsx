/* eslint-disable react-hooks/exhaustive-deps */
import { ChartComponent } from "components/ChartJS/loadabled";
import { ModalLayout } from "components/Modal/loadabled";

interface IProps {
  data: any;
  item: any;
  chartView: string;
  onCancel: Function;
}

function Chart(props: IProps) {
  const { data, chartView, onCancel, item } = props;
  const dataChart = [
    ...data.sort((a: any, b: any) => {
      return b[`${item.key}`] - a[`${item.key}`];
    }),
  ];

  const backgrounds: any = [
    "#f2a354",
    "#f7cf6a",
    "#6dbebf",
    "#57a0e5",
    "#ed6d85",
  ];

  const renderContent = (item: any) => {
    return (
      <ChartComponent
        chartData={[
          dataChart[0],
          dataChart[1],
          dataChart[2],
          dataChart[3],
          dataChart[4],
        ]}
        backgrounds={backgrounds}
        label={item.key}
      />
    );
  };

  return (
    item.id && (
      <ModalLayout
        title={item?.label || ""}
        content={renderContent(item)}
        isModalOpen={chartView !== ""}
        onCancel={onCancel}
      />
    )
  );
}

export default Chart;
