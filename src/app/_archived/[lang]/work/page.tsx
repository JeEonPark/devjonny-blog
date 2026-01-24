import WorkPage from "@/components/_archived/WorkPage";
import { type Language } from "@/lib/translations";

interface WorkPagePropsLang {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function WorkPageLang({ params }: WorkPagePropsLang) {
  const { lang } = await params;

  return <WorkPage lang={lang} />;
}
