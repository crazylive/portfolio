import { nextJsRevalidateTag, nextJsRevalidationPageUpdate } from '../../../../utils/revalidate-nextjs';

export default {
  async beforeUpdate() {
    await nextJsRevalidateTag('homepage');

    // The second call is needed in order to somehow resolve the issue described below
    // https://github.com/vercel/next.js/discussions/42290#discussioncomment-5827820
    // Right now, I am experiencing the same trouble with revalidation, but the second call below has helped me.
    await nextJsRevalidateTag('/');
  },

  async afterUpdate() {
    await nextJsRevalidationPageUpdate('/');
  },
};
