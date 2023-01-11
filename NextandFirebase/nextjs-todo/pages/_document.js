import {Html,Head,Main,NextScript} from 'next/document'

export default function Document()
{
    return (
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?
            family=Montserrat:wght@700&family=Montserrat:wght@100;200;300;500;700&display=swap" rel="stylesheet"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/
font-awesome/6.2.1/css/all.min.css"
 integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id="portal1"></div>
                <div id= "portal2"></div>
            </body>
        </Html>
    )

}
