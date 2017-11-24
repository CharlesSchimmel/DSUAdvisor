
export function genUniqueId() {
        //could cause repeates if called more than once in same millisecound
        var x = new Date().getTime();
        return x;
    }