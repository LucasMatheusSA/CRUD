module.exports = {

    info : async function (message) {
        console.log(this.formatDate() + " - INFO : " + message);
    },
    
    error : async function (message) {
        console.log(this.formatDate() + " - ERRO : " + message);
    },

    warn : async function (message){
        console.log(this.formatDate() + " - WARN : " + message);
    },
    
    formatDate : function (){
        var date = new Date();

        return date.toLocaleString('en-US', {
            weekday: 'short', 
            day: 'numeric', 
            year: 'numeric',
            month: 'long', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
        });

    }
};

