import Head from 'next/head';
import React, { FC } from 'react';

interface SEOProps {
    site_name?: string;
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url?: string;
    article?: boolean;
    favicon?: string;
    ogImage?: string;
    ogTitle?: string;
    metaDesc?: string;
    ogDesc?: string;
    metaTitle?: string;
    Id?: any;
  }

const SeoTags: FC<SEOProps> = (props) => {
    return (
        <Head>
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <title key={'arsenePortfolioTitle'}>
                {props?.metaTitle ? props.metaTitle : props.title}
            </title>
            <meta name='robots' content='index,follow' key={'noarchiveTitlearsenePortfolio'} />
            <meta
                property='og:type'
                content="fullstackdeveloper"
                key={'arsenePortfolioSitetype' + props?.title}
            />
            <meta
                property='og:site_name'
                content={props?.title}
                key={'arsenePortfolioSitename' + props?.title}
            />
            <meta
                property="og:image"
                content={props?.ogImage ? props?.ogImage : props?.image}
                key={'ogimageTitletypesite_name' + props?.title}
            />
            <meta
                property="og:url"
                content={props?.url}
                key={'urlArsenePortfolio' + props?.title}
            />
            <meta
                property="og:description"
                content={props?.ogDesc ? props?.ogDesc : props?.description}
                key={'arsenePortfoliodescription' + props?.title}
            />
            <meta
                name="twitter:card"
                content="summary"
                key={'twitter:cardsummaryarsenePortfolio' + props?.title}
            />
            <meta
                name="twitter:site"
                content={props?.title}
                key={'twitter:cardsummarysitearsenePortfolio' + props?.title}
            />
            <meta
                name="twitter:url"
                content={props?.url}
                key={'twitter:cardsummarysite32arsenePortfolio' + props?.title}
            />
            <meta
                name="twitter:title"
                content={props?.title}
                key={'twitter:cardsummarysite32544arsenePortfolio' + props?.title}
            />
            <meta
                name="twitter:description"
                content={props?.description}
                key={'twitter:cardsummarysite321212arsenePortfolio' + props?.title}
            />
            <meta
                name="twitter:image"
                content={'/images/logo-light.svg'}
                key={'twitter:cardsummarysite3434332arsenePortfolio' + props?.title}
            />
            <link
                rel="canonical"
                href={props?.url}
                key={'twitter:cardsummarysite3121112arsenePortfolio' + props?.title}
            />
            <meta name="twitter:widgets:theme" content="light" />
            <meta
                name="keywords"
                content={props?.keywords}
                key={'nbKeyword' + props?.title}
            />
            <meta
                name="description"
                content={props?.metaDesc ? props?.metaDesc : props?.description}
                key={'twitter:descriptioncardsummarysite32544arsenePortfolio' + props?.title}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={`/images/logo-light.svg`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href={`/images/logo-light.svg`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={`/images/logo-light.svg`}
            />
        </Head>
    );
}

export default SeoTags;