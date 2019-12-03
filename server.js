
const oracledb = require('oracledb');
var http = require("http");
var express = require('express')
var app = express();
var user ;
var myText;

var applicationNumber;
var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({extended:false})

const inquirer = require('inquirer');
//app.set('view engine','ejs');
app.use(express.static('public'))
app.get('/index.html',function(req,res){

	res.sendFile(__dirname+"/"+"index.html");
})


const button =  document.getElementById('btn_submit');
button.addEventListener('click', function(e) {
	console.log('button was clicked');
  });

		oracledb.getConnection({
			
			user: 'hccf',
			password: 'hccfDEM02',
			connectString: 'hvlc-cm21d1:1580/cm21d1'

			},


	
		function(err, connection) {
			if (err) throw err;
			
			
		app.get('/process_post', function(req, res){ 
	
			applicationNumber= req.query.applicationNumber //mytext is the name of your input box
			// var text = res.send('Your Text:' +myText);
	
			console.log("app no"+applicationNumber);
			
		});

		var server = app.listen(3000, function () {
			var host = server.address().address
			var port = server.address().port
			
			console.log("Example app ", host, port)
		 })

				 connection.execute(
					 
			
			 `select aa.SECURITY_QUESTION,
			 aa.SECURITY_ANSWER, ca.customer_email_address
			 From hccf.credit_application ca
			 Inner Join
			 ploans.applicant_account aa on ca.unique_id =
			 aa.unique_id OR ca.supplier_reference = aa.unique_id
			 where application_number = :app_num`,
			 {app_num:162965649},

		//162965649

			 function(err,results){
				 var metaData = {};
				 var rows = {};
				 console.log("error")
				 if (err){
					 throw err
					  }
					  metaData.name1 = results.metaData[0].name;	  
					  metaData.name2 = results.metaData[1].name;
					  metaData.name3 = results.metaData[2].name;
					 
				 rows.POB = results.rows[0][0];
				 rows.answer = results.rows[0][1];
				 rows.question = results.rows[0][2];
				 console.log(metaData.name1+" : "+rows.POB)
				 console.log(metaData.name2+" : "+rows.answer)
				 console.log(metaData.name3+" : "+rows.question)
				 
		console.log("Successfully connected");

		
				

			    }
			 );
		  }
		);
	
		





