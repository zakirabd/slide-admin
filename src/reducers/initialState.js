const initialState = {
    collapse: false,
    login: {
        username: '',
        password: '',
    },
    loginResp: '',
    logOutRedirect: false,
    presentations: [],
    slides: [],
    visibileEdit: false,
    edit: {
        type: '',
        image: '',
        base64: '',
        text: '',
        id: ''
    },
    links: [],
    socials: {
        id: '',
        instagram: '',
        facebook: '',
        email: '',
        whatsapp: ''
    },
    wisibleInsta: true,
    wisibleFb: true,
    wisibleEmail: true,
    wisibleWp: true,
    newOrders: [],
    waitingOrder: [],
    preparedOrders: [],
    removeOrders: [],
    newOrdersTotal: [],
    waitingOrdersTotal: [],
    preparedOrdersTotal: [],
    removingOrdersTotal: [],
    visibileAddUser: false,
    editUser: {
        id: '',
        fullname: '',
        username: '',
        password: '',
        duty: 'Admin'
    },
    users: [],
    removeUser: false
}
export default initialState;