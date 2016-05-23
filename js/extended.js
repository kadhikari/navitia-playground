function responseExtended(json) {
    var key = responseCollectionName(json);
    var objs = key ? json[key] : [];
    var type = key;
    if (type.slice(-1) == 's') {
        type = type.slice(0, -1);
    }
    var result = $('<div class="list"/>');
    objs.forEach(function(obj, i) {
        result.append(render('{0}[{1}]'.format(key, i), type, obj));
    });
    return result;
}

function extended(name, json) {
    if (name == 'response') {
        return responseExtended(json);
    }
    // add here custom extended
    return 'No extended view yet!';
}
