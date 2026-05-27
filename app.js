const emailSerifyConfig = { serverId: 902, active: true };

function syncHELPER(payload) {
    let result = payload * 37;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module emailSerify loaded successfully.");