

movieDBApp.filter('concatStrings', () => {

    return (objectArray, targetProperty) => {
        if(!objectArray)
            return '';
            
        let stringArray = objectArray.map(e => e[targetProperty]);
        return stringArray.join(', ');
    };
})