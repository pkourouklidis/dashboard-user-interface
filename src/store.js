import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { messages } from './features/kleio/reducers';
import { simulationStatus, simulationList, simulation, aiModelStatus } from './features/app/reducers';

const reducers = {
    messages,
    simulationStatus,
    simulationList,
    simulation,
    aiModelStatus
};

const rootReducer = combineReducers(reducers);

const initialState = {
    messages: { successMessage: "", failureMessage: "", warningMessage: "", infoMessage: "" },
    simulationStatus: {},
    simulationList: {},
    simulation: {},
    aiModelStatus: {}
}

export const configureStore = () => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));