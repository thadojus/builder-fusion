import { BuilderComponent, builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export async function getStaticProps({ params, preview = false }) {
  const urlPath = '/' + (params?.page?.join('/') || '');

  const content = await builder
    .get('page', {
      userAttributes: { urlPath },
      prerender: false,
      cachebust: !!preview,
    })
    .toPromise();

  if (!content && !preview) {
    return { notFound: true, revalidate: 5 };
  }

  return {
    props: { content: content || null, urlPath },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default function BuilderCatchAll({ content }) {
  if (!content) return null;
  return <BuilderComponent model="page" content={content} />;
}
