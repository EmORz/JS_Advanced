import {MOCK} from "./MOCK_DATA.js";

(function (data, document){

    let keys = Object.keys(data[0]);
    let result ="" ;

    function createSingleTag(tag, prop, val) {
        return `<${tag} ${prop}="${val}" />`;
    }

    function createTag(tag, content){
        return `<${tag}>${Array.isArray(content)? content.join(""): content}<${tag}>`
    }

    const renderTr = createTag.bind(undefined, "tr")
    const renderTh = createTag.bind(undefined, "th")
    const renderTd = createTag.bind(undefined, "td")

    const fieldsMap = {
           avatar: (_, x) => createSingleTag("img", "src", x),
    }

    function chooseContentType(map, defaultWrapper, type, content) {
        
        if (typeof map[type] === "function") {
            return defaultWrapper(map[type](content))
        }
        return defaultWrapper(content);
    }

    const defaultTd = chooseContentType.bind(undefined, fieldsMap, renderTd);


    result+="<table>";
    result+="<thead>";
   

    result += renderTr( keys.map(key => renderTh(key)));
   

    result+="</thead>";

    result+="<tbody>";

    result+= data.map(row => `<tr> ${keys.map(cell => defaultTd(cell, row[cell])).join("")}</tr>`).join("");
    result+="</tbody>";

    result+="</table>";


    document.getElementById("app").innerHTML = result;

}(MOCK, document))