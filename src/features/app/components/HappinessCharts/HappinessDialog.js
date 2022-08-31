import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ReactApexChart from 'react-apexcharts';

function HappinessDialog(props) {
    const { onClose, open } = props;
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('md');

    const handleClose = () => {
        onClose();
    };

    const extractPredictedHappiness = () => {
        if (props.simulation && props.simulation.calls) {
            let result = [];
            props.simulation.calls.forEach(function (call) {
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

    const extractActualHappiness = () => {
        if (props.simulation && props.simulation.calls) {
            let result = [];
            props.simulation.calls.forEach(function (call) {
                const arrivalTime = new Date(call.arrivalTime);
                let entry = {
                    x: arrivalTime.getHours() + ":" + (arrivalTime.getMinutes() < 10 ? 0 : "") + arrivalTime.getMinutes() + ":" + (arrivalTime.getSeconds() < 10 ? 0 : "") + arrivalTime.getSeconds(),
                    y: call.customer.isHappy ? 1 : -1
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
            name: 'Predicted Happiness',
            data: extractPredictedHappiness()
        },
        {
            name: 'Actual Happiness',
            data: extractActualHappiness()
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: ["#3474eb", "#edca02"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
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
        <Dialog key={"sharing-dialog"} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth={maxWidth} fullWidth={fullWidth}>
            <DialogTitle id="simple-dialog-title" key={"happiness-dialog-title"}>
                Predicted Results for Customer Happiness
            </DialogTitle>
            <DialogContent key={"happiness-dialog-content"}>
                <DialogContentText key={"happiness-dialog-content-text"}>
                    <ReactApexChart options={config.options} series={config.series} type="area" height={350} />
                </DialogContentText>
            </DialogContent>
            <DialogActions key={"happiness-dialog-actions"}>
                <Button key={"happiness-dialog-close-button"} onClick={handleClose} color="primary"><Box fontWeight="fontWeightBold">Close</Box></Button>
            </DialogActions>
        </Dialog>
    );
}

export default HappinessDialog;