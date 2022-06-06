const routes = require('express').Router()
const  controller = require('../controller/controler')

routes.route('/api/categories').post(controller.create_categorys).get(controller.get_Categories) 
routes.route('/api/tranction').post(controller.create_Transaction).get(controller.get_Transaction).delete(controller.delet_tansation)
routes.route('/api/lables').get(controller.get_Lables)

module.exports = routes;   