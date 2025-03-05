import rateLimit from 'express-rate-limit';
import { handleBadRequest } from '../utils/responsehandler/index.utils.js';


const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  handler: (req, res) => {
    return handleBadRequest(res);
  }
});

export default limiter;
