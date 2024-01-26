import {defineConfig} from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://www.elisegrimm.com",
    integrations: [icon()],
    vite: {
        build: {
            cssTarget: "safari12",
        },
    },
});
