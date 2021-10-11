import React, { Component } from 'react';
import { Chart, registerables } from "chart.js";
import classes from "./LineGraph.module.css";

Chart.register(...registerables);

let myLineChart;

//--Chart Style Options--//
//Chart.defaults.global.defaultFontFamily = "`PT Sans`, sans-serif";
//Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        fill: false,
                        borderColor: "#1410f2"
                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: "#f21010"
                    }
                ]
            },
            options: {
                
            }
        });

    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}