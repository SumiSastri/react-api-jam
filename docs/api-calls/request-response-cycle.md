Clients and servers exchange messages in a request-response messaging pattern:

The client sends a request
The server returns a response
To communicate, the computers must have a common language, and they must follow rules so that both the client and the server know what to expect. The language and rules of communication are defined in a communications protocol.

The request using the REST-protocol uses the GET verb.

The request can be made using the `fetch` method inbuilt with JavaScript to interact with the browsers in the network-layer (service-layer/ application-layer).

External libraries - axios being a popular JavaScript HTTP-runner makes the call with additional helper methods that smooth out the data-transfer process of an API-call in the network layer.

The back-end servers have a more complex infrastructure where multiple databases are connected to the back-end data-layer. They are aggregated in this data-layer and transfered to the network-layer and a response is sent back via an HTTP response.

This response-request cycle transfers data from a complex backend architecture to a complex frontend architecture.

Backend routers transfer data between databases and other storage services in the back-end data-layer. Similarly front-end routers transfer data received from the backend into front-end state-management systems.

The initial API call is made with a very simple GET request in a `.json` object in the REST-protocol and with `.xml` files in the SOAP-protocol. GraphQL is a run-time environment (in the network-layer) that consumes data from backend databases, agnostic of the database and its language, and transfers this data back to the front end via a data-schema. It is also a query language that queries back-end data, the GraphQL language then resolves this data with its own functions into a schema and this schema then is queried by front-end applications to manage state of the applications.

A server may receive requests from many different clients in a very short period of time. Because the computer can perform a limited number of tasks at any moment, it relies on a scheduling system to prioritize incoming requests from clients in order to accommodate them all in turn.

To prevent abuse and maximize uptime, the server's software limits how a client can use the server's resources. Even so, a server is not immune from abuse. DDoS attacks (denial of service attack) exploits a the server protocol to process requests by bombarding it with fake requests in a short-sharp burst. This inhibits the server's ability to respond to legitimate requests and prevents users from accessing information they may require from the server in the front-end.

REQUEST HEADERS
A request is made with a request header. To check if your header has made the right request, in the Network tab you can go to the "Doc" filter and pick the document-header you have requested you will get the Headers (request) and the Response.

You can now check if the Network call has worked.

The response is sent back through a response header with serialised codes to show how the response has been handled.

200 - ok
404 - not found

are the common serialisation of these responses that a general user may be familiar with but there are a list of codes that are returned in the response header. As these Network calls are not visible to the user, Network errors need to be handled if the response comes back with an error by developers.

Elements of the URL making the request are:-

    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/

protocol/host/domain name/ path/ querystring/ hash/fragment

There are several protocols- HTTP/ FTP/ SSH/ HTTPS/SFTP
The host is the world-wide-web but there are other hosting options for devices not hosted on the world-wide-web
The domain-name is the name provided to the serialised IP address of the web-address
The path directs the server to the file and directory that the document is located on the world-wide-web
The querystring are the parameters sent to the server through the querystring and start with a question mark.
The hash/fragment - the URI (Uniform Resource Identifier) fragment is generally used by the client to identify some portion of the content in the response.

This is the header that the server can then use these to customise the response - such as values to filter a search result

Note: A broken hash will not break the whole response link. However an incorrect domain-name/ path/ query-string request will completely break the response cycle which is when you get one of the serialised codes to indicate an error (bad-request)
