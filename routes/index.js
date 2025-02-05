const userRoute = require('./user.route')
const express = require('express')

const router = express.Router()


const defaultRoutes =[
    {path:'/user', route: userRoute},
]

const routes = defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route)
})

module.exports = router;