import {defineConfig} from "astro/config";
import icon from "astro-icon";
import Inspect from "vite-plugin-inspect";
import browserslistToEsbuild from "browserslist-to-esbuild";

// https://astro.build/config
export default defineConfig({
    site: "https://www.elisegrimm.com",
    integrations: [icon()],
    vite: {
        build: {
            target: browserslistToEsbuild(),
        },
        plugins: [Inspect()],
    },
});
