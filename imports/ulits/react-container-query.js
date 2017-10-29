export function getCurrentLayoutType(query){
    var keys = Object.keys(query);

    var filtered = keys.filter(function(key) {
        return query[key]
    });
    return filtered;
}