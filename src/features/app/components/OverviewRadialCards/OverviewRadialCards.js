import React from 'react';
import Box from '@material-ui/core/Box';
import CallDifficultyChart from '../CallDifficultyChart/CallDifficultyChart';
import HappinessDonutChart from '../HappinessCharts/HappinessDonutChart';


const OverviewCards = () => {

    return (
        <Box>
            <CallDifficultyChart />
            <HappinessDonutChart />
        </Box>
    )
}

export default OverviewCards;