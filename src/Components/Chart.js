import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "X Mahsulotlar",
          data: [40, 60, 20, 70, 90, 87, 24, 68, 23, 67, 123, 86],
        },
      ],
      options: {
        chart: {
          height: 650,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          style: {
            colors: ["#0000ff"],
          },
          enabled: true,
        },
        stroke: {
          curve: "straight",
          colors:['#ff0000']
        },
        title: {
          text: "X Kompaniyaning yillik hisoboti",
          align: "center",
          style: {
            fontSize:  '32px',
            fontWeight:  'normal',
            fontFamily:  'monospace',
            color:  'gray'
          },
        },
        fill: {
          colors: ["#fff"],
        },
        grid: {
          row: {
            colors:['#f3f3f3', 'transparent'],
          },
        },
        xaxis: {
          categories: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={650}
        />
      </div>
    );
  }
}
