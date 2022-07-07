import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import {HttpClient,HttpHeaders,HttpRequest, HttpEvent,HttpErrorResponse,HttpParams  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';
interface report{

  data:[]
  }
  interface myData{
    access_token:string,
    status:string,
    msg:string,
    role:string,
    username:any,
    details:any,
    body:any
    email:any,
    cuid:any,
    business_title:any
    
  }

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  baseApiUrl = environment.baseApiUrl;  
  private loginstatus=false
  
  constructor(private http:HttpClient,private router:Router) { }

  getDetails(ftid:string,password:string)
  {
    return this.http.post<myData>(`${this.baseApiUrl + '/login?username='+ftid+'&password='+password}`,{})
  }
  //Connect with backend feedback send module
  sendFeedback(name:string,comments:string)
  {
    return this.http.post<myData>(`${this.baseApiUrl + '/feedback?name='+name+'&comments='+comments}`,{})
    // localhost
    // return this.http.post<myData>(`${"http://127.0.0.1:8000" + '/feedback?name='+name+'&comments='+comments}`,{})
      
  }                                                     
  setLoggedIn(value:boolean,token:string,role:string,username:string,email:string,cuid:string,b_title:string){
    this.loginstatus = value 
    sessionStorage.setItem('access_token',token)
    sessionStorage.setItem('role',role)
    sessionStorage.setItem("username",username);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("cuid",cuid);
    sessionStorage.setItem("b_title",b_title);
   
  }

  getSesameData(device_name:string,cust_name:string,gold_number:string,rfs_date1:string,rfs_date2:string,myselect:string):Observable<any>
  {
    var req:any
    if(myselect=='sesame')
    {
      req = new HttpRequest('GET', `${this.baseApiUrl + '/sesam-db-data?router_name='+device_name+'&ic01='+cust_name+
            '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });     
    }
    else if(myselect=='sesame_fileade_provisioning'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/sesam-fileadeprovisioning-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_fileade_meshing'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/sesam-fileademeshing-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_flip'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/sesam-fileademeshing-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_fileade_ordering'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/sesam-FileadeOrdering-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='salto'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/salto-db-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_gold'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/gold-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_oceane'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/oceane-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_orche'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/orchestre-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='salto_gold'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/salto-gold-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='salto_oceane'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/salto-oceane-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='salto_orces'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/salto-orchestre-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1+'&rfs_date_from='+rfs_date2}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='cess'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/cessation-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1}`,
      {},{
      responseType:"json"
      });
    }
    else if(myselect=='sesame_SEENCSA'){
      req = new HttpRequest('GET', `${this.baseApiUrl + '/Seencsa-data?router_name='+device_name+'&ic01='+cust_name+
      '&gold_reference='+gold_number+'&rfs_date_to='+rfs_date1}`,
      {},{
      responseType:"json"
      });
    }



    return this.http.request(req);
   
  }
}
