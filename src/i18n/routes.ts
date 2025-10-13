type Routes = Record<string, Record<string, string>>;

export const routes: Routes = {
    fr: {
        "a-propos": "a-propos",
        therapie: "therapie",
        ressources: "ressources",
        rdv: "rdv",
    },
    en: {
        "a-propos": "about",
        therapie: "therapy",
        ressources: "resources",
        rdv: "appointment",
    },
};
