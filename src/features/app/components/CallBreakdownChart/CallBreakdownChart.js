import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Donut from '../Charts/Donut';
import { getSimulation } from '../../selectors';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 230,
        height: 235,
        marginLeft: 15
    }
});

const CallDifficultyChart = ({ simulation }) => {
    const classes = useStyles();

    let resolvedCalls = 0;
    let unresolvedCalls = 0;
    let bouncedCalls = 0;

    if (simulation) {
        resolvedCalls = Math.round((simulation.resolvedCalls / simulation.totalCalls) * 100);
        unresolvedCalls = Math.round((simulation.unresolvedCalls / simulation.totalCalls) * 100);
        bouncedCalls = Math.round((simulation.bouncedCalls / simulation.totalCalls) * 100);
    }


    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    {simulation ? <Donut
                        colors={["#00ff66", "#ff6524", "#ff424c"]}
                        fractions={simulation ? [resolvedCalls, unresolvedCalls, bouncedCalls] : []}
                        labels={["Resolved", "Unresolved", "Bounced"]} />
                        :
                        <Donut
                            colors={["#dfdfdf"]}
                            fractions={[100]}
                            labels={["data to be loaded"]} />}
                    <Typography className={classes.pos} color="textSecondary">
                        <br /><Box style={{ display: 'flex', justifyContent: 'center' }}>Calls Breakdown</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(CallDifficultyChart);