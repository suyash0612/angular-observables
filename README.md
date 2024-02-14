# OBSERVABLES

## Commit 1
Setup a basic observable , observer(subscriber) , event handler

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


## commit 3
fromEvent Operator - used to create observable events using html elements.

## commit 4
Of And From Operator - returns observable events.
Of - returns with the same format passed
From - iterated through the parameter (eg list / string) 

## commit 4
map And filter Operator - returns modified obs values.
map - modify complete values
filter - shortlist values / filter them 

## commit 5
Service / Subjects used for data transfer between components.

## commit 5
Understand difference between Observable and subjects
observable - unicast => return multiple data with ajax call
subject - multicast => return single data with ajax call

## commit 6
Behaviour Subject -> it has a initial value whereas subject has its missing

## commit 6
Replay Subject -> used to pass previously passed data to all subscribers through a buffer.
here buffer size can be manipulated by passing the threshold in replaysubject(buffersize)

## commit 6
Async Subject -> it emits a single value , that is the last value before the complete 
signal is called