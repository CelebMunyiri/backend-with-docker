const userRoute = require('./user.route')


const defaultRoutes =[
    {path:'/user', route: userRoute},
]

const routes = defaultRoutes.forEach((route)=>{
    app.use(route.path, route.route)
})

module.exports = routes;