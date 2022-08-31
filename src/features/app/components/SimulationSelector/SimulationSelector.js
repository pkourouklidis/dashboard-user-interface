import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getSimulationList, getSimulationStatus } from '../../selectors';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import { AuthenticationContext } from '@BETALAB/betalab-react-auth';
import { loadSimulation } from '../../thunks';

const SimulationSelector = ({ simulationList, simulationStatus, startLoadingSimulation }) => {
    const [options, setOptions] = React.useState([{ simulationStartTime: "Current Data", simulationId: "current" }]);
    const [selectedId, setSelectedId] = React.useState({ simulationStartTime: "Current Data", simulationId: "current" });
    const [selectedCount, setSelectedCount] = React.useState("10");
    const [refreshId, setRefreshId] = React.useState("");

    const auth = useContext(AuthenticationContext);

    useEffect(() => {
        if (simulationList)
            setOptions([{ simulationStartTime: "Current Data", simulationId: "current" }].concat([...simulationList].sort((x, y) => {
                return new Date(x.simulationStartTime) < new Date(y.simulationStartTime) ? 1 : -1
            })));
    }, [simulationList]);

    const countOptions = ["5", "10", "25", "50", "100", "All"];

    const datePrinter = (timeStampString) => {
        if (timeStampString == "Current Data") return timeStampString;
        let timeStamp = new Date(timeStampString);
        return timeStamp.getDate() + "-" + (timeStamp.getMonth() + 1) + "-" + timeStamp.getFullYear() + "  (" + timeStamp.getHours() + ":" + (timeStamp.getMinutes() < 10 ? 0 : "") + timeStamp.getMinutes() + ")";
    }

    const onCountChange = (values) => {
        setSelectedCount(values);
        updateSimulationData(selectedId.simulationId, values);
    }

    const onSimulationChange = (values) => {
        setSelectedId(values);
        updateSimulationData(values.simulationId, selectedCount);
    }

    const updateSimulationData = (simulationId, count) => {
        if (refreshId != undefined && refreshId != "") {
            clearInterval(refreshId);
            setRefreshId("");
        }
        const retrievalId = simulationId == "current" ? simulationStatus.simulationId : simulationId;
        startLoadingSimulation(retrievalId, count, auth);
        if (simulationId == "current") {
            setRefreshId(setInterval(() => {
                if (simulationStatus.status == "running") {
                    startLoadingSimulation(retrievalId, count, auth);
                }
            }, 5000));
        }
    }

    return (
        <Box display="flex" flexDirection="row" style={{ marginTop: 15, marginRight: 15 }}>
            <Autocomplete
                id="simulation-combo-box"
                options={options}
                getOptionLabel={(option) => datePrinter(option.simulationStartTime)}
                style={{ width: 300, marginRight: 15 }}
                renderInput={(params) => <TextField {...params} label="Call Centre Data Set" variant="outlined" />}
                onChange={(e, v) => onSimulationChange(v)}
            />
            <Autocomplete
                id="count-combo-box"
                options={countOptions}
                getOptionLabel={(option) => option}
                style={{ width: 125, marginRight: 15 }}
                defaultValue={countOptions[1]}
                renderInput={(params) => <TextField {...params} label="No. Records" variant="outlined" />}
                onChange={(e, v) => onCountChange(v)}
            />
            <IconButton color="primary" aria-label="menu" onClick={() => updateSimulationData(selectedId.simulationId, selectedCount)}>
                <RefreshIcon fontSize="large" />
            </IconButton>
        </Box>
    )
}

const mapStateToProps = state => ({
    simulationList: getSimulationList(state),
    simulationStatus: getSimulationStatus(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingSimulation: (id, count, authContext) => dispatch(loadSimulation(id, count, authContext))
})

export default connect(mapStateToProps, mapDispatchToProps)(SimulationSelector);