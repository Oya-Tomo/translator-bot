"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
function translate(lang, text) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = {
            lang: lang,
            text: text,
        };
        let url = "https://script.google.com/macros/s/AKfycby9SKSCP2VbtBnyuVl1RhSYflnFLcXFhZSTI2qie8SyOEyynhDbOyHJ8IEiHBcfKzdfkg/exec";
        let response = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let result = yield (yield response).json().then((value) => {
            return value;
        });
        return result.text;
    });
}
exports.translate = translate;
