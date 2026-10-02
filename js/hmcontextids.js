var hmContextIds = new Array();
function hmGetContextId(query) {
    var safeDecode = function(s) {
        if (typeof s !== "string" || s === "") return "";
        try {
            return decodeURIComponent(s);
        } catch (err) {
            return "";
        }
    };
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return safeDecode(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return safeDecode(hmContextIds[params["contextid"]]);
    else return "";
}

