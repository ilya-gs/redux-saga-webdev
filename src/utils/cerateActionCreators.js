export function createActionCreators(actions)
{
    const ret = {};
    for (const [key, value] of Object.entries(actions)){
        ret[key] = (payload = undefined) => {
            return {type: value, payload: payload}
        }
    }
    return ret;
}