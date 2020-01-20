let express = require('express');
let app = express();


app.get('/', (req,res)=>{
    res.json({namne : '테스트 유저'});
})


app.listen(4000,function(){
    console.log('server listen');
})

