let currentUser: string;
export const setCurrentUser = (user: string) => {
    currentUser = user;
};

export const getCurrentUser = (): string => currentUser;
