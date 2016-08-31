# include.js
A small and simple Javascript include function

#### Syntax
    Include(script[, ...][, callbackFn]);
    
#### Parameters
- `script`: Required. Url of the script to load. Any number of urls may be provided, each as an individual parameter.
- `callbackFn`: Optional. If `callbackFn` is a function it will be called when all scripts have finished loading.
 
#### Return Value
N/A

#### Usage
    // load a single script
    Include('script.js');
    
    // load a script with callback
    Include('script.js', function(){
        console.log('script.js is ready');
    });
    
    // load multiple scripts with callback
    Include('script1.js', 'script2.js', script3.js', function(){
        console.log('all scripts are ready');
    });
