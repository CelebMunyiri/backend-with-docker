const userRoute = require('./user.route')
const professionRoute = require('./profession.route')
const express = require('express')

const router = express.Router()


const defaultRoutes =[
    {path:'/user', route: userRoute},
    {path:'/profession', route: professionRoute}
]

defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route)
})

module.exports = router;