import "./chart.css";
import Bar from "./bar";

const chart = (props) => {
  const valueArray = props.datapoints.map(datapoint => datapoint.value) ;
  const totalMax = Math.max(...valueArray) ;
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Bar key={datapoint.label} value={datapoint.value} maxValue={totalMax} label={datapoint.label} />
      ))}
    </div>
  );
};

export default chart;
