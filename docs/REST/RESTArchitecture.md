**Assumptions**

Fielding didn't explicitly call out as constraints because they were just assumed as building up a model for describing the web and network‑based hypermedia applications.

Network‑based, meaning that the network is visible to application developers and not hidden behind some programming abstraction.

Application architecture meant that he didn't take into account lower‑level concerns like the operating system. Hypermedia was a constant throughout his entire analysis. Fielding also assumed transfer of large‑grained data objects across high‑latency networks like the internet and also says REST is actually not very optimal for other types of interactions.

Specific constraints that Fielding uses to describe REST, particularly those elements of the uniform interface, introduce recurring themes, specifically generalization and visibility. They provide some insight into how the RESTful style was intended to help the web continue to scale without breaking everything that was already connected to it.

Scale would come through the addition of intermediaries.

**Client-server Constraint**

Software that initiates a request is a client, and there's another that listens for requests and responds, the server.

And while the constraint doesn't prescribe the details for things like what the interaction should look like or where data gets stored, it creates a nice dividing line for things that are client concerns, things like user interface, and things that are server concerns.

This gives us two benefits. The first is scalability. A server can serve multiple clients. The second is an initial level of decoupling and evolvability as it only works in one direction.

Specifically, it lets the client or clients evolve independently of the server.

If the client changes, the server doesn't care. The same can't be said though of clients if the server changes.

**Stateless Constraint**

Separating the client and server is helpful is an organizational strategy. But if a client always has to go back to the same server because the server is maintaining some kind of background data on the session, it can hurt scalability. So the solution is to constrain the server to say that it can't store any session state.

Instead, each request has to contain all of the information needed to process it, which, of course, means that the state has to be stored on the client and transferred on each request.

Now the tradeoffs are pretty important with this constraint because while it can improve things like scalability, reliability, particularly with the addition of intermediaries, it can also have some challenges. One is the network performance impact of sending all that context data back and forth. Another is that because handling and managing the state is up to each client, if you have lots of different types of clients, you might see inconsistent behavior. And finally, if you're building a system for a highly regulated or high‑security environment, your customers, or at least your data protection office, might see this constraint as much more of a bug than a feature.

**Cache Constraint**

Fielding's paper is primarily about network‑based architecture. He ironically says the best type of network interaction is the one that doesn't involve the network at all. That's what the cache constraint is all about.

In an unreliable network like the internet, eliminating requests by caching (temporarily storing data) can dramatically improve how the user perceives the performance of the system.

This constraint doesn't mandate a type of cache or even require the existence of a cache. Instead, it simply requires that all responses are labeled as either cacheable or not cacheable.

It also wouldn't be very achievable in the first place if it wasn't for the stateless constraint since you wouldn't have all the information to know for sure whether or not you could really reuse a response.

From there, caches, whether they are local client caches like the one that's part of your web browser or shared caches like content delivery networks, they can choose to reuse that response if they want. Now while cache can have a positive effect on performance, the risk with caching is that your cached data could get out of sync with your source data.

The web really doesn't have a clear, out‑of‑the box way to differentiate between that authoritative data and cached data.

Fielding defined this architectural style as client‑cache‑stateless‑server, and this makes sense when you consider how the web's original design was optimized for exchanging static hypertext documents over the internet in the 1990s. The usage was still relatively simple, and while it was growing fast, it still hadn't completely outpaced the infrastructure that was supporting it. Even gaps and ambiguities in the protocols weren't that big a deal because at that time, consistency between clients and servers was almost guaranteed by the fact that everyone used the same code library, the original CERN library.

But in looking at how fast the web was growing and the number of new things that people were trying to do with it, it wasn't hard to conclude that a little more formality was going to be needed to keep things from spinning out of control and having the web suffer from death by success. And as a result, Fielding added three more constraints to both describe where he saw the web going and how to guide the work needed to get it there.

**Uniform Interface Constraint**

Of all the constraints that make up REST, this is the one that's novel compared to all of the other styles that Fielding described. And it's also the one that's most important for enabling the web to scale, both in terms of usage and in terms of different types of scenarios.

At a high level, the constraint is exactly what it sounds like. Every interaction in the system is constrained to communicate in the same way. A good comparison here is the UNIX shell where all programs communicate together using standard text streams for input, output, and error.

You trade off some efficiency since every program has to convert data from its own internal structure to that interface. But the simplicity you get in return lets you do some pretty substantial things by easily wiring different programs together. Also, this is the constraint that can enable that second level of decoupling. By coupling clients to the elements of the uniform interface, rather than directly to the server, the server can evolve without breaking clients.

**Layered System Constraint**

The constraint limits the field of vision for a component to just the components in the layer below it, the goal, of course, being to hang onto simplicity as the number of components grows.

Like with the other constraints, layered system is feasible only because it builds on top of the constraints that came before it, in particular the client‑server and the uniform interface constraints, which decouple components from one another.

In the context of the web, it works nicely in describing how its infrastructure was able to keep pace with its extraordinary growth.The trade off for simplicity is higher latency, and that is where good use of cache at each layer can help.

**Code On-demand**
There's a final constraint that Fielding describes as being a part of REST, as an optional constraint. It deals with the problem of backwards compatibility.

The scenario here is that as the server evolves, a client may not be able to keep up with the changes.

So instead of either having to delay server features or force all clients to update at the same time, the server can effectively wrap the state inside of the code that understands it and then just have the client download and run that code.

Now this kind of approach has a pretty hefty tradeoff because while it makes life easier for the client, it comes at the cost of reducing visibility, and that can limit the usefulness or outright break intermediary components like shared caches, and that is why it's listed as optional.

Code on demand can be powerful as a in addition to. But it should never be the starting point in a design, and it should never be the only way for a client to make progress.

**REST Data Elements**

The constraints do a good job in describing how a web architecture should behave, but they come up short in giving us a mental framework for designing.

For that, Fielding provided a handful of concepts for describing the things, the data elements that are transferred and managed in a RESTful architecture. And these are probably the terms that you're most familiar with, resources, representation, metadata, and, of course, hypermedia.

As the web grew, the original document‑centric approach ran into some growing pains. For example, reorganizing documents on a server, which is something that we're all prone to do, ended up regularly breaking clients.

There were also more and more scenarios where there was a need to create names for things that weren't documents at all. Underlying these and some other challenges was the same root issue. A document coupled together three things, the concept, the content, and the storage of a thing.

**Resources**
Put simply, a resource is just a named concept that you can link to. The name is known as the resource identifier, and it's in the form of a URI or IRI, which is the internationalized flavor if you want to get super particular.

The resource decouples the concept of the thing from the content of the thing, and that gives you, as the server developer, the freedom to create a stable layer of concepts and then move the content around in whatever way you see fit.

Another nice benefit of the separation is that there's no longer an implied 1‑to‑1 relationship between an identifier and a piece of content, which means that you can create identifiers for concepts that don't yet have any content. You can also change the content without having to change the identifier, and you can create multiple concept identifiers for the same content. This decoupling is most important to stability because while concepts don't tend to change that often, the underlying content that maps to them changes all the time.

A great example of this idea is Git. Consider a typical Git repository. A commit is a defined concept with a clear identifier, and it refers to some content, some data structures within Git. But there are also these other defined concepts, branch names, labels, and releases, and all of these things are treated as first‑class concepts in Git with their own clear identifiers. And at different points in time, they can point to the same content or different content. The big idea is that the concepts can remain stable while the underlying content is free to change.

**Representations**

In the same way that a resource decouples the concept of a thing from the content of a thing, a representation decouples the content of the thing from the storage and management of that thing.

This just means that the sequence of bytes that flow across the uniform interface is not the same thing that's stored and manipulated behind that interface.

For example, in most web‑based systems, the data in messages looks a lot like a document, but typically it's managed by some sort of database.

A resource can have multiple representations, and each representation can be identified through the metadata that's part of the message.

In HTTP, this happens to be the Content‑Type response header. Now because a resource can support multiple content types, there's a process for choosing the most appropriate content type for an individual client.

This process is called content negotiation, allowing a resource to have multiple representations and that they're independent of how the underlying data is stored and managed.

**Self-describing Messages**

A key aspect of the uniform interface is the requirement that a message is self‑describing, which means that in addition to a request or response carrying all the application state as per the stateless constraint, it also needs to carry all of the metadata needed by a component, including intermediaries, to do useful things with it.

In HTTP, maybe unsurprisingly, metadata goes into the headers. Resource metadata includes headers like Location, representation metadata includes headers like Content‑Type, and control data includes headers like Cache‑Control.

Because of concerns over backwards compatibility, and some ambiguities in classification, HTTP flattens all of these different types of metadata into the same set of headers.

So while it's useful to have a general sense of what a header is describing, there's no real practical benefit to memorizing how the different headers map into those different categories of resource representation or control data. It was this aspect of the uniform interface that Fielding found to be most often violated as a result, primarily, of HTTP cookies being accepted as a protocol extension, especially when they were used as a way to violate the stateless constraint and preserve session state.

**Hypermedia**

It's not actually called out as a constraint in Fielding's description of REST as it was assummed as part of the web functioning.

A hypermedia‑driven workflow is one where the server delivers instructions for the next possible actions along with its responses. The client can then select and execute an action without having to know anything beyond what was in the response. And it's this particular type of interaction that can, in theory, enable the server to evolve without breaking clients.

Hypermedia‑driven workflows work almost effortlessly on the web because every web browser in the world is built to know how to work with HTML and its hypermedia controls like anchor tags and forms. But once you step outside of that, building a system for lots of different clients, a hypermedia‑driven workflow may not be part of that system's workflow.
