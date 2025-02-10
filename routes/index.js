const userRoute = require('./user.route')
const professionRoute = require('./profession.route')
const taskRoute = require('./task.route')
const express = require('express')

const router = express.Router()


const defaultRoutes =[
    {path:'/user', route: userRoute},
    {path:'/profession', route: professionRoute},
    {path:'/tasks', route:taskRoute},
]

defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route)
})

module.exports = router;