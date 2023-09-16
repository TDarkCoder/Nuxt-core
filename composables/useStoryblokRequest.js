import {DRAFT, PUBLISHED} from '~/constants/storyblokStoryStatuses';

export const useStoryblokRequest = url => {
    const {app} = useRuntimeConfig();
    const {locale} = useI18n();

    return useStoryblokApi().get(`/cdn/${url}`, {
        version: app.isDev ? DRAFT : PUBLISHED,
        language: locale.value,
        resolve_links: 'url',
    });
};
