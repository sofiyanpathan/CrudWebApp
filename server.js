const jsonserver=require("json-server");
const server=jsonserver.create();
const router=jsonserver("./db.json");
const middlewares=jsonserver.defaults({
    static:"./build",
});
const port=process.env.PORT || 8000;
server.use(middlewares);
server.use(
    jsonserver.rewriter({
        "/api/*":"/$1",
    })
)
server.use(router);
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
});