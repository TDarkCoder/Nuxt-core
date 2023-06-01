import ru from "~/locales/ru";
import uz_latn from "~/locales/uz_latn";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'uz_latn',
    messages: {
        ru,
        uz_latn,
    },
}));