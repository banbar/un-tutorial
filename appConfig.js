var developmentDatabase = {
    postgres: {
    host: 'ec2-3-234-109-123.compute-1.amazonaws.com',
    port: 5432,
    database: 'd8msv9mhcjbq09',
    user: 'hbztidilgyhddu',
    password: '8911c8d691e344b240aa3ea8b877a7e2827e853595f9cca3e84242f249d17a8c'
    }
    }
    
    var connectionString = "postgressql://hbztidilgyhddu:8911c8d691e344b240aa3ea8b877a7e2827e853595f9cca3e84242f249d17a8c@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d8msv9mhcjbq09?ssl=true";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "https://challenge2-2019.herokuapp.com/",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }
