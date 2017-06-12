"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FileUploadService = (function () {
    function FileUploadService() {
    }
    FileUploadService.prototype.upload = function (url, file, body) {
        return this.makeFileRequest(url, file, body);
    };
    FileUploadService.prototype.makeFileRequest = function (url, file, body) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open("POST", url, true);
            formData.append("file", file, file.name);
            if (body) {
                for (var i = 0; i < body.length; i++) {
                    formData.append(body[i].name, body[i].value);
                }
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.send(formData);
        });
    };
    FileUploadService = __decorate([
        core_1.Injectable()
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=FileUploadService.js.map