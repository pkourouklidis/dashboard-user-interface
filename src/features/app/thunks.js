import {
    fetchSimulationStatus,
    fetchSimulationList,
    fetchSimulation,
    fetchAIModelStatus
} from './api';

import {
    loadSimulationStatusInProgress,
    loadSimulationStatusSuccess,
    loadSimulationStatusFailure,
    loadSimulationListInProgress,
    loadSimulationListSuccess,
    loadSimulationListFailure,
    loadSimulationInProgress,
    loadSimulationSuccess,
    loadSimulationFailure,
    loadAIModelStatusInProgress,
    loadAIModelStatusSuccess,
    loadAIModelStatusFailure,
} from './actions';

export const loadSimulationStatus = (authContext) => async (dispatch) => {
    try {
        dispatch(loadSimulationStatusInProgress());
        const simulationStatus = await fetchSimulationStatus(process.env.REACT_APP_GATEWAY_URL, authContext);
        dispatch(loadSimulationStatusSuccess(simulationStatus));
    } catch (e) {
        dispatch(loadSimulationStatusFailure());
    }    
}

export const loadSimulationList = (authContext) => async (dispatch) => {
    try {
        dispatch(loadSimulationListInProgress());
        const simulationList = await fetchSimulationList(process.env.REACT_APP_GATEWAY_URL, authContext);
        dispatch(loadSimulationListSuccess(simulationList));
    } catch (e) {
        dispatch(loadSimulationListFailure());
    }    
}

export const loadSimulation = (id, count, authContext) => async (dispatch) => {
    try {
        dispatch(loadSimulationInProgress());
        const simulation = await fetchSimulation(process.env.REACT_APP_GATEWAY_URL, id, count, authContext);
        dispatch(loadSimulationSuccess(simulation));
    } catch (e) {
        dispatch(loadSimulationFailure());
    }    
}

export const loadAIModelStatus = (authContext) => async (dispatch) => {
    try {
        dispatch(loadAIModelStatusInProgress());
        const aiModelStatus = await fetchAIModelStatus(process.env.REACT_APP_GATEWAY_URL, authContext);
        dispatch(loadAIModelStatusSuccess(aiModelStatus));
    } catch (e) {
        dispatch(loadAIModelStatusFailure());
    }    
}