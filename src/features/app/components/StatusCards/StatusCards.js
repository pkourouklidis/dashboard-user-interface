import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getAIModelStatus, getSimulationStatus } from '../../selectors';
// import AIDriftDialog from '../AIDeployment/AIDriftDialog';

const useStyles = makeStyles({
    root: {
        width: 150,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    }
});

const StatusCards = ({ simulationStatus, aiModelStatus }) => {
    const [status, setStatus] = React.useState("unknown");
    // const [aiHealthOpen, setAiHealthOpen] = React.useState(false);

    // const handleAiHealthClickOpen = () => {
    //     setAiHealthOpen(true);
    // };

    // const handleAiHealthClose = () => {
    //     setAiHealthOpen(false);
    // };

    const classes = useStyles();

    useEffect(() => {
        if (simulationStatus && simulationStatus.status) setStatus(simulationStatus.status);
    }, [simulationStatus]);

    let start;

    if (simulationStatus) start = new Date(simulationStatus.simulationStartTime);

    // const aiStatus = {
    //     "id": "some_deployment_id",
    //     "modelid": "ai model id for the deployment",
    //     "displayName": "Some readable display name",
    //     "status": "running",
    //     "healthy": false,
    //     "observations": [
    //         {
    //             "type": "drift",
    //             "executions": [
    //                 "algorithmsexec1",
    //                 "algorithmsexec2"
    //             ]
    //         }
    //     ],
    //     "data": {
    //         "id": "some_model_id",
    //         "upperBound": 5,
    //         "lowerBound": 0,
    //         "algorithmExecutions": [
    //             {
    //                 "algorithm": "Kolmogorov-Smirnoff",
    //                 "observations": [
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:00Z",
    //                         "rawValue": 320,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:10Z",
    //                         "rawValue": 412,
    //                         "discretisedValue": 2,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:20Z",
    //                         "rawValue": 322,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:30Z",
    //                         "rawValue": 500,
    //                         "discretisedValue": 3,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:40Z",
    //                         "rawValue": 435,
    //                         "discretisedValue": 2,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:50Z",
    //                         "rawValue": 322,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:01:00Z",
    //                         "rawValue": 412,
    //                         "discretisedValue": 2,
    //                         "unacceptableDrift": false
    //                     },
    //                 ]
    //             },
    //             {
    //                 "algorithm": "Some-Other-Drift-Detector",
    //                 "observations": [
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:00Z",
    //                         "rawValue": 412,
    //                         "discretisedValue": 2,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:10Z",
    //                         "rawValue": 412,
    //                         "discretisedValue": 2,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:20Z",
    //                         "rawValue": 600,
    //                         "discretisedValue": 4,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:30Z",
    //                         "rawValue": 500,
    //                         "discretisedValue": 3,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:40Z",
    //                         "rawValue": 200,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:00:50Z",
    //                         "rawValue": 322,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                     {
    //                         "timeStamp": "2022-03-01T09:01:00Z",
    //                         "rawValue": 123,
    //                         "discretisedValue": 1,
    //                         "unacceptableDrift": false
    //                     },
    //                 ]
    //             }
    //         ]
    //     }
    // };

    const aiStatusCard = (aiModelStatus != undefined && Object.keys(aiModelStatus).length != 0) ? <Box>
                            <Card className={classes.root}>
                                <CardActionArea style={{ height: "100%" }} 
                                // onClick={() => handleAiHealthClickOpen()}
                                >
                                    <CardContent>
                                        {
                                            aiModelStatus.healthy ?
                                                <Typography variant="h6" component="h2" style={{ color: "#00ff66" }}>
                                                    <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>Healthy</Box>
                                                </Typography>
                                                :
                                                <Typography variant="h6" component="h2" style={{ color: "#ff424c" }}>
                                                    <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>Unhealthy</Box>
                                                </Typography>
                                        }

                                        <Typography className={classes.pos} color="textSecondary">
                                            <Box style={{ display: 'flex', justifyContent: 'center' }}>predictor status</Box>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* <AIDriftDialog open={aiHealthOpen} data={aiModelStatus.data} onClose={() => handleAiHealthClose()} /> */}
                        </Box>
                        : "";

    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6" component="h2" color="primary">
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{status.charAt(0).toUpperCase() + status.slice(1)}</Box>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>current status</Box>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary">
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulationStatus && simulationStatus.queueDepth && status != "stopped" ? simulationStatus.queueDepth : "N/A"}</Box>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>calls in queue</Box>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary">
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulationStatus && simulationStatus.activeWorkers ? simulationStatus.activeWorkers : "N/A"}</Box>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>active workers</Box>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary">
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{start && (status == "running" || status == "paused") ? start.getHours() + ":" + (start.getMinutes() < 10 ? 0 : "") + start.getMinutes() : "N/A"}</Box>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>start time</Box>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary">
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{start && (status == "running" || status == "paused") ? start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear() : "N/A"}</Box>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>start date</Box>
                    </Typography>
                </CardContent>
            </Card>
            {aiStatusCard};
        </Box>
    )
}

const mapStateToProps = state => ({
    simulationStatus: getSimulationStatus(state),
    aiModelStatus: getAIModelStatus(state)
});

export default connect(mapStateToProps)(StatusCards);