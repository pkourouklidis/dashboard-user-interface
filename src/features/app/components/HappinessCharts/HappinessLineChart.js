import React  from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { getSimulation } from '../../selectors';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ReactApexChart from 'react-apexcharts';
import CardActionArea from '@material-ui/core/CardActionArea';
import HappinessDialog from './HappinessDialog';

const useStyles = makeStyles({
    root: {
        width: 485,
        height: 390,
        marginLeft: 15
    }
});

const HappinessLineChart = ({ simulation }) => {
    const [happyOpen, setHappyOpen] = React.useState(false);

    const handleHappyClickOpen = () => {
        if (simulation) { setHappyOpen(true); }
    };

    const handleHappyClose = () => {
        setHappyOpen(false);
    };

    const classes = useStyles();

    const extractPredictedHappiness = () => {
        if (simulation && simulation.calls) {
            let result = [];
            simulation.calls.forEach(function (call) {
                const arrivalTime = new Date(call.arrivalTime);
                let entry = {
                    x: arrivalTime.getHours() + ":" + (arrivalTime.getMinutes() < 10 ? 0 : "") + arrivalTime.getMinutes() + ":" + (arrivalTime.getSeconds() < 10 ? 0 : "") + arrivalTime.getSeconds(),
                    y: call.customer.isPredictedToBeHappy ? 1 : -1
                }
                result.push(entry);
            });
            return result;
        } else {
            return [];
        }
    }

    const config = {

        series: [{
            name: 'Prediction',
            data: extractPredictedHappiness()
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
            },

            title: {
                text: 'Predicted Customer Happiness',
                align: 'centre',
                style: {
                    fontSize: '14px'
                }
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                title: {
                    text: "Call Arrival Time",
                },
            },
            yaxis: {
                min: -1,
                max: 1,
                tickAmount: 2,
                floating: false,
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetY: -7,
                    offsetX: 0,
                    formatter: (value) => {
                        if (value == 1) {
                            return "happy";
                        } else if (value == -1) {
                            return "unhappy"
                        } else if (value == 0) {
                            return "neutral"
                        } else {
                            return "";
                        }
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
            },
            fill: {
                opacity: 0.5,
                type: "gradient"
            },
            tooltip: {
                x: {
                    format: "yyyy",
                },
                fixed: {
                    enabled: false,
                    position: 'topRight'
                }
            },
            grid: {
                yaxis: {
                    lines: {
                        offsetX: -30
                    },
                },
                padding: {
                    left: 20
                }
            },
        },


    };

    return (
        <Box>
            <Card className={classes.root}>
                <CardActionArea style={{ height: "100%" }} onClick={() => handleHappyClickOpen()}>
                    <CardContent>
                        <ReactApexChart options={config.options} series={config.series} type="area" height={350} />
                        <Typography className={classes.pos} color="textSecondary">
                            <br /><Box style={{ display: 'flex', justifyContent: 'center' }}>Customer Happiness</Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <HappinessDialog simulation={simulation} open={happyOpen} onClose={handleHappyClose} />
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(HappinessLineChart);