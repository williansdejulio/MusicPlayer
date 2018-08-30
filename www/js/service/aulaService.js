app.service("aulaService", function($http) {

    this.getAula = function(id_aula) {

        return new Promise(function (resolve, reject) {
            dbOpen();
            db.transaction(function(sql) {
                sql.executeSql("SELECT * FROM AULA WHERE ID_AULA_EXTERNO = " + id_aula, [], function(sql, r) {
                    if (r.rows.length > 0) {
                        console.log("TESTE: getAula [RETORNOU] " + r.rows.length + " DADOS!");
                        resolve(r.rows.item(0)); // retorna o primeiro object do retorno
                    } else {
                        console.log("TESTE: getAula NÃO [RETORNOU] DADOS!");
                        resolve({ })            // retorna função com objeto vazio - pode mudar de acordo com a lógica
                    }
                });
            });
        });
    }

    this.insertAula = function(objAula) {
        return new Promise(function (resolve, reject) {
            debugger;
            var isAtivo = objAula.ativo ? 1 : 0;
            dbOpen();
            db.transaction(function (sql) {
                sql.executeSql("INSERT INTO AULA VALUES (null, " +
                    "" + objAula.id_aula + ", " +
                    "'" + objAula.nome + "', " +
                    "" + objAula.cd.id_cd + ", " +
                    "" + objAula.bpm + ", " +
                    "'" + objAula.arquivo + "', " +
                    "" + isAtivo + ", " +
                    "" + 0 + ") ", // << CAMPO CUSTOM - BAIXADO
                    [], function (sql, r) {
                        // QDO TERMINA O INSERT, EXECUTA ISSO
                        console.log("TESTE: insertAula [INSERTED] 1 data!");
                        resolve(objAula.id_aula);   // retorna função com o ID do object inserido - pode mudar de acordo com a lógica
                    });
            }, errorCB);
        });
    }

});