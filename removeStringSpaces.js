function noSpace(x){
    return x.split(' ').join('');
    }

    //second solution
    function noSpace(x){
        return x.replace(/\s/g, '');
        }