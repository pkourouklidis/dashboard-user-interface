import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SemiDonut from '../Charts/SemiDonut';
import { getSimulation } from '../../selectors';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 230,
        height: 150,
        marginRight: 15
    }
});

const HappinessDonutChart = ({ simulation }) => {
    const classes = useStyles();

    return (
        <Box>
            <Card className={classes.root}>
                <CardContent>
                    { simulation ? <SemiDonut 
                                        colors={["#00ff66", "#ff424c"]} 
                                        fractions={simulation ? [(simulation.averagePredictedHappiness) * 100, (1-simulation.averagePredictedHappiness) * 100] : []} 
                                        labels={["Easy", "Hard"]} /> 
                                        : 
                                        <SemiDonut 
                                        colors={["#dfdfdf"]} 
                                        fractions={[100]} 
                                        labels={["data to be loaded"]} /> }
                    <Typography className={classes.pos} color="textSecondary">
                        <br/><Box style={{ display: 'flex', justifyContent: 'center' }}>Overall Customer Happiness</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => ({
    simulation: getSimulation(state)
});

export default connect(mapStateToProps)(HappinessDonutChart);