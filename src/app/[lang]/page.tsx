import HomePage from "@/components/pages/HomePage";
import { type Language } from "@/lib/translations";

interface HomePagePropsLang {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function HomePageLang({ params }: HomePagePropsLang) {
  const { lang } = await params;

  return <HomePage lang={lang} />;
}
