async function testingRoutes(req,res){
    console.log("reaches at the contoller");
    return res.json({
        success:'ok'
    })
}

module.exports={testingRoutes};