import KnowledgeHero from "../components/KnowledgeHero";
import KnowledgeArticles from "../components/KnowledgeArticles";
import KnowledgeFAQ from "../components/KnowledgeFAQ";
import KnowledgeCTA from "../components/KnowledgeCTA";

export default function KnowledgePage() {
  return (
    <>
      <KnowledgeHero />

      <KnowledgeArticles />

      <KnowledgeFAQ />

      <KnowledgeCTA />
    </>
  );
}