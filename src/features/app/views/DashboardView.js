import React from 'react';
import Box from '@material-ui/core/Box';
import CallWaitTimeCard from '../components/WaitTimeCharts/CallWaitTimeCard';
import CallServiceTimeCard from '../components/WaitTimeCharts/CallServiceTimeCard';
import SimulationSelector from '../components/SimulationSelector/SimulationSelector';
import OverviewCards from '../components/OverviewCards/OverviewCards';
import BouncedCallsCard from '../components/BouncedCallsCard/BouncedCallsCard';
import OverviewRadialCards from '../components/OverviewRadialCards/OverviewRadialCards';
import CallBreakdownChart from '../components/CallBreakdownChart/CallBreakdownChart';
import HappinessLineChart from '../components/HappinessCharts/HappinessLineChart';


const DashboardView = () => {

    return (
        <Box display="flex" flexDirection="column" style={{flex: 1, alignSelf:'stretch', justifyContent:'center'}}>
            <SimulationSelector />
            <Box display="flex" flexDirection="row" style={{ marginTop: 15, marginRight: 15 }}>
                <CallWaitTimeCard />
                <OverviewCards />
                <CallServiceTimeCard />
            </Box>
            <Box display="flex" flexDirection="row" style={{ marginTop: 15, marginRight: 15 }}>
                <OverviewRadialCards />
                <BouncedCallsCard />
                <HappinessLineChart />
                <CallBreakdownChart />
            </Box>
        </Box>
    )
}

export default DashboardView;