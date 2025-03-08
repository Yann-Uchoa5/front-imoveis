// src/utils/auth.js

export const getAuthUser = () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const [, payloadBase64] = token.split('.');

        const payloadJson = atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/'));
        const payload = JSON.parse(payloadJson);

        return {
            email: payload.sub,
            isAdmin: payload.is_admin,
            id: payload.id,
            exp: payload.exp
        };

    } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return null;
    }
};

export const isAdmin = () => {
    const user = getAuthUser();
    return user ? user.isAdmin : false;
};


export const isTokenValid = () => {
    const user = getAuthUser();
    if (!user) return false;
    return Date.now() < user.exp * 1000;
};