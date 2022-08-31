import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BarChart from '../Charts/BarChart';
import { connect } from 'react-redux';
import { getSimulation } from '../../selectors';

const useStyles = makeStyles({
    root: {
        width: 600,
        height: 390
    }
});

const CallWaitTimeCard = ({ simulation }) => {
    const classes = useStyles();

    const extractWaitTimes = () => {
        if (simulation && simulation.calls) {
            let result = [];
            simulation.calls.forEach(function (call) {
                const arrivalTime = new Date(call.arrivalTime);
                const pickupTime = new Date(call.pickupTime);
                const waitTime = Math.round((pickupTime.getTime() - arrivalTime.getTime()) / 1000);
                result.push(waitTime);
            });
            return result;
        } else {
            return [];
        }
    }

    const extractArrivalTimes = () => {
        if (simulation && simulation.calls) {
            let result = [];
            simulation.calls.forEach(function (call) {
                const arrivalTime = new Date(call.arrivalTime);
                result.push(arrivalTime.getHours() + ":" + (arrivalTime.getMinutes() < 10 ? 0 : "") + arrivalTime.getMinutes() + ":" +  (arrivalTime.getSeconds() < 10 ? 0 : "") + arrivalTime.getSeconds());
            });
            return result;
        } else {
            return [];
        }
    }

    const waitTimeSeries = {
        name: "Wait Time",
        data: extractWaitTimes()
    }

    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    <BarChart
                        title="Call Wait Times"
                        xtitle="Call Arrival Time"
                        ytitle="seconds"
                        showyaxis={true}
                        data={[waitTimeSeries]}
                        labels={extractArrivalTimes()}
                        colors={['#d19900']}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(CallWaitTimeCard);