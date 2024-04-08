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
exports.translateInteraction = void 0;
const translate_1 = require("./translate");
function translateInteraction(interaction, lang) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        yield interaction.reply("Work In Progress");
        let text = (_b = (_a = interaction.options.get("text")) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString();
        let output = yield (0, translate_1.translate)(lang, text);
        yield interaction.editReply(`:pen_fountain:${text}\n:pen_ballpoint:${output}`);
    });
}
exports.translateInteraction = translateInteraction;
