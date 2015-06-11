/**
 * Created by Star on 2015/6/11.
 */
"use strict";

var util = {};
util.log = {
    level: {
        INFO: "info",
        ERROR: "error"
    },
    print: function(level, content) {
        if(level == this.level.INFO){
            console.log(content);
        }else if(level == this.level.ERROR){
            console.error(content);
        }else{
            console.error("unknow log level:" + level + "["+content+"]")
        }
    }
};