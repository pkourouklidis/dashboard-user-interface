import ReactApexChart from 'react-apexcharts'

const SemiDonut = (props) => {

    const config = {

        series: props.fractions,
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 10
                }
            },
            legend: {
                show: false
            },
            labels: props.labels,
            colors: props.colors,
            dataLabels: {
                enabled: false
            },
            grid: {
                padding: {
                    bottom: -80
                }
            },
            tooltip: {
                y: {
                    formatter: (value) => { return value + "%" },
                },
            }
        },


    };

    return (
        <ReactApexChart options={config.options} series={config.series} type="donut" />
    )
}

export default SemiDonut;