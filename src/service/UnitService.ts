import express, { Request, Response } from 'express';
import { UnitDocument } from '../model/UnitDocument';
import { DbContextFactory } from '../repository/DbContextFactory';

const router = express.Router();

router.get('/unit/', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var result = await context.UnitRepository.find({});

        res.send(result);   
    } catch (error) {
        res.send(error);
    }

});

router.get('/unit/:id', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var document = await context.UnitRepository.findOne(req.params.id);
        
        res.send(document)    
    } catch (error) {
        res.send(error);
    }

});

router.post('/unit', async (req: Request, res: Response) => {
    
    var requestDocument = req.body as UnitDocument;
    console.log(`post unit: ${requestDocument}`);
    try {
        var context = await DbContextFactory.Create();
        var document = await context.UnitRepository.create(requestDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.put('/unit/:id', async (req: Request, res: Response) => {
    
    try {
        var context = await DbContextFactory.Create();
        var document = await context.UnitRepository.update(req.params.id, req.body as UnitDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;