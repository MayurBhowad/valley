import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getData } from '../actions/data.action';

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChart: false,
            data: null,
            RawData: null
        }
    }
    componentDidMount() {
        let cleanData = []
        let recievedData = getData();
        this.setState({ RawData: recievedData });
        recievedData.map(dept => {
            let deptObj = {}
            deptObj.name = dept["Department Name"];
            let percen = dept.Percentage.replace("%", "")
            deptObj.y = +percen;
            cleanData.push(deptObj);
        })
        this.setState({ data: cleanData });
    }

    render() {
        let RawData = this.state.RawData;
        const pieOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Department Wise Sales'
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',

                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },

                    showInLegend: true
                }
            },
            series: [{
                name: 'Percentage',
                colorByPoint: true,
                data: this.state.data
            }]
        }

        let table = (
            <table>
                <tr>
                    <th>Deparment</th>
                    <th>Percentage</th>
                    <th>Sales</th>
                </tr>
                {RawData !== null ? RawData.map(data => (
                    <tr>
                        <td>{data["Department Name"]}</td>
                        <td>{data.Percentage}</td>
                        <td>{data.Sales}</td>
                    </tr>
                )) : null}
            </table>
        )

        let chart = (
            <div>
                <HighchartsReact
                    className="pie-chart"
                    highcharts={Highcharts}
                    options={pieOptions}
                />
            </div>
        )

        return (
            <div>
                <div className="button-list">
                    <button
                        className="table-button"
                        onClick={() => { this.setState({ isChart: false }) }}
                    >Table</button>
                    <button
                        className="pie-button"
                        onClick={() => { this.setState({ isChart: true }) }}
                    >Pie Chart</button>
                </div>

                {this.state.isChart ? chart : table}

            </div>

        )
    }
}

export default Chart
