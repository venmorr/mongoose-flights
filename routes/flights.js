import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.get("/:flightId/edit", flightsCtrl.edit)
router.post('/', flightsCtrl.create)
router.post('/:flightId/meals', flightsCtrl.addToMenu)
router.post('/:flightId/tickets', flightsCtrl.createTicket)
router.delete("/:flightId", flightsCtrl.delete)
router.delete('/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket)
router.put("/:flightId", flightsCtrl.update)

export { 
  router 
}
