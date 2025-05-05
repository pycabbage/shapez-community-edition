import ar from "@shapez/translations/base-ar";
import cz from "@shapez/translations/base-cz";
import da from "@shapez/translations/base-da";
import de from "@shapez/translations/base-de";
import es from "@shapez/translations/base-es";
import fi from "@shapez/translations/base-fi";
import fr from "@shapez/translations/base-fr";
import he from "@shapez/translations/base-he";
import hu from "@shapez/translations/base-hu";
import it from "@shapez/translations/base-it";
import ja from "@shapez/translations/base-ja";
import kor from "@shapez/translations/base-kor";
import nl from "@shapez/translations/base-nl";
import no from "@shapez/translations/base-no";
import pl from "@shapez/translations/base-pl";
import pt_BR from "@shapez/translations/base-pt-BR";
import pt_PT from "@shapez/translations/base-pt-PT";
import ro from "@shapez/translations/base-ro";
import ru from "@shapez/translations/base-ru";
import sv from "@shapez/translations/base-sv";
import tr from "@shapez/translations/base-tr";
import uk from "@shapez/translations/base-uk";
import zh_CN from "@shapez/translations/base-zh-CN";
import zh_TW from "@shapez/translations/base-zh-TW";

/**
 * @type {Object<string, {name: string, data: any, code: string, region: string}>}
 */
export const LANGUAGES = {
    "en": {
        name: "English",
        data: null,
        code: "en",
        region: "",
    },

    "zh-CN": {
        // simplified chinese
        name: "简体中文",
        data: zh_CN,
        code: "zh",
        region: "CN",
    },

    "zh-TW": {
        // traditional chinese
        name: "繁體中文",
        data: zh_TW,
        code: "zh",
        region: "TW",
    },

    "ja": {
        // japanese
        name: "日本語",
        data: ja,
        code: "ja",
        region: "",
    },

    "kor": {
        // korean
        name: "한국어",
        data: kor,
        code: "ko",
        region: "",
    },

    "cs": {
        // czech
        name: "Čeština",
        data: cz,
        code: "cs",
        region: "",
    },

    "da": {
        // danish
        name: "Dansk",
        data: da,
        code: "da",
        region: "",
    },

    "de": {
        // german
        name: "Deutsch",
        data: de,
        code: "de",
        region: "",
    },

    "es-419": {
        // spanish
        name: "Español",
        data: es,
        code: "es",
        region: "",
    },

    "fr": {
        // french
        name: "Français",
        data: fr,
        code: "fr",
        region: "",
    },

    "it": {
        // italian
        name: "Italiano",
        data: it,
        code: "it",
        region: "",
    },

    "hu": {
        // hungarian
        name: "Magyar",
        data: hu,
        code: "hu",
        region: "",
    },

    "nl": {
        // dutch
        name: "Nederlands",
        data: nl,
        code: "nl",
        region: "",
    },

    "no": {
        // norwegian
        name: "Norsk",
        data: no,
        code: "no",
        region: "",
    },

    "pl": {
        // polish
        name: "Polski",
        data: pl,
        code: "pl",
        region: "",
    },

    "pt-PT": {
        // portuguese
        name: "Português",
        data: pt_PT,
        code: "pt",
        region: "PT",
    },

    "pt-BR": {
        // portuguese _ brazil
        name: "Português - Brasil",
        data: pt_BR,
        code: "pt",
        region: "BR",
    },

    "ro": {
        // romanian
        name: "Română",
        data: ro,
        code: "ro",
        region: "",
    },

    "ru": {
        // russian
        name: "Русский",
        data: ru,
        code: "ru",
        region: "",
    },

    "fi": {
        // finish
        name: "Suomi",
        data: fi,
        code: "fi",
        region: "",
    },

    "sv": {
        // swedish
        name: "Svenska",
        data: sv,
        code: "sv",
        region: "",
    },

    "tr": {
        // turkish
        name: "Türkçe",
        data: tr,
        code: "tr",
        region: "",
    },

    "uk": {
        // ukrainian
        name: "Українська",
        data: uk,
        code: "uk",
        region: "",
    },

    "he": {
        // hebrew
        name: "עברית",
        data: he,
        code: "he",
        region: "",
    },

    "ar": {
        // arabic
        name: "العربية",
        data: ar,
        code: "ar",
        region: "",
    },
};
