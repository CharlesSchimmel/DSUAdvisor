/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    if (req.user == null){
        res.render('menu', { title: 'CSC470 Application' });
    } else {
        res.render('index', { title: 'CSC470 Application' });
    }
});

export default router;
