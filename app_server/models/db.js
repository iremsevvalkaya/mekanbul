var mongoose=require("mongoose");
var dbURI="mongodb://mekan32:12345678a@ac-dceje73-shard-00-00.ua0x5ft.mongodb.net:27017,ac-dceje73-shard-00-01.ua0x5ft.mongodb.net:27017,ac-dceje73-shard-00-02.ua0x5ft.mongodb.net:27017/?ssl=true&replicaSet=atlas-gxltzz-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(dbURI);

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
})


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağandı.");
})


mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu.");
})


mongoose.connection.on("connected",function(){
    console.log("Bağlantı hatası.");
})


require("./mekansema")