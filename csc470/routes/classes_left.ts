/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/classes_left', (req: express.Request, res: express.Response) => {
    res.render('classes_left');
});

export default router;
