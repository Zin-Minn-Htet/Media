export const addUser = (payload) => {
   return {
    type: "addUser",
    payload : payload
   }
}
export const removeUser = (payload) => {
   return {
    type: "removeUser",
    payload : payload
   }
}

const action = {
    addUser, removeUser
}

export default action;