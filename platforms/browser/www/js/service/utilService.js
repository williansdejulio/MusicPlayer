app.service("utilService", function ($http) {
    
    this.getToken = function () {
        var authorization = JSON.parse(localStorage.getItem("token_authorization"));

        if (authorization != null) {
            if (Date.now() > new Date(authorization[".expires"])) {
                localStorage.setItem("token_authorization", null);
                authorization = null;
            }
        }

        return authorization;
    }
    
    this.getParameters = function () {
        var search = location.hash.substring(location.hash.indexOf('?') + 1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }

    var meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    this.getMeses = function (index) {
        if (index && index != undefined) {
            return meses[index - 1];
        } else {
            return meses;
        }
    }

    this.getMesesCompleto = function (language) {
        switch (language) {
            case "PT":
                return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
                break;
            case "ES":
                return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
                break;
            case "EN":
                return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                break;
            default:
                return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
                break
        }
    }

    this.dateFormat = function (dateToFormat) {
        var date = new Date(dateToFormat);
        var d = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        var m = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);

        return d + "/" + m + "/" + date.getFullYear();
    }

    this.sqlDateFormat = function (dateToFormat, separator) {
        if (separator == "" || separator == null || separator == undefined){
            separator = "/";
        }

        var date = new Date(dateToFormat);
        var d = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        var m = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);

        return date.getFullYear() + separator + m + separator + d;        
    }

    this.checkConnection = function () {
        var networkState = navigator.connection.type;
        //alert("networkState: " + networkState);

        //var states = {};
        //states[Connection.UNKNOWN]  = 'Unknown connection';
        //states[Connection.ETHERNET] = 'Ethernet connection';
        //states[Connection.WIFI]     = 'WiFi connection';
        //states[Connection.CELL_2G]  = 'Cell 2G connection';
        //states[Connection.CELL_3G]  = 'Cell 3G connection';
        //states[Connection.CELL_4G]  = 'Cell 4G connection';
        //states[Connection.CELL]     = 'Cell generic connection';
        //states[Connection.NONE]     = 'No network connection';

        if (networkState === "none" || networkState === undefined) {            
            return false;
        } else {
            return true;
        }
    }

    this.validaCPF = function (cpf) {
        
        var sum = 0;
            var remainder;
    
            cpf = cpf.replace('.', '')
                .replace('.', '')
                .replace('-', '')
                .trim();
    
            var allEqual = true;
            for (var i = 0; i < cpf.length - 1; i++) {
                if (cpf[i] != cpf[i + 1])
                    allEqual = false;
            }
            if (allEqual)
                return false;
    
            for (i = 1; i <= 9; i++)
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            remainder = (sum * 10) % 11;
    
            if ((remainder == 10) || (remainder == 11))
                remainder = 0;
            if (remainder != parseInt(cpf.substring(9, 10)))
                return false;
    
            sum = 0;
            for (i = 1; i <= 10; i++)
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); remainder = (sum * 10) % 11;
    
            if ((remainder == 10) || (remainder == 11))
                remainder = 0;
            if (remainder != parseInt(cpf.substring(10, 11)))
                return false;
    
            return true;
    }

    this.calcIdade = function (data_nascimento) {
        var d = new Date();
        var ano_atual = d.getFullYear();
        var mes_atual = d.getMonth() + 1;
        var dia_atual = d.getDate();

        var d_nascimento = new Date(data_nascimento);
        var ano_nascimento = d_nascimento.getFullYear();
        var mes_nascimento = d_nascimento.getMonth() + 1;
        var dia_nascimento = d_nascimento.getDate();

        quantos_anos = ano_atual - ano_nascimento;        

        if (mes_atual < mes_nascimento || mes_atual == mes_nascimento && dia_atual < dia_nascimento) {
            quantos_anos--;
        }

        return quantos_anos < 0 ? 0 : quantos_anos;
    }

    this.getIdUsuarioLogado = function () {
        if (localStorage.getItem('token_authorization') != undefined) {
            var token = JSON.parse(localStorage.getItem('token_authorization'));
            return token.id_cliente;
        }
        else {
            return 0;
        }
    }
    
});