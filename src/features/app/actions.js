export const LOAD_SIMULATION_STATUS_IN_PROGRESS = 'LOAD_SIMULATION_STATUS_IN_PROGRESS';
export const loadSimulationStatusInProgress = () => ({
    type: LOAD_SIMULATION_STATUS_IN_PROGRESS,
});

export const LOAD_SIMULATION_STATUS_SUCCESS = 'LOAD_SIMULATION_STATUS_SUCCESS';
export const loadSimulationStatusSuccess = simulationStatus => ({
    type: LOAD_SIMULATION_STATUS_SUCCESS,
    payload: simulationStatus,
});

export const LOAD_SIMULATION_STATUS_FAILURE = 'LOAD_SIMULATION_STATUS_FAILURE';
export const loadSimulationStatusFailure = () => ({
    type: LOAD_SIMULATION_STATUS_FAILURE,
});

export const LOAD_SIMULATION_LIST_IN_PROGRESS = 'LOAD_SIMULATION_LIST_IN_PROGRESS';
export const loadSimulationListInProgress = () => ({
    type: LOAD_SIMULATION_LIST_IN_PROGRESS,
});

export const LOAD_SIMULATION_LIST_SUCCESS = 'LOAD_SIMULATION_LIST_SUCCESS';
export const loadSimulationListSuccess = simulationList => ({
    type: LOAD_SIMULATION_LIST_SUCCESS,
    payload: simulationList,
});

export const LOAD_SIMULATION_LIST_FAILURE = 'LOAD_SIMULATION_LIST_FAILURE';
export const loadSimulationListFailure = () => ({
    type: LOAD_SIMULATION_LIST_FAILURE,
});

export const LOAD_SIMULATION_IN_PROGRESS = 'LOAD_SIMULATION_IN_PROGRESS';
export const loadSimulationInProgress = () => ({
    type: LOAD_SIMULATION_IN_PROGRESS,
});

export const LOAD_SIMULATION_SUCCESS = 'LOAD_SIMULATION_SUCCESS';
export const loadSimulationSuccess = simulation => ({
    type: LOAD_SIMULATION_SUCCESS,
    payload: simulation,
});

export const LOAD_SIMULATION_FAILURE = 'LOAD_SIMULATION_FAILURE';
export const loadSimulationFailure = () => ({
    type: LOAD_SIMULATION_FAILURE,
});

export const LOAD_AIMODEL_STATUS_IN_PROGRESS = 'LOAD_AIMODEL_STATUS_IN_PROGRESS';
export const loadAIModelStatusInProgress = () => ({
    type: LOAD_AIMODEL_STATUS_IN_PROGRESS,
});

export const LOAD_AIMODEL_STATUS_SUCCESS = 'LOAD_AIMODEL_STATUS_SUCCESS';
export const loadAIModelStatusSuccess = status => ({
    type: LOAD_AIMODEL_STATUS_SUCCESS,
    payload: status,
});

export const LOAD_AIMODEL_STATUS_FAILURE = 'LOAD_AIMODEL_STATUS_FAILURE';
export const loadAIModelStatusFailure = () => ({
    type: LOAD_AIMODEL_STATUS_FAILURE,
});