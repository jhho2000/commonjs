/* CodeUtil.js */

var CodeUtil = {};



// context명 반환
CodeUtil.getContextName = function(){
    var path = location.pathname;
    return path.substring(1, path.indexOf("/", 1));
};



// null 체크
CodeUtil.isNull = function(value){
	if (value == undefined) {
		return true;
	} else {
		if (typeof value == "boolean" && value == false) {
			return false;
		} else if (typeof value == "number" && value == 0) {
			return false;
		} else if (value == null || value == "") {
			return true;
		} else {
			return false;
		}
	}
};