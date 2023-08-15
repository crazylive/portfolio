import '../styles/main.scss';
import 'reflect-metadata';
import classNames from 'classnames';
import { ClientLayout } from 'app/client-layout';
import { YandexMetrika } from 'app/YandexMetrika';
import { Gilroy, LibreBaskerville, Lato } from './_fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classNames(Gilroy.variable, LibreBaskerville.variable, Lato.variable)}>
      <body>
        {process.env.NODE_ENV === 'production' && (<YandexMetrika />)}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
