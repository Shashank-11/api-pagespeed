import React from "react";
import { Bar } from "react-chartjs-2";

const chart = {
  labels: ["URL1", "URL2", "URL3", "URL4", "URL5"],
  datasets: [
    {
      label: "Score",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,

      //this have to be the latest score per URL using
      // db.foo.find().sort({_id:1}); query against Mongo DB
      data: [65, 59, 80, 100, 56],
    },
  ],
};

export class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={chart}
          options={{
            title: {
              display: true,
              text: "Latest Application Scores",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
