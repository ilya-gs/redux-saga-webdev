export function createActionCreators(actions)
{
    const ret = {};
    Object.keys(actions).forEach(action =>{
        ret[action] = (payload = undefined) => {
            return {type: action, payload: payload}
        }
    })
    return ret;
}