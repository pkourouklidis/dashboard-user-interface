import ReactApexChart from 'react-apexcharts';

const BarChart = (props) => {

    const config = {
        series: props.data,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            title: {
                text: props.title,
                align: 'center',
            },
            dataLabels: {
                enabled: false
            },
            colors: props.colors,
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                    borderRadius: 10,
                    dataLabels: {
                        orientation: "vertical"
                    },
                },
            },
            labels: props.labels,
            xaxis: {
                title: {
                    text: props.xtitle,
                },
            },
            yaxis: {
                show: props.showyaxis,
                title: {
                    text: props.ytitle,
                },
            },
            tooltip: {
                y: {
                    formatter: (value) => { return value + " s." },
                },
            }
        }
    }

    return (
        <ReactApexChart options={config.options} series={config.series} type="bar" />
    )
}

export default BarChart;