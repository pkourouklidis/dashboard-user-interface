import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getSimulation } from '../../selectors';

const useStyles = makeStyles({
    topleft: {
        width: 150,
        marginLeft: 30,
        marginRight: 15
    },
    topright: {
        width: 150,
        marginLeft: 15,
        marginRight: 30
    },
    left: {
        width: 150,
        marginTop: 48,
        marginLeft: 30,
        marginRight: 15
    },
    right: {
        width: 150,
        marginTop: 48,
        marginLeft: 15,
        marginRight: 30
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

const OverviewCards = ({ simulation }) => {

    const classes = useStyles();

    let start;

    if (simulation && Object.keys(simulation).length != 0) start = new Date(simulation.startTime);

    return (
        <Box>
            <Box display="flex" flexDirection="row">
                
                <Card className={classes.topleft}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color="primary">
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{start ? start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear() : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>start date</Box>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.topright}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color="primary">
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{start ? start.getHours() + ":" + (start.getMinutes() < 10 ? 0 : "") + start.getMinutes() : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>start time</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box display="flex" flexDirection="row">
                <Card className={classes.left}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color="primary">
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulation && Object.keys(simulation).length != 0 ? simulation.totalCalls : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>total calls</Box>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.right}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={{color: "#00ff66"}}>
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulation && Object.keys(simulation).length != 0 ? simulation.resolvedCalls : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>resolved calls</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box display="flex" flexDirection="row">
                <Card className={classes.left}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={{color: "#ff6524"}}>
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulation && Object.keys(simulation).length != 0 ? simulation.unresolvedCalls : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>unresolved calls</Box>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.right}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={{color: "#ff424c"}}>
                            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{simulation && Object.keys(simulation).length != 0 ? simulation.bouncedCalls : "N/A"}</Box>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>bounced calls</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(OverviewCards);