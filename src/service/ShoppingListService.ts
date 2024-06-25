import express, { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { CloneOpstions, CloneShoppingList } from '../dto/ShoppingList';
import { ShoppingListDocument } from '../model/ShoppingListDocument';
import { ShoppingListItemDocument } from '../model/ShoppingListItemDocument';
import { DbContext } from '../repository/DbContext';
import { DbContextFactory } from '../repository/DbContextFactory';

const router = express.Router();

router.get('/shoppinglist/', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var result = await context.ShoppingListRepository.find({});

        res.send(result)    
    } catch (error) {
        res.send(error);
    }
});

router.get('/shoppinglist/:id', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();
        var document = await context.ShoppingListRepository.findOne(req.params.id);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.post('/shoppinglist', async (req: Request, res: Response) => {
    
    var requestDocument = new ShoppingListDocument();
    Object.assign(requestDocument, req.body);
    
    try {
        var context = await DbContextFactory.Create();
        var document = await context.ShoppingListRepository.create(requestDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.put('/shoppinglist/:id', async (req: Request, res: Response) => {
    
    var requestDocument = new ShoppingListDocument();
    Object.assign(requestDocument, req.body);
    
    try {
        var context = await DbContextFactory.Create();
        var document = await context.ShoppingListRepository.update(req.params.id, req.body as ShoppingListDocument);

        res.send(document)    
    } catch (error) {
        res.send(error);
    }
});

router.post('/shoppinglist/:id/shoppinglistitem', async (req: Request, res: Response) => {

    try {
        var context = await DbContextFactory.Create();

        var shoppingList = await context.ShoppingListRepository.findOne(req.params.id);
        var shoppingListItem = req.body as ShoppingListItemDocument;

        Object.assign(shoppingListItem, req.body);
        shoppingList?.shoppingListItems.push(shoppingListItem);

        var document = await context.ShoppingListRepository.update(req.params.id, shoppingList as ShoppingListDocument);

        res.send(document);
    } catch (error) {
        res.send(error);
    }

});

router.get('/shoppinglist/:id/shoppinglistitem/:checked?', async function (req: Request, res: Response) {

    try {
        var context = await DbContextFactory.Create();
        var shoppinglist = await context.ShoppingListRepository.findOne(req.params.id);
        var result = shoppinglist?.shoppingListItems;

        if (req.params.checked != undefined) {
            result = shoppinglist?.shoppingListItems?.filter((item) => {
                return item.checked.toString().toLowerCase() === req.params.checked.toLowerCase();
            });
        }

        res.send(result);    
    } catch (error) {
        res.send(error);
    }
});

router.post('/shoppinglist/:id/clone', async (req, res) => {

    try {
        var requestDto = req.body as CloneShoppingList;
        console.log(`clone requestDto: ${JSON.stringify(requestDto)}`);
        var context = await DbContextFactory.Create();
        var shoppinglist = await context.ShoppingListRepository.findOne(req.params.id);
        console.log(`clone shoppingList: ${JSON.stringify(shoppinglist)}`);
        var clonedShoppingList = new ShoppingListDocument();
        Object.assign(clonedShoppingList, shoppinglist);
        console.log(`clonedShoppingList: ${JSON.stringify(clonedShoppingList)}`);
        // if (requestDto.options != CloneOpstions.AllItems) {
        //     var items = clonedShoppingList.shoppingListItems?.filter((item) => {
        //         var checked = requestDto.options === CloneOpstions.Checked ? "true" : "false";
        //         return item.checked.toString().toLowerCase() === checked;
        //     });
        // }
        clonedShoppingList._id = new ObjectId();
        clonedShoppingList.name = requestDto.name;
        console.log(`clonedShoppingList2: ${JSON.stringify(clonedShoppingList)}`);
        var document = await context.ShoppingListRepository.create(clonedShoppingList);
        console.log(`cloned document: ${JSON.stringify(document)}`);
        res.send(document);

    } catch (error) {
        res.send(error);
    }
});


module.exports = router;