let connection;
var oracledb = require('oracledb');

(async function(){
	
	try{
		
		connection = await oracledb.getConnection({
			
			user: 'hccf',
			password: 'Omkar@321',
			connectString: 'hvlc-cm21d1:1580/cm21d1'
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