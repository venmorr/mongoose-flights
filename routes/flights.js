import { Router } from 'express'
import * as flightsCtrl from '../

const router = Router()

router.get('/', flgihtsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.get("/:flightId/edit", flgihtsCtrl.edit)
router.post('/', flightsCtrl.create)
router.delete("/:flightId", flightsCtrl.delete)
router.put("/:flightId", flightsCtrl.update)

export { 
  router 
}
