
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class CompanyService<t> {

  constructor(public http:HttpClient,public configurl:string ) { }

   get():Observable<t>{
    return this.http.get<t>(this.configurl)
   }
   getbyid(id):Observable<t>{
    return this.http.get<t>(this.configurl+`/${id}`)
   }
   post(model:t):Observable<t>{
    return this.http.post<t>(this.configurl,model)
   }

   delete(id):Observable<t>{
    return this.http.delete<t>(this.configurl +`/${id}`)
   }
   put(id,model:t):Observable<t>{
    return this.http.put<t>(this.configurl+ `/${id}`,model)
   }


}
