import { Injectable } from "@angular/core";

@Injectable()
export class FileUploadService {

  upload(url:string, file:File, body?: any[]) {
    return this.makeFileRequest(url, file, body);
  }

  private makeFileRequest(url: string, file:File, body?: any[]) {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.open("POST", url, true);
      formData.append("file", file, file.name);
      if(body) {
        for (let i = 0; i < body.length; i++) {
          formData.append(body[i].name, body[i].value);
        }
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.send(formData);
    });
  }

}
