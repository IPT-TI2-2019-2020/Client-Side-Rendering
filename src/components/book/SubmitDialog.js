import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import bookService from '../../services/book';

export default class SubmitDialogComponent extends React.Component {
  toEdit = false;

  constructor (props) {
    super (props);
    this.toEdit = props.book !== undefined;
    this.state = this.getFormState ();
  }

  getFormState () {
    return this.toEdit
      ? this.props.book
      : {
          title: '',
          collection: '',
          author: '',
          publish_year: 0,
        };
  }

  handleSubmit (evt) {
    evt.preventDefault ();
    if (this.toEdit) {
      bookService
        .update (this.props.book._id, this.state)
        .then (() => this.props.submited (this.state));
    } else {
      bookService
        .create (this.state)
        .then (bookId => this.props.submited ({...this.state, _id: bookId}));
    }
  }

  handleCancel () {
    this.setState (this.getFormState ());
    this.props.handleClose ();
  }

  render () {
    const {show} = this.props;
    const {title, collection, author, publish_year} = this.state;

    return (
      <Modal show={show} onHide={this.handleCancel}>
        <Modal.Header>
          <Modal.Title>{this.toEdit ? 'Edit book' : 'Create book'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={evt => this.handleSubmit (evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={evt => this.setState ({title: evt.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Collection</Form.Label>
              <Form.Control
                value={collection}
                onChange={evt => this.setState ({collection: evt.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={author}
                onChange={evt => this.setState ({author: evt.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Publish year</Form.Label>
              <Form.Control
                type="number"
                value={publish_year}
                onChange={evt =>
                  this.setState ({publish_year: evt.target.value})}
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleCancel ()}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
