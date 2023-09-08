function validateHttrequest(request) {
    const { method, uri, version, message } = request;
    const uriRegex = /^[a-zA-z0-9.*]+$/gm;
    const messageRegex = /^[^<>\\&'"]+$/gm;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!method || !validMethods.includes(method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    };

    if (!uri || !uri.match(uriRegex) || uri == '') {
        throw new Error(`Invalid request header: Invalid URI`);
    };

    if (!validVersions.includes(version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    };

    if (message == undefined || (message && !message.match(messageRegex))) {
        throw new Error(`Invalid request header: Invalid Message`);
    };
    return request;
}

console.log(validateHttrequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(validateHttrequest({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));

//   console.log(validateHttrequest({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }));

//   console.log(validateHttrequest({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }));
