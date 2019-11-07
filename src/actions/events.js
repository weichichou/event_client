export const EVENTS_FETCHED = 'EVENTS_FETCHED'

export function eventsFetched(events){
  return {
    type: EVENTS_FETCHED,
    payload: events
  }
}
