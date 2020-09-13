const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid');
 
console.log(shortid.generate());

const adapter = new FileSync('db.json')
const db = low(adapter) 

// Set some defaults (required if your JSON file is empty)
// db.defaults({ topic: [], author: [] }).write() 
// db.get('author').push({
//    id:1, 
//    name:'egoing', 
//    profile:'developer'
// }).write();
// db.get('topic').push({
//    id:1, 
//    title:'lowdb', 
//    description:'lowdb is ...', 
//    author:1
// }).write();
// db.get('topic').push({
//    id:2, 
//    title:'nodejs', 
//    description:'nodejs is ...', 
//    author:1
// }).write();

// console.log(db.get('topic').find({author:1}).value());
// console.log(db.get('topic[1].title').value());
// console.log('number of topic : ',db.get('topic').size().value());

// db.get('topic')
//    .find({id:1})
//    .assign({title:'MySQL134', description:'MySQL134 is ...'})
//    .write()

// db.get('topic')
//    .remove({id:1})
//    .write()

// var sid = shortid.generate();
// db.get('author').push({
//    id:sid,
//    name:'taeho',
//    profile: 'data scientis'
// }).write();
// db.get('topic').push({
//    id:shortid.generate(),
//    title:'PostgreSQL',
//    description:'PostgreSQL is ...',
//    author:sid
// }).write();

