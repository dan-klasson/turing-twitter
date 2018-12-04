export const loadState = (stateType, defaultValue=null) => {
  try {
    const serializedState = localStorage.getItem(stateType)
    if(serializedState === null) {
      return defaultValue
    }
    return JSON.parse(serializedState)
  } catch(error) {
    return defaultValue
  }
}

export const setState = (stateType, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateType, serializedState)
  } catch(error) {
    //ignore
  }
}