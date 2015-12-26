import PWF from "./local.config";


console.log(

    PWF.company
        .where('searchname', 'a test name')
        .where('pending', true)
        .getQuery()

);