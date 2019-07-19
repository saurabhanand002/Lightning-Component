
public class BuildMultiSelectPicklist {
    @AuraEnabled
    public static list<String> fetchValue(String PickVal)
    {
        string getPickVal=PickVal;
        system.debug('@@@'+PickVal);
        //string query='select name from DRMI_Resource__c where Sublap__c';
         list<String> allVal=new list<String>();
          if(String.isNotBlank(getPickVal))
          {
                for(DRMI_Resource__c obA: [select name from DRMI_Resource__c where Sublap__c=:PickVal ])
                {
                    allVal.add(obA.name);
                }
           }
        system.debug('AllValue'+allVal);
        return allVal;
    }

}