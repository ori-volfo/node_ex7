var jsonfile = require('jsonfile');

exports.loginUser = function(username,password)
{
    return new Promise((resolve,reject) =>{
        jsonfile.readFile('users.json',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                let res = data.users.find(user=>
                    user.name === username && user.password === password
                );
                resolve(typeof(res) === "object");
            }
        });
    })

};
