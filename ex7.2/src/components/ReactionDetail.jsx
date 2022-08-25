import { useParams } from 'react-router-dom';

const ReactionDetail = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <section>
      <h1>Reaction Details for id: {params.id}</h1>
    </section>
  );
};

export default ReactionDetail;
