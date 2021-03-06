var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    
var INC = (isNode ? require.paths : []).concat('../lib', '/jsan')


Harness.configure({
    title     : 'ExtX.Shotenjin Test Suite',
    
    preload : [
        "jsan:Task.Joose.Core",
        "jsan:Task.JooseX.Attribute.Bootstrap",
        "jsan:Task.JooseX.Namespace.Depended.Auto",
        {
            text : "use.paths = " + Harness.prepareINC(INC)
        },
        "jsan:Task.ExtJS.Adapter.Ext",
        'jsan:JooseX.Bridge.Ext',
        'jsan:JooseX.Bridge.Ext.Convertor',
        "jsan:Task.ExtJS.All"
    ]
})


Harness.start(
    '010_sanity.t.js',
    '020_container.t.js'
)

