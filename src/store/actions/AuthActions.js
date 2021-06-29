
export const login = () => {
return {
    type : 'LOGIN'
}
    
}
export const logout = () => {
return {
    type : 'LOGOUT'
}
    
}
export const getRoute = (route) => {
return {
    type : 'ROUTE',
    payload : route
}
    
}

