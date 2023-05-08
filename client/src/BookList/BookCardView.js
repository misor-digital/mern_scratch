import { ButtonLink } from "../components/elements/buttons";

export const BookCard = (props) => {
  const { model } = props;

  return (
    <div className="card-container">
      <img
        src    = 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt    = 'Books'
        height = { 200 }
      />

      <div className="description">
        <h2>
          <ButtonLi
            title = { model.title }
            path  = { `/books/${ model._id }` }
          />
        </h2>
        <h3>{ model.author }</h3>
        <p>{ model.description }</p>
      </div>
    </div>
  );
};
