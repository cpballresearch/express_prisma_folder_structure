import { Router } from 'express';
import setUpAmbulanceRoutes from './modules/ambulance.routes.js';
import setUpAssetRoutes from './modules/asset.routes.js';
import setUpMasterDataRoutes from './modules/masterdata.routes.js';
import setUpPatientRoutes from './modules/patients.routes.js';
import setUpPaymentRoute from './modules/payment.routes.js';
import setUpPharmacyRoutes from './modules/pharmacydata.routes.js';
import setUpStaffRoutes from './modules/staff.routes.js';

//import setUpPharmacy from './modules/'
const apiRoutes = Router();

// This Is Used For Global Error Handler
const use = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);


//* add the sub routes to the main routes


setUpMasterDataRoutes(apiRoutes);

setUpStaffRoutes(apiRoutes);

setUpPatientRoutes(apiRoutes);

setUpPharmacyRoutes(apiRoutes);

setUpAmbulanceRoutes(apiRoutes);

setUpAssetRoutes(apiRoutes);

setUpPaymentRoute(apiRoutes);


//* apply use fn directly to all routes
apiRoutes.stack.forEach((apiLayer) => {
  apiLayer.route.stack.forEach((routeLayer) => {
    routeLayer.handle = use(routeLayer.handle);
  });
});

export default apiRoutes;