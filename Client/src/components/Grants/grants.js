import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBDataTableV5 } from "mdbreact";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  Button,
  Spinner,
} from "reactstrap";
import dateFormat from "dateformat";

class Grants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grants: [],
      loading: false,
    };

    this.getUpdatedScrapedData = this.getUpdatedScrapedData.bind(this);
  }

  componentDidMount() {
    this.getGrants();
  }

  getGrants = () => {
    // Waiting for the data
    this.setState({
      loading: true,
    });

    fetch("/api/services/grants", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          this.setState({
            grants: data,
            loading: false,
          });
        }, 1000);
      })
      .catch((err) => {
        console.error("Couldn't get grants from server", err);
      });
  };

  getUpdatedScrapedData() {
    if (!this.state.loading) {
      // Waiting for the data
      this.setState({
        loading: true,
      });

      fetch("/api/services/grants", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            this.setState({
              grants: data,
              loading: false,
            });
          }, 1000);
        })
        .catch((err) => {
          console.error("Couldn't get grants from server", err);
        });
    } else {
      console.log("waiting... to load");
    }
  }

  renderGrants = () => {
    const data = {
      columns: [
        {
          label: "Number",
          field: "number",
          width: 200,
        },
        {
          label: "Title",
          field: "title",
          width: 500,
        },
        {
          label: "Agency",
          field: "agency",
          width: 200,
        },
        {
          label: "Posted date",
          field: "postedDate",
          sort: "desc",
          width: 100,
        },
        {
          label: "Close date",
          field: "closeDate",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          width: 100,
        },
      ],
      rows: this.state.grants.map((grant) => {
        grant.number = (
          <a style={{ color: "blue" }} href={grant.javascript}>
            {grant.number}
          </a>
        );
        grant.postedDate = dateFormat(grant.postedDate, "mm/dd/yyyy");
        grant.closeDate = dateFormat(grant.closeDate, "mm/dd/yyyy");
        return grant;
      }),
    };

    return (
      <MDBDataTableV5
        entriesOptions={[10, 20, 50]}
        entries={20}
        hover
        data={data}
        btn
        searchTop
      />
    );
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <h2>Scraped Grants</h2>
            </Col>
            <Col>
              <Button
                className="float-right"
                color="primary"
                onClick={this.getUpdatedScrapedData}
              >
                Update scraped grant data
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody style={{ placeSelf: "center" }}>
          {this.state.loading ? (
            <Spinner color="primary" />
          ) : (
            this.renderGrants()
          )}
        </CardBody>
      </Card>
    );
  }
}

export default Grants;
