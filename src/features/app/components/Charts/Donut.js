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
                    startAngle: 0,
                    endAngle: 360,
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