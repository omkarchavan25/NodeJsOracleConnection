let connection;
var oracledb = require('oracledb');

(async function(){
	
	try{
		
		connection = await oracledb.getConnection({
			
			user: '<username>',
			password: '<password>',
			connectString: '<databaseName>'
		});
		console.log("Successfully connected");
	} catch(err){
		
		console.log("not connected");
	}finally{
		
		if(connection){
			try{
				await connection.close();
			}catch(err){
				console.log("Errror");
			}
		}
	}
})()
