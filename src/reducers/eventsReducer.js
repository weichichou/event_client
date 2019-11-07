import { EVENTS_FETCHED, EVENT_CREATED } from '../actions/events';

export default (state=null, action) => {
    switch (action.type){
        case EVENTS_FETCHED:
            return action.payload
        case EVENT_CREATED:
            return [...state,
                {...action.payload}]
                //為什麼要...action.payload？

        // when app starts, reducers also run. 
        // So we always need default case.
        
        // Also, all actions will pass to each reducer
        // So we need default case to handle the action that we (this reducer) doesn't care 
        default:
            return state
    }
}
