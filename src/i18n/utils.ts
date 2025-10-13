import {
    defaultLocale,
    prefixDefaultLocale,
    routes,
    translations,
} from "@i18n/index";

export function getLocaleFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in translations) return lang;
    return defaultLocale;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: string) {
        return translations[lang][key] ?? translations[defaultLocale][key];
    };
}

export function useTranslatedPath(lang: keyof typeof translations) {
    return function translatePath(path: string, l: string = lang) {
        const pathName = path.replaceAll("/", "");
        const hasTranslation = defaultLocale !== l && routes[l]?.[pathName];
        const translatedPath = hasTranslation
            ? "/" + routes[l][pathName]
            : path;

        return !prefixDefaultLocale && l === defaultLocale
            ? translatedPath
            : `/${l}${translatedPath}`;
    };
}

export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split("/");
    const path = parts.pop();

    if (path === undefined) {
        return undefined;
    }

    const currentLocale = getLocaleFromUrl(url);

    if (defaultLocale === currentLocale) {
        const route = Object.values(routes)[0];
        return route[path];
    }

    const getKeyByValue = (
        obj: Record<string, string>,
        value: string,
    ): string | undefined => {
        return Object.keys(obj).find(key => obj[key] === value);
    };

    const reversedKey = getKeyByValue(routes[currentLocale], path);

    if (reversedKey !== undefined) {
        return reversedKey;
    }

    return undefined;
}
