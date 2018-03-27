import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="sv">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="Håkan K Arnoldson, https://arnoldson.online" />
          <meta name="designer" content="Håkan K Arnoldson, https://arnoldson.online" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Spinnfiskeklubben Vingas hemsida. Läs mer on fiske och vår verksamhet på Rävholmen." />
          <meta name="copyright" content="MIT" />
          <meta name="url" content="https://spinnfiskeklubbenvinga.se" />
          <meta name="identifier-URL" content="https://spinnfiskeklubbenvinga.se" />
          <meta name="Classification" content="Non-Profit" />
          <meta name="repository" content="https://github.com/hkarn/spinnfiskeklubben-vinga-website" />
          <meta property="og:title" content="Spinnfiskeklubben Vinga" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://spinnfiskeklubbenvinga.se/" />
          <meta property="og:image" content="https://spinnfiskeklubbenvinga.se/static/images/logo.jpg" />
          <meta property="og:description" content="Spinnfiskeklubben Vingas hemsida." />
          <meta property="og:locale" content="sv_SE" />
          <meta name="theme-color" content="#006699" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/static/fav/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/_next/static/style.css" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115951660-1" />
          <script async src="/static/gtag.js" />
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
          <script defer async src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
          <script defer async src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossOrigin="anonymous" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
