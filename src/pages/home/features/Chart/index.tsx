/* eslint-disable react-hooks/exhaustive-deps */
import { ChartComponent } from "components/ChartJS/loadabled";
import { ModalLayout } from "components/Modal/loadabled";
import { NoData } from "components/NoData/loadabled";

interface IProps {
  data: any;
  item: any;
  chartView: string;
  onCancel: Function;
  global: any;
}

function Chart(props: IProps) {
  const { data, chartView, onCancel, item, global } = props;
  const dataChart = [
    ...data.sort((a: any, b: any) => {
      return b[`${item.key}`] - a[`${item.key}`];
    }),
  ].slice(0, 4);

  const others = {
    Country: "Others",
    TotalConfirmed:
      global.TotalConfirmed -
      dataChart.reduce(
        (total: number, item: any) => total + item.TotalConfirmed,
        0
      ),
    TotalDeaths:
      global.TotalDeaths -
      dataChart.reduce(
        (total: number, item: any) => total + item.TotalDeaths,
        0
      ),
    TotalRecovered:
      global -
      dataChart.reduce(
        (total: number, item: any) => total + item.TotalRecovered,
        0
      ),
  };

  const backgrounds: any = [
    "#df0808",
    "#f2a354",
    "#f7cf6a",
    "#6dbebf",
    "#57a0e5",
    "#ed6d85",
  ];

  const renderContent = (item: any) => {
    return global[`${item.key}`] === 0 ? (
      <NoData />
    ) : (
      <ChartComponent
        chartData={[others, ...dataChart]}
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
