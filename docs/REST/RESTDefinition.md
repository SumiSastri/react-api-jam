**REST Definition**

As Fielding defines it, REST is an architectural style. Fielding sets up a framework for evaluating network‑based hypermedia systems. In that framework, an architecture describes the characteristics of a running system. Fielding spends the first part of his dissertation setting up an approach for anticipating the impact that different design choices are going to have on the system's properties like performance, scalability, extensibility.

Fielding lists whether a set of design choices will impact properties in a positive, negative, or neutral way. Fielding was starting from a place of trying to describe what it was about the web that enabled it to be so successful. Out of all the possible decisions that could've been made, there were already choices that had and hadn't been made. So it made sense then to articulate design decisions in terms of constraining some aspects of an otherwise anything goes system. So to pull it back around, an architectural style then is just a named set of constraints.

This approach to describing architecture is that since a style is just a set of constraints with expected impacts on those properties, you can actually build up more complex styles from simpler styles. And most importantly, you can reason about system properties all along the way as you compose those styles together.

And this is a big part of how REST is defined. REST is a named set of constraints on how components interact in a system with the intent of both explaining the web architecture from the mid to late 1990s and also serve as a guide for its evolution.
