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

const CallServiceTimeCard = ({ simulation} ) => {
    const classes = useStyles();

    const extractServiceTimes = () => {
        if (simulation && simulation.calls) {
            let result = [];
            simulation.calls.forEach(function (call) {
                const pickupTime = new Date(call.pickupTime);
                const closingTime = new Date(call.closingTime);
                const serviceTime = Math.round((closingTime.getTime() - pickupTime.getTime()) / 1000);
                result.push(call.isBounced ? 0 : serviceTime);
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
        name: "Service Time",
        data: extractServiceTimes()
    }

    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    <BarChart 
                        title="Call Service Times" 
                        xtitle="Call Arrival Time" 
                        ytitle="seconds" 
                        showyaxis={true}
                        data={[serviceTimeSeries]}
                        labels={extractArrivalTimes()}
                        colors={['#4e018c']}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(CallServiceTimeCard);