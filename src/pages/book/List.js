import React from "react";
import { Container, Button, Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import services from "../../services";
import SubmitDialogComponent from "../../components/book/SubmitDialog";
import SearchFormComponent from "../../components/book/SearchForm";
import "./Book.css";

export default class BookListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: undefined,
      toCreate: false,
      favorites: false,
    };
  }

  componentDidMount() {
    this.getList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getList();
    }
  }

  getList(searchText) {
    if (this.props.location.pathname === "/book/list")
      services.book
        .getAll(searchText)
        .then((value) => this.setState({ books: value, favorites: false }))
        .catch((err) => this.setState({ error: err }));
    else
      services.user
        .getBooks()
        .then((value) => this.setState({ books: value, favorites: true }))
        .catch((err) => this.setState({ error: err }));
  }

  addToFavorites(bookId) {
    services.user
      .addBook(bookId)
      .then(() => alert("successfuly added"))
      .catch((err) => this.setState({ error: err }));
  }
  removeFromFavorites(bookId) {
    services.user
      .removeBook(bookId)
      .then(() => this.setState((state) => ({ books: state.books.filter((b) => b._id !== bookId) })))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    
    const { books, error, toCreate, favorites } = this.state;

    return (
      <Container>
        {error !== undefined && <Alert variant="danger">{error}</Alert>}

        <div className="buttons-container">
          <Button
            variant="outline-primary"
            style={{ alignSelf: "flex-start" }}
            onClick={() => this.setState({ toCreate: true })}>
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;Add new book
          </Button>
          {!favorites && <SearchFormComponent search={(text) => this.getList(text)} />}
        </div>

        <SubmitDialogComponent
          show={toCreate}
          handleClose={() => this.setState({ toCreate: false })}
          submited={(createdBook) => this.setState({ books: [...books, createdBook], toCreate: false })}
        />

        <Table responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={`book${index}`}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td style={{ textAlign: "right" }}>
                  <Button
                    variant="outline-primary"
                    onClick={() => this.props.history.push(`/book/details/${book._id}`)}>
                    <FontAwesomeIcon icon={faInfo} />
                  </Button>
                  {favorites ? (
                    <Button variant="outline-danger" onClick={() => this.removeFromFavorites(book._id)}>
                      <FontAwesomeIcon icon={faStar} />
                    </Button>
                  ) : (
                    <Button variant="warning" onClick={() => this.addToFavorites(book._id)}>
                      <FontAwesomeIcon icon={faStar} />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
