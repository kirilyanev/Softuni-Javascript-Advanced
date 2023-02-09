function validateHttrequest(request) {
    const { method, uri, version, message } = request;
    const uriRegex = /^[a-zA-z0-9.*]+$/gm;
    const messageRegex = /^[^<>\\&'"]+$/gm;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const errorMessage = (param) => { throw new Error(`Invalid request header: Invalid ${param}`) };

    if (!validMethods.includes(method) || !method) errorMessage('Method');

    if (!uri.match(uriRegex) || !uri) errorMessage('Uri');

    if (!validVersions.includes(version)) errorMessage('Version');
    // console.log(!message.match(messageRegex));
    if ((message && !message.match(messageRegex)) || !message && message !== '') errorMessage('Message');

    return request;
}

console.log(validateHttrequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
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
