import { useQuery } from "@apollo/client";
import { GET_ALL_ADVICES } from "../graphql/queries";
import { useTranslation } from "@/i18n/useTranslation";

function AdviceList() {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_ALL_ADVICES);

  if (loading) return <p>{t.reviews.loadingList}</p>;
  if (error) return <p>{t.reviews.listError} : {error.message}</p>;

  if (!data || !data.getAllAvis || data.getAllAvis.length === 0) {
    return <p>{t.reviews.empty}</p>;
  }

  return (
    <div className="avis">
      <h1 className="page-title">{t.reviews.listTitle}</h1>

      {data.getAllAvis.map((advice: any) => (
        <div key={advice.id} className="advice-card">
          <h3>{advice.title}</h3>

          <p>
            <strong>{t.reviews.authorLabel}:</strong>{" "}
            <span>
              {advice.name} {advice.lastname}
            </span>
          </p>
          <p>
            <strong>{t.reviews.ratingLabel}:</strong>{" "}
            {"⭐".repeat(advice.rating)}
          </p>

          <p>{advice.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AdviceList;
