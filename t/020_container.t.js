StartTest(function(t) {
    
    var async0 = t.beginAsync()
    
    use([ 'ExtX.Shotenjin.Container' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(ExtX.Shotenjin.Container, "'ExtX.Shotenjin.Container' is here")
        t.ok(Shotenjin.Joosed.Template, "'Shotenjin.Joosed.Template' is here")
        
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation")
        
        var cont = new ExtX.Shotenjin.Container({
            
            templateData : {
                name : 'name1',
                value : 'value1'
            },
            
            template : new Shotenjin.Joosed.Template({
                /*tj
                    name : [% name %]
                    value : [% value %]
                tj*/
            })
        })
        
        t.ok(cont, "'ExtX.Shotenjin.Container' was successfully instantiated")
        

        //==================================================================================================================================================================================
        t.diag("Rendering")
        
        cont.render(Ext.getBody())
        
        t.ok(cont.rendered && cont.getEl().dom, 'Container was rendered')
        
        t.ok(/name : name1\svalue : value1/.test(cont.getEl().dom.innerHTML), 'Content of the container is correct')
        
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation from sources")
        
        var cont2 = new ExtX.Shotenjin.Container({
            
            templateData : {
                name : 'name1',
                value : 'value1'
            },
            
            templateSources : {
                /*tj
                    name : [% name %]
                    value : [% value %]
                tj*/
            }
        })
        
        t.ok(cont2, "'ExtX.Shotenjin.Container' was successfully instantiated")
        

        //==================================================================================================================================================================================
        t.diag("Rendering")
        
        cont2.render(Ext.getBody())
        
        t.ok(cont2.rendered && cont2.getEl().dom, 'Container was rendered')
        
        t.ok(/name : name1\svalue : value1/.test(cont2.getEl().dom.innerHTML), 'Content of the container is correct')
        
        
        t.endAsync(async0)
        t.done()
    })
    
})