import {
    LOAD_SIMULATION_STATUS_IN_PROGRESS,
    LOAD_SIMULATION_STATUS_SUCCESS,
    LOAD_SIMULATION_STATUS_FAILURE,
    LOAD_SIMULATION_LIST_IN_PROGRESS,
    LOAD_SIMULATION_LIST_SUCCESS,
    LOAD_SIMULATION_LIST_FAILURE,
    LOAD_SIMULATION_IN_PROGRESS,
    LOAD_SIMULATION_SUCCESS,
    LOAD_SIMULATION_FAILURE,
    LOAD_AIMODEL_STATUS_IN_PROGRESS,
    LOAD_AIMODEL_STATUS_SUCCESS,
    LOAD_AIMODEL_STATUS_FAILURE,
} from "./actions";

const initialSimulationStatusState = {
    simulationStatusLoading: false,
    simulationStatusLoadingFailed: false,
    simulationStatus: {}
}

export const simulationStatus = (state = initialSimulationStatusState, action) => {
    const { type, payload } = action;

    switch (type){
        case LOAD_SIMULATION_STATUS_IN_PROGRESS: {
            return {
                ...state,
                simulationStatusLoading: true,
                simulationStatusLoadingFailed: false
            };
        }
        case LOAD_SIMULATION_STATUS_SUCCESS: {
            return {
                ...state,
                simulationStatusLoading: false,
                simulationStatusLoadingFailed: false,
                simulationStatus: payload
            };
        }
        case LOAD_SIMULATION_STATUS_FAILURE: {
            return {
                ...state,
                simulationStatusLoading: false,
                simulationStatusLoadingFailed: true,
                simulationStatus: {}
            };
        }
        default: 
            return state;
    }
}

const initialSimulationListState = {
    simulationListLoading: false,
    simulationListLoadingFailed: false,
    simulationList: []
}

export const simulationList = (state = initialSimulationListState, action) => {
    const { type, payload } = action;

    switch (type){
        case LOAD_SIMULATION_LIST_IN_PROGRESS: {
            return {
                ...state,
                simulationListLoading: true,
                simulationListLoadingFailed: false
            };
        }
        case LOAD_SIMULATION_LIST_SUCCESS: {
            return {
                ...state,
                simulationListLoading: false,
                simulationListLoadingFailed: false,
                simulationList: payload
            };
        }
        case LOAD_SIMULATION_LIST_FAILURE: {
            return {
                ...state,
                simulationListLoading: false,
                simulationListLoadingFailed: true,
                simulationList: []
            };
        }
        default: 
            return state;
    }
}

const initialSimulationState = {
    simulationLoading: false,
    simulationLoadingFailed: false,
    simulation: {}
}

export const simulation = (state = initialSimulationState, action) => {
    const { type, payload } = action;

    switch (type){
        case LOAD_SIMULATION_IN_PROGRESS: {
            return {
                ...state,
                simulationLoading: true,
                simulationLoadingFailed: false
            };
        }
        case LOAD_SIMULATION_SUCCESS: {
            return {
                ...state,
                simulationLoading: false,
                simulationLoadingFailed: false,
                simulation: payload
            };
        }
        case LOAD_SIMULATION_FAILURE: {
            return {
                ...state,
                simulationLoading: false,
                simulationLoadingFailed: true,
                simulation: {}
            };
        }
        default: 
            return state;
    }
}

const initialAIModelStatusState = {
    aiModelStatusLoading: false,
    aiModelStatusLoadingFailed: false,
    status: {}
}

export const aiModelStatus = (state = initialAIModelStatusState, action) => {
    const { type, payload } = action;

    switch (type){
        case LOAD_AIMODEL_STATUS_IN_PROGRESS: {
            return {
                ...state,
                aiModelStatusLoading: true,
                aiModelStatusLoadingFailed: false
            };
        }
        case LOAD_AIMODEL_STATUS_SUCCESS: {
            return {
                ...state,
                aiModelStatusLoading: false,
                aiModelStatusLoadingFailed: false,
                status: payload
            };
        }
        case LOAD_AIMODEL_STATUS_FAILURE: {
            return {
                ...state,
                aiModelStatusLoading: false,
                aiModelStatusLoadingFailed: true,
                status: {}
            };
        }
        default: 
            return state;
    }
}