import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BarChart from '../Charts/BarChart';
import { getSimulation } from '../../selectors';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: 600,
        height: 390
    }
});

const BouncedCallsCard = ({ simulation} ) => {
    const classes = useStyles();

    const extractBouncedCalls = () => {
        if (simulation && simulation.calls) {
            let result = [];
            simulation.calls.forEach(function (call) {
                result.push(call.isBounced ? 1 : 0);
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

    const serviceTimeSeries = {
        name: "Bounced Calls",
        data: extractBouncedCalls()
    }

    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    <BarChart 
                        title="Bounced Calls" 
                        xtitle="Call Arrival Time"  
                        showyaxis={false}
                        data={[serviceTimeSeries]}
                        labels={extractArrivalTimes()}
                        colors={['#d14200']}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(BouncedCallsCard);