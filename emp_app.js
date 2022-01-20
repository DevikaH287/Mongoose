var app = require('./config/serverOne.config');
var Register = require('./models/models.employee');

app.get('/', function(req, res) {
    // res.send('Welcome to Express!');
    res.render('login', { "title": "User Login" });
});

app.post('/', function(req, res) {
  let emp_name = req.body.emp_name;
   res.send(emp_name + ' Welcome!!!'); 
});


app.post('/employee_register', function(req, res, next) {
    var registerEmp = new Register(req.body);
    registerEmp.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registerEmp);
        }
    });
});

app.post('/update_employee', function(req, res, next) {
    
    var email = req.body.email;
    var emp_name = req.body.emp_name;
    Register.updateOne({ "email": email },{"Employee_name":emp_name}, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});

app.post('/delete_employee', function(req, res, next) {
    
    var email = req.body.email;
    var emp_name = req.body.emp_name;
    Register.deleteOne({ "email": email }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});