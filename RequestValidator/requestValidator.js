function solve(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    let validUri = /^([A-Za-z0-9.]+)$/gm;

    let validMsg = /^([^<>\\\&'"]+)$/gm;

    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ];

    if(!(obj.method && validMethods.includes(obj.method))){
        throw new Error("Invalid request header: Invalid Method")
    }
    if(!(obj.uri && (validUri.test(obj.uri)|| obj.uri ==='*'))){
        throw new Error("Invalid request header: Invalid URI")
    }
    if(!(obj.version && validVersion.includes(obj.version))){
        throw new Error("Invalid request header: Invalid Version")
    }

    if(!( (validMsg.test(obj.message) && obj.hasOwnProperty("message") || obj.message == ""))){
        throw new Error("Invalid request header: Invalid Message")
    }    

    return obj;
}

//console.log(solve(test0))
let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  };
solve(test0)
console.log(solve(test0))
