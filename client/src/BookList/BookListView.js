import { BookCard } from "./BookCardView";

export const BookListView = (props) => {
  const { model } = props;
  const bookList = 
    model.length === 0
      ? 'There are no book records!'
      : model.map((book, key) =>
        <BookCard
          model = { book }
          key = { key }
        />
      );

  return (
    <div className="main-container show-book-list">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <h2 className="display-4 text-center">Book List</h2>
          </div>

          <div className="col-md-11">

            <ButtonLink
              className = 'btn-outline-warning float-left'
              title     = 'Home'
              path      = '/'
            />

            <ButtonLink
              className = 'btn-outline-warning float-right'
              title     = '+ Add New Book'
              path      = '/books/create'
            />
            
            <br />
            <br />
            <br />
          </div>

          <div className="list">{ bookList }</div>
        </div>
      </div>
    </div>
  );
};
