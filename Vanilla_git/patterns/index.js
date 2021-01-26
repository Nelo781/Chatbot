const patternDict = [
    {pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',intent : 'Hello'} ,
    {pattern :'\\b(?<sortie>bye|exit)\\b',intent : 'Exit'},
    {pattern :'\\b(?<time>heure|h|Time)\\b',intent : 'Datetime'},
    {pattern : '\\bweather\\sin\\s(?<city>[A-Za-z]+[a-zA-Z]+?)\\sthis\\sweek',
    intent:'get futur weather'},
    {pattern: '.*weather in (?<city>[\\w|\\s]+)', 
    intent : 'Current Weather'}];
    
    
    
    
    
module.exports = patternDict ;
    

