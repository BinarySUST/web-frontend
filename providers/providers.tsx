import {ThemeProvider} from './theme-providers';

type Props = {
  children: React.ReactNode;
};

export default function Providers({children}: Props) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
}
