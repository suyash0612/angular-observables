# OBSERVABLES

## Commit 1
Setup a basic observable , observer(suscriber) , event handler

1. observable will emit the events
2. observer will listen to the events
3. handler will handle the events

Implement data streaming with observables and settimeout

## Commit 2

Observable next , error , complete event
data streaming with error and complete events
deprecated and new way of writing callback function while suscribe()
complete callback fn has no paramters , once emitted it is assumed data streaming is completed
err callback fn has a paramter err , once emitted it is assumed data streaming is stopped from the instance.
next callback fn has paramter any type , once emitted events are emitted once with every next call

