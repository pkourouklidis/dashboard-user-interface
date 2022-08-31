export const fetchSimulationStatus = async (gatewayURL, authContext) => {
    const simulationURL = `${gatewayURL}/status`;
    const token = await authContext.issueAccessToken();
    const simulationResponse = await fetch(simulationURL, {
        method: 'GET',
            headers: {
                'Authorization': token
            }
    });
    if (simulationResponse.status > 199 && simulationResponse.status < 300) {
        const simulationJson = await simulationResponse.json();
        return simulationJson;   
    } else {
        return {};
    }
}

export const fetchSimulationList = async (gatewayURL, authContext) => {
    const simulationURL = `${gatewayURL}/simulation`;
    const token = await authContext.issueAccessToken();
    const simulationResponse = await fetch(simulationURL, {
        method: 'GET',
            headers: {
                'Authorization': token
            }
    });
    if (simulationResponse.status > 199 && simulationResponse.status < 300) {
        const simulationJson = await simulationResponse.json();
        return simulationJson;   
    } else {
        return [];
    }
}

export const fetchSimulation = async (gatewayURL, id, count, authContext) => {
    const countParam = count == "All" ? "" : "?count=" + count;
    const simulationURL = `${gatewayURL}/simulation/${id}` + countParam;
    const token = await authContext.issueAccessToken();
    const simulationResponse = await fetch(simulationURL, {
        method: 'GET',
            headers: {
                'Authorization': token
            }
    });
    if (simulationResponse.status > 199 && simulationResponse.status < 300) {
        const simulationJson = await simulationResponse.json();
        return simulationJson;   
    } else {
        return {};
    }
}

export const fetchAIModelStatus = async (gatewayURL, authContext) => {
    const aiModelStatusURL = `${gatewayURL}/aideployment/status`;
    const token = await authContext.issueAccessToken();
    const statusResponse = await fetch(aiModelStatusURL, {
        method: 'GET',
            headers: {
                'Authorization': token
            }
    });
    if (statusResponse.status > 199 && statusResponse.status < 300) {
        const statusJson = await statusResponse.json();
        return statusJson;   
    } else {
        return {};
    }
}