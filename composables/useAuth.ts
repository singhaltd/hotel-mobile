export const signInUser = async (User) => {
    // const logins = useCookie<number>('logins')
    const credentials = $fetch("http://127.0.0.1:4444/signinAPi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: User.value,
    })
    return credentials;
};

export const logoutUser = async () => {
    const userCookie = useCookie("autKey");
    const credentials = $fetch("/api/signout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (credentials) {
        userCookie.value = null
    }
}