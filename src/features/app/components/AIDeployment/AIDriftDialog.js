import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ReactApexChart from 'react-apexcharts';

function AIDriftDialog({onClose, open, aiData}) {
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('md');

    const handleClose = () => {
        onClose();
    };

    const extractDriftData = () => {
        let series = [];
        let results = {};

        aiData.forEach(function (execution) {
            if (results[execution.algorithm] === undefined){
                results[execution.algorithm] = []
            }
            results[execution.algorithm].push(execution.level);
            })

        for(const [key, value] of Object.entries(results)){
            series.push({"name": key, "data": value});
        }
        return series;
        }

        
    

    const extractExecutionTimeData = () => {
        let result = [];

        aiData.forEach(function (execution) {
            const arrivalTime = new Date(execution.timestamp);
            result.push(arrivalTime.getHours() + ":" + (arrivalTime.getMinutes() < 10 ? 0 : "") + arrivalTime.getMinutes() + ":" +  (arrivalTime.getSeconds() < 10 ? 0 : "") + arrivalTime.getSeconds());
        })

        return result;
    }

    const config = {

        series: extractDriftData(),
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
            labels: extractExecutionTimeData(),
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
            },
            yaxis: {
                min: 0,
                max: 5,
                tickAmount: 5,
                floating: false,
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetY: -7,
                    offsetX: 0,
                    formatter: (value) => {
                        if (value == 5) {
                            return "max";
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
        <Dialog key={"aihealth-dialog"} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth={maxWidth} fullWidth={fullWidth}>
            <DialogTitle id="simple-dialog-title" key={"aihealth-dialog-title"}>
                Drift Execution Results for Customer Happiness Predictor
            </DialogTitle>
            <DialogContent key={"aihealth-dialog-content"}>
                <DialogContentText key={"aihealth-dialog-content-text"}>
                    <ReactApexChart options={config.options} series={config.series} type="area" height={350} />
                </DialogContentText>
            </DialogContent>
            <DialogActions key={"aihealth-dialog-actions"}>
                <Button key={"aihealth-dialog-close-button"} onClick={handleClose} color="primary"><Box fontWeight="fontWeightBold">Close</Box></Button>
            </DialogActions>
        </Dialog>
    );
}

export default AIDriftDialog;