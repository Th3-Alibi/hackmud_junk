function(c, a) {
    var dPr = #fs.nuutec.public({"open":"developments"}),
        dPa = #fs.nuutec.public({"open":"plan"}),
        rePr = /(date for|continues on|of the|developments on) ([a-z0-9_]+(.sh|.exe)?)/ig,
        rePa = /(strategy )([a-z0-9_]+)/ig,
        reTs = /(\w+\.\w+)/ig,
        m,
        prs = [],
        pas = [],
        ts = [],
        tgt = []
    while (m = rePr.exec(dPr)) {
        prs.push(m[2])
    }
    while (m = rePa.exec(dPa)) {
        pas.push(m[2])
    }
    prs.forEach(function(p) {
        ts.push(#fs.nuutec.public({open:"employees", password:pas[0], project:p}))
    })
//    ts.forEach(function(t) {
//        tgt.push(ts.toString.match(reTs)))
//    })
//return tgt
return ts.toString().match(reTs)
//return fts.match(reTs)
}
