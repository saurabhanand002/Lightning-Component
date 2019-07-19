Helper modified

({
                fetchPickListVal : function(component, event) {
        //debugger;
        var val=component.find("sublapField").get("v.value");
        //alert(val);
        
         var opts = [];
        if(val)
        {
        var action=component.get("c.fetchValue");
        action.setParams({"PickVal":val});
        action.setCallback(this,function(response)
             {
              var state=response.getState();
                 if(state==="SUCCESS")
                 {
                     var allValues = response.getReturnValue();
                     for(var i=0;i<allValues.length;i++)
                     {
                         opts.push({
                             label: allValues[i],
                              value: allValues[i]
                         });
                                                                                }
                     component.set("v.ListOfOption",opts);
                 }
                 else
                 {
                     alert('Callback Failed...');
                 }
                        
               });
         
       var a=component.get("v.ListOfOption");
        //alert('ssdd'+a);
        
                                $A.enqueueAction(action);
        }
                },
    
})
