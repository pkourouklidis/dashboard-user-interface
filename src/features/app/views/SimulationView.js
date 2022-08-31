import React, { useEffect, useContext } from 'react';
import StatusCards from '../components/StatusCards/StatusCards'
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { AuthenticationContext } from '@BETALAB/betalab-react-auth';
import { loadSimulationStatus, loadSimulationList, loadAIModelStatus } from '../thunks';
import DashboardView from '../views/DashboardView';


const SimulationView = ({ startLoadingSimulationStatus, startLoadingSimulationList, startLoadingAIModelStatus }) => {

    const auth = useContext(AuthenticationContext);

    useEffect(() => { 
        startLoadingSimulationStatus(auth);
        startLoadingSimulationList(auth);
        setInterval(() => {
            startLoadingSimulationStatus(auth);
            startLoadingSimulationList(auth);
            startLoadingAIModelStatus(auth);
        }, 5000); 
    }, []);

    return (
        <Box display="flex" flexDirection="row" style={{alignSelf:'stretch'}}>
            <StatusCards />
            <DashboardView />
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    startLoadingSimulationStatus: (authContext) => dispatch(loadSimulationStatus(authContext)),
    startLoadingSimulationList: (authContext) => dispatch(loadSimulationList(authContext)),
    startLoadingAIModelStatus: (authContext) => dispatch(loadAIModelStatus(authContext)),
})

export default connect(null, mapDispatchToProps)(SimulationView);