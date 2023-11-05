const {serverConfig , Logger} = require('./config/index');
const express = require('express');
const  apiRoutes = require('./routes/index')
const mailsender = require('./config/email-config');



// const { AboutController , homecontrller } = require('./config');//when we do this it autonmatically consider file index from congig



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api' , apiRoutes);
//now hit localhost/api/v1/info 

app.listen(serverConfig.PORT ,async ()=>{

    console.log(`sucessfully started the server on PORT :   ${serverConfig.PORT}`);
    Logger.info("sucessfully starrted server  " , "root" , {});
   



    try {
        const res = await mailsender.sendMail({
            from: serverConfig.GMAIL,
            to:'avdhootwalunjkar@gmail.com',
            subject: 'isservice running',
            content: 'yes it is working'
            //or if mail in apam you can use
            //text: "yes its working"
        })
        console.log(res);
        
    } catch (error) {

        console.log(error);
        
    }
})