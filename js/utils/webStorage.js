export const isLogin = () => {
    return !!localStorage.getItem('access-token');
}

export const deleteAccessToken = () => {
    if(isLogin) localStorage.removeItem('access-token');
    return true;
}