export const setUser = (user, token, expired) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('expired', `${expired}`)
}

export const getUser = () => {
    const userItem = localStorage.getItem('user')
    const user = userItem ? JSON.parse(userItem) : null

    const token = localStorage.getItem('token')
    const expiredItem = localStorage.getItem('expired')
    const expired = expiredItem ? Number(expiredItem) : 0

    return { user, token, expired }
}