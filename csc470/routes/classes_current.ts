/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/classes_current', (req: express.Request, res: express.Response) => {
    res.render('classes_current');
});

export default router;
