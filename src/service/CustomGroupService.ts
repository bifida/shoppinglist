import express, { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { CustomGroupDocument } from '../model/CustomGroupDocument';
import { CustomGroupItemDocument } from '../model/CustomGroupItemDocument';
import { DbContext } from '../repository/DbContext';
import { DbContextFactory } from '../repository/DbContextFactory';

const router = express.Router();

router.get('/customgroup/', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var result = await context.CustomGroupRepository.find({});

        res.send(result);   
    } catch (error) {
        res.send(error);
    }

});

router.get('/customgroup/:id', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var document = await context.CustomGroupRepository.findOne(req.params.id);
        
        res.send(document)    
    } catch (error) {
        res.send(error);
    }

});

router.post('/customgroup', async (req: Request, res: Response) => {
    
    var requestDocument = new CustomGroupDocument();
    Object.assign(requestDocument, req.body);

    try {
        var context = await DbContextFactory.Create();
        var document = await context.CustomGroupRepository.create(requestDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.put('/customgroup/:id', async (req: Request, res: Response) => {
    
    try {
        var context = await DbContextFactory.Create();
        var document = await context.CustomGroupRepository.update(req.params.id, req.body as CustomGroupDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.post('/customgroup/:id/customgroupitem', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();

        var customGroup = await context.CustomGroupRepository.findOne(req.params.id);
        var customGroupItem = req.body as CustomGroupItemDocument;

        Object.assign(customGroupItem, req.body);
        customGroup?.customGroupItems.push(customGroupItem);

        var document = await context.CustomGroupRepository.update(req.params.id, customGroup as CustomGroupDocument);
        res.send(document);
    } catch (error) {
        res.send(error);
    }

});

module.exports = router;