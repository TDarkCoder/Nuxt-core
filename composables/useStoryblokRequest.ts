import {DRAFT, PUBLISHED} from '~/constants/storyblokStoryStatuses';

export const useStoryblokRequest = (url: string) => {
    const storyblok = useStoryblokApi();
    const {app} = useRuntimeConfig();
    const {locale} = useI18n();

    return storyblok.get(`/cdn/${url}`, {
        version: app.isDev ? DRAFT : PUBLISHED,
        language: locale.value,
        resolve_links: 'url',
    });
};
