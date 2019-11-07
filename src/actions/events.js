export const EVENTS_FETCHED = 'EVENTS_FETCHED'

export function eventsFetched(events){
  return {
    type: EVENTS_FETCHED,
    payload: events
  }
}

export const EVENT_CREATED = 'EVENT_CREATED'

export function eventCreated(event){
  return {
    type: EVENT_CREATED,
    payload: event
  } 
}
