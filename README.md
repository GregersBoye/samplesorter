# samplesorter
A distributed samplesort-example using node and docker-compose

The project consists of three containers:   
**Frontend-container**  
 This container shows the UI of the system
 
**Sorter-container**  
This container sorts the list and delegates the sub-lists to the workers.
 
**Worker-container**  
This container receives a sub-list and sorts it using quick-sort, then it returns the sorted list to the sorter-container


## Setting up project
1: Clone project: 
    
    $ git clone https://github.com/GregersBoye/samplesorter.git
    
2: Start containers: 

    $ docker-compose up -d
    
3: Access control panel at `localhost`



## Various tasks:
### Run tests: 
    
    $npm run test
    
### Run lint-check:

    $npm run lint  
    
        